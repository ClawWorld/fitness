// Vercel 配置文件
module.exports = {
    // 静态文件配置
    static: {
        // 指定静态文件目录
        directory: '.',
        // 指定入口文件
        entry: 'start.html'
    },
    
    // 路由配置
    routes: [
        {
            src: '/',
            dest: '/start.html'
        },
        {
            src: '/(.*)',
            dest: '/$1'
        }
    ]
};