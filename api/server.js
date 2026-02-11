// Vercel 专用服务器
const http = require('http');
const fs = require('fs');
const path = require('path');

// Vercel 环境变量
const PORT = process.env.PORT || 8080;
const BASE_DIR = path.join(__dirname, '..');

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

// 创建HTTP服务器
const server = http.createServer((req, res) => {
    // 解析URL
    let filePath = req.url === '/' ? '/start.html' : req.url;
    filePath = path.join(BASE_DIR, filePath);
    
    // 安全检查：防止目录遍历
    if (!filePath.startsWith(BASE_DIR)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Forbidden');
        return;
    }

    // 获取文件扩展名
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    // 读取文件
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // 文件不存在，返回404
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(`
                    <html>
                        <head><title>404 - 文件未找到</title></head>
                        <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
                            <h1>404 - 文件未找到</h1>
                            <p>请求的文件不存在: ${req.url}</p>
                            <p><a href="/start.html">返回首页</a></p>
                        </body>
                    </html>
                `);
            } else {
                // 其他错误
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('服务器内部错误: ' + err.code);
            }
            return;
        }

        // 成功读取文件
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

// 启动服务器
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// 导出用于 Vercel
module.exports = server;