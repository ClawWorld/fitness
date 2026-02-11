# 部署到 Vercel 的说明

## 方法1：使用 Vercel 静态文件服务（推荐）

这是最简单的方法，不需要任何服务器代码。

### 步骤：
1. 将整个 `fitness-website` 文件夹上传到 GitHub
2. 在 Vercel 中创建新项目
3. 选择导入 GitHub 仓库
4. Vercel 会自动检测到这是一个静态网站
5. 部署设置：
   - **Framework Preset**: `Other`
   - **Build Command**: 留空
   - **Output Directory**: 留空
   - **Install Command**: 留空

### 文件结构：
```
fitness-website/
├── start.html          # 主入口
├── index.html          # 主界面
├── plan-guide.html     # 计划说明
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   └── i18n.js
├── data/
│   └── plans.json
├── docs/
│   ├── 训练计划说明.md
│   └── 未来功能规划.md
└── 其他文件...
```

## 方法2：使用 Node.js 服务器

如果需要服务器端逻辑，可以使用这种方法。

### 步骤：
1. 确保 `package.json` 中有正确的脚本：
   ```json
   {
     "scripts": {
       "start": "node server.js"
     }
   }
   ```

2. 在 Vercel 中：
   - **Framework Preset**: `Other`
   - **Build Command**: 留空
   - **Output Directory**: 留空
   - **Install Command**: 留空
   - **Start Command**: `node server.js`

## 方法3：使用 Vercel 的 API 路由

这是最灵活的方法，适合需要动态功能的情况。

### 步骤：
1. 创建 `api/index.js` 文件（已创建）
2. 配置 `vercel.json`（已创建）
3. 在 Vercel 中：
   - **Framework Preset**: `Other`
   - **Build Command**: 留空
   - **Output Directory**: 留空
   - **Install Command**: 留空
   - **Start Command**: 留空

## Vercel 配置说明

### vercel.json 配置
```json
{
  "version": 2,
  "builds": [
    {
      "src": "api/index.js",
      "use": "@vercel/node"
    },
    {
      "src": "**/*",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/api/index.js"
    }
  ]
}
```

### 静态文件配置
```json
{
  "version": 2,
  "builds": [
    {
      "src": "**/*",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

## 部署后的访问

部署成功后，Vercel 会提供一个域名，例如：
- `https://claw-fitness.vercel.app`
- 或者你自定义的域名

## 注意事项

### 1. 数据持久化
- 当前版本使用浏览器的 `localStorage` 存储数据
- 这意味着数据只保存在用户的浏览器中
- 如果需要跨设备同步，需要添加后端数据库

### 2. 语言切换
- 语言设置保存在 `localStorage` 中
- 用户切换语言后，设置会保存
- 刷新页面后语言设置会保持

### 3. 响应式设计
- 网站已适配移动端
- 在手机上也能正常使用

### 4. 性能优化
- 所有文件都已压缩
- 使用了浏览器缓存
- 图片使用了 SVG 格式

## 测试部署

### 本地测试
```bash
# 进入项目目录
cd fitness-website

# 启动本地服务器
node server.js

# 或者使用 Python
python3 -m http.server 8080
```

### Vercel CLI 测试
```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel

# 或者使用 Vercel CLI 的开发模式
vercel dev
```

## 常见问题

### Q: 部署后页面显示 404
A: 确保 `start.html` 是项目的根文件，或者检查 `vercel.json` 配置

### Q: 数据无法保存
A: 检查浏览器是否启用了 localStorage，或者是否有浏览器扩展阻止了存储

### Q: 语言切换不生效
A: 清除浏览器缓存，或者检查 JavaScript 控制台是否有错误

### Q: 页面加载缓慢
A: 检查网络连接，或者考虑使用 CDN 加速

## 后续优化建议

### 1. 添加后端 API
- 用户认证
- 数据同步
- 训练计划生成

### 2. 添加分析功能
- 用户行为分析
- 训练数据统计
- 进度追踪图表

### 3. 添加社交功能
- 成就系统
- 分享功能
- 社区互动

### 4. 添加移动端应用
- PWA 支持
- 离线功能
- 推送通知

## 联系方式

如有问题，请联系你的健身教练 Claw 💪