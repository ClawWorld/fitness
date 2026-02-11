# Vercel 部署指南

## 🚀 快速部署（推荐方法）

### 方法1：通过 GitHub 部署（最简单）

#### 步骤：
1. **创建 GitHub 仓库**
   ```bash
   # 在 GitHub 上创建新仓库
   # 例如：claw-fitness-website
   ```

2. **上传代码到 GitHub**
   ```bash
   # 进入项目目录
   cd /home/node/.openclaw/workspace/fitness-website

   # 初始化 Git（如果还没有）
   git init
   git add .
   git commit -m "Initial commit"

   # 添加远程仓库
   git remote add origin https://github.com/你的用户名/claw-fitness-website.git

   # 推送到 GitHub
   git push -u origin main
   ```

3. **在 Vercel 中部署**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "Add New" → "Project"
   - 选择 "Import Git Repository"
   - 选择你的 GitHub 仓库
   - Vercel 会自动检测到这是一个静态网站
   - 点击 "Deploy"

4. **配置（如果需要）**
   - **Framework Preset**: `Other`
   - **Build Command**: 留空
   - **Output Directory**: 留空
   - **Install Command**: 留空
   - **Start Command**: 留空

5. **部署完成**
   - Vercel 会提供一个域名，例如：`https://claw-fitness.vercel.app`
   - 你可以自定义域名

### 方法2：使用 Vercel CLI

#### 步骤：
1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   # 进入项目目录
   cd /home/node/.openclaw/workspace/fitness-website

   # 部署
   vercel
   ```

4. **按照提示操作**
   - 选择项目名称
   - 选择部署目录（当前目录）
   - 等待部署完成

### 方法3：手动上传文件

#### 步骤：
1. **准备部署文件**
   - 确保所有文件都在项目根目录
   - 删除不需要的文件（如 `.git` 目录）

2. **使用 Vercel CLI 上传**
   ```bash
   vercel --prod
   ```

3. **或者使用 Vercel 网页界面**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "Add New" → "Project"
   - 选择 "Upload Files"
   - 拖拽整个项目文件夹
   - 点击 "Deploy"

## 📁 项目结构说明

### 必需文件
```
fitness-website/
├── start.html          # 主入口文件（必须）
├── index.html          # 主界面
├── plan-guide.html     # 计划说明页面
├── test-i18n.html      # 多语言测试页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   ├── app.js          # 主要逻辑
│   └── i18n.js         # 国际化支持
├── data/
│   └── plans.json      # 训练计划数据
└── 其他文件...
```

### 可选文件
```
├── server.js           # 本地服务器（不需要部署）
├── package.json        # 本地开发配置（不需要部署）
├── vercel.json         # Vercel 配置（可选）
├── vercel-static.json  # Vercel 静态配置（可选）
├── api/                # Vercel API 路由（不需要）
├── docs/               # 文档（不需要）
└── DEPLOYMENT.md       # 部署说明（不需要）
```

## 🔧 Vercel 配置选项

### 静态网站配置（推荐）
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

### Node.js 服务器配置
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/server.js"
    }
  ]
}
```

## 🌐 自定义域名

### 步骤：
1. 在 Vercel 项目设置中
2. 点击 "Domains"
3. 添加你的域名
4. 按照提示配置 DNS 记录
5. 等待 DNS 生效（通常几分钟到几小时）

## 📊 监控和分析

### Vercel 提供的功能：
- **实时日志**：查看部署和运行日志
- **性能分析**：查看页面加载速度
- **错误监控**：捕获 JavaScript 错误
- **流量分析**：查看访问统计

### 访问方式：
- 在 Vercel 项目页面
- 点击 "Analytics" 标签
- 查看详细数据

## 🔍 故障排除

### 问题1：部署失败
**可能原因**：
- 文件路径错误
- 缺少必需文件
- 权限问题

**解决方案**：
- 检查文件路径是否正确
- 确保 `start.html` 存在
- 检查文件权限

### 问题2：页面显示 404
**可能原因**：
- 部署目录错误
- 文件名错误
- 路由配置错误

**解决方案**：
- 确保 `start.html` 在根目录
- 检查文件名大小写
- 检查 Vercel 配置

### 问题3：数据无法保存
**可能原因**：
- 浏览器 localStorage 问题
- 跨域问题
- HTTPS 问题

**解决方案**：
- 检查浏览器设置
- 确保使用 HTTPS
- 清除浏览器缓存

### 问题4：语言切换不生效
**可能原因**：
- JavaScript 文件加载失败
- i18n.js 文件缺失
- 浏览器缓存问题

**解决方案**：
- 检查浏览器控制台错误
- 确保 i18n.js 文件存在
- 强制刷新页面（Ctrl+F5）

## 🚀 性能优化

### 1. 启用压缩
- Vercel 自动启用 Gzip 压缩
- 确保文件大小合理

### 2. 使用 CDN
- Vercel 使用全球 CDN
- 自动缓存静态文件

### 3. 优化图片
- 使用 SVG 格式
- 压缩图片大小

### 4. 最小化代码
- 压缩 CSS 和 JavaScript
- 移除未使用的代码

## 📈 扩展功能

### 1. 添加后端 API
- 创建 `api/` 目录
- 添加 Node.js 文件
- 配置 Vercel 路由

### 2. 添加数据库
- 使用 Vercel Postgres
- 或者使用第三方数据库

### 3. 添加认证
- 使用 Vercel Authentication
- 或者集成第三方认证

### 4. 添加分析
- 使用 Vercel Analytics
- 或者集成 Google Analytics

## 📞 支持

### Vercel 文档
- [Vercel 官方文档](https://vercel.com/docs)
- [Vercel 部署指南](https://vercel.com/docs/deployment)

### 社区支持
- [Vercel 社区](https://vercel.com/community)
- [GitHub Issues](https://github.com/vercel/vercel/issues)

## 🎉 部署成功！

部署成功后，你的健身网站就可以通过 Vercel 提供的域名访问了！

**记得分享给你的朋友，一起健身吧！💪**