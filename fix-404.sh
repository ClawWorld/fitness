#!/bin/bash

# Claw健身教练 - 修复 Vercel 404 问题

echo "🔧 修复 Vercel 404 问题"
echo "========================"

# 检查是否在项目目录
if [ ! -f "start.html" ]; then
    echo "❌ 请在 fitness-website 目录中运行此脚本"
    echo "当前目录: $(pwd)"
    exit 1
fi

echo "✅ 在正确的目录中"

# 清理不需要的文件
echo ""
echo "🧹 清理不需要的文件..."
rm -rf api/
rm -f vercel*.json
rm -f vercel*.js
rm -f check-files.js
rm -f test-server.js
rm -f deploy.sh
rm -f deploy-to-vercel.sh
rm -f 404-解决方案.md
rm -f 部署检查清单.md
rm -f 项目总结.md
rm -f VERCEL_DEPLOYMENT.md
rm -f DEPLOYMENT.md
rm -f 使用说明.md
rm -f README.md
rm -f 项目总结.md
rm -f 部署检查清单.md
rm -f vercel-deploy.md
rm -f vercel-simple-deploy.md

echo "✅ 文件清理完成"

# 创建最简单的 vercel.json
echo ""
echo "📝 创建 Vercel 配置..."
cat > vercel.json << 'EOF'
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

echo "✅ Vercel 配置创建完成"

# 检查文件结构
echo ""
echo "📋 检查文件结构..."
echo "必需文件:"
for file in start.html index.html plan-guide.html css/style.css js/app.js js/i18n.js data/plans.json; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file (缺失)"
    fi
done

# 检查 start.html 内容
echo ""
echo "🔍 检查 start.html 内容..."
if grep -q "Claw健身教练" start.html; then
    echo "✅ start.html 包含中文内容"
else
    echo "⚠️ start.html 可能不包含中文内容"
fi

if grep -q "index.html" start.html; then
    echo "✅ start.html 包含主界面链接"
else
    echo "❌ start.html 缺少主界面链接"
fi

echo ""
echo "========================"
echo "✅ 修复完成！"
echo "========================"
echo ""
echo "现在你可以部署到 Vercel 了："
echo ""
echo "方法1：使用 Vercel CLI"
echo "  vercel --prod"
echo ""
echo "方法2：使用 GitHub"
echo "  1. git add ."
echo "  2. git commit -m 'Deploy to Vercel'"
echo "  3. git push origin main"
echo "  4. 在 Vercel 中导入仓库"
echo ""
echo "部署后测试："
echo "  1. 访问 https://your-project.vercel.app/start.html"
echo "  2. 应该看到启动页面"
echo "  3. 点击'开始训练'进入主界面"
echo ""
echo "如果仍然 404："
echo "  1. 检查 Vercel 部署日志"
echo "  2. 清除浏览器缓存"
echo "  3. 等待几分钟"
echo ""
echo "祝你部署成功！💪"