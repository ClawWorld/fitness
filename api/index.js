// Vercel 静态文件服务器
const fs = require('fs');
const path = require('path');

// 处理 Vercel 请求
module.exports = (req, res) => {
    // 获取请求的文件路径
    let filePath = req.url === '/' ? '/start.html' : req.url;
    
    // 移除查询参数
    filePath = filePath.split('?')[0];
    
    // 构建完整路径
    const fullPath = path.join(__dirname, '..', filePath);
    
    // 安全检查：防止目录遍历
    if (!fullPath.startsWith(path.join(__dirname, '..'))) {
        res.status(403).send('Forbidden');
        return;
    }

    // 检查文件是否存在
    fs.stat(fullPath, (err, stats) => {
        if (err || !stats.isFile()) {
            // 文件不存在，返回404
            res.status(404).send(`
                <html>
                    <head><title>404 - 文件未找到</title></head>
                    <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
                        <h1>404 - 文件未找到</h1>
                        <p>请求的文件不存在: ${req.url}</p>
                        <p><a href="/start.html">返回首页</a></p>
                    </body>
                </html>
            `);
            return;
        }

        // 获取文件扩展名
        const ext = path.extname(fullPath).toLowerCase();
        
        // MIME类型映射
        const mimeTypes = {
            '.html': 'text/html',
            '.css': 'text/css',
            '.js': 'application/javascript',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
            '.ico': 'image/x-icon',
            '.md': 'text/markdown'
        };

        const contentType = mimeTypes[ext] || 'application/octet-stream';

        // 读取并发送文件
        fs.readFile(fullPath, (err, data) => {
            if (err) {
                res.status(500).send('服务器内部错误');
                return;
            }

            res.setHeader('Content-Type', contentType);
            res.send(data);
        });
    });
};