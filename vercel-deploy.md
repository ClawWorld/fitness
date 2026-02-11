# Vercel 部署问题解决指南

## 🔍 问题分析

你遇到的 404 错误通常是因为：

1. **路由配置错误** - Vercel 无法找到正确的入口文件
2. **文件路径问题** - 文件不在正确的位置
3. **缓存问题** - Vercel 缓存了旧的配置

## ✅ 解决方案

### 方案1：使用静态文件部署（推荐）

这是最简单的方法，不需要任何服务器代码。

#### 步骤：
1. **删除不需要的文件**
   ```bash
   # 删除 API 相关文件
   rm -rf api/
   rm -f vercel.json
   rm -f vercel-static.json
   rm -f vercel-simple.json
   rm -f vercel.config.js
   ```

2. **创建简单的 vercel.json**
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

3. **确保 start.html 在根目录**
   - 检查 `start.html` 是否在项目根目录
   - 确保文件名正确（大小写敏感）

4. **部署到 Vercel**
   ```bash
   # 使用 Vercel CLI
   vercel --prod
   
   # 或者使用 GitHub 部署
   # 1. 推送到 GitHub
   # 2. 在 Vercel 中导入仓库
   # 3. Vercel 会自动检测为静态网站
   ```

### 方案2：使用 Node.js 服务器

如果需要服务器端逻辑，使用此方案。

#### 步骤：
1. **确保文件结构正确**
   ```
   fitness-website/
   ├── api/
   │   └── index.js          # Vercel API 入口
   ├── start.html            # 主入口
   ├── index.html            # 主界面
   ├── css/
   │   └── style.css
   ├── js/
   │   ├── app.js
   │   └── i18n.js
   └── vercel.json
   ```

2. **使用正确的 vercel.json**
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

3. **部署**
   ```bash
   vercel --prod
   ```

## 🛠️ 故障排除

### 问题1：404 错误

**可能原因：**
1. `start.html` 文件不存在
2. 文件路径错误
3. Vercel 配置错误

**解决方案：**
1. 检查文件是否存在：
   ```bash
   ls -la start.html
   ```

2. 检查文件路径：
   ```bash
   # 确保在项目根目录
   pwd
   ```

3. 检查 Vercel 配置：
   ```bash
   cat vercel.json
   ```

### 问题2：页面显示错误

**可能原因：**
1. CSS/JS 文件加载失败
2. 路径错误
3. 缓存问题

**解决方案：**
1. 检查浏览器控制台错误
2. 清除浏览器缓存
3. 检查文件路径是否正确

### 问题3：语言切换不工作

**可能原因：**
1. JavaScript 文件加载失败
2. localStorage 问题
3. 跨域问题

**解决方案：**
1. 检查浏览器控制台错误
2. 确保使用 HTTPS
3. 检查 JavaScript 文件是否正确加载

## 📋 检查清单

### 部署前检查
- [ ] `start.html` 文件存在
- [ ] `start.html` 在项目根目录
- [ ] 所有 CSS 文件存在
- [ ] 所有 JavaScript 文件存在
- [ ] `vercel.json` 配置正确

### 部署后检查
- [ ] 访问部署后的 URL
- [ ] 检查是否显示 404
- [ ] 检查浏览器控制台错误
- [ ] 测试所有功能

## 🚀 快速部署步骤

### 方法A：使用 Vercel CLI
```bash
# 1. 进入项目目录
cd fitness-website

# 2. 确保 vercel.json 配置正确
# 使用静态文件配置
cat > vercel.json << EOF
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
EOF

# 3. 部署
vercel --prod
```

### 方法B：使用 GitHub
1. 推送到 GitHub：
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push origin main
   ```

2. 在 Vercel 中：
   - 点击 "Add New" → "Project"
   - 选择 "Import Git Repository"
   - 选择你的仓库
   - Vercel 会自动检测为静态网站
   - 点击 "Deploy"

## 🎯 成功标准

部署成功后，你应该能够：
1. 访问 `https://your-project.vercel.app/start.html`
2. 看到启动页面
3. 点击"开始训练"进入主界面
4. 所有功能正常工作

## 📞 支持

如果问题仍然存在，请提供：
1. Vercel 部署日志
2. 浏览器控制台错误
3. 你的 vercel.json 配置
4. 项目文件结构

**祝你部署成功！💪**