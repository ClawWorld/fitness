// 简单的本地服务器，用于测试健身网站
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const BASE_DIR = __dirname;

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
    let filePath = req.url === '/' ? '/index.html' : req.url;
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
                            <p><a href="/index.html">返回首页</a></p>
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
    console.log(`
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║   💪 Claw健身教练 - 本地服务器已启动                       ║
║                                                            ║
║   访问地址: http://localhost:${PORT}                       ║
║                                                            ║
║   按 Ctrl+C 停止服务器                                     ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
    `);
});

// 错误处理
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`端口 ${PORT} 已被占用，请尝试其他端口`);
    } else {
        console.error('服务器错误:', err);
    }
});

// 优雅关闭
process.on('SIGINT', () => {
    console.log('\n正在关闭服务器...');
    server.close(() => {
        console.log('服务器已关闭');
        process.exit(0);
    });
});