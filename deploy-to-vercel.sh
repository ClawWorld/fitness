#!/bin/bash

# Claw健身教练 - Vercel 部署脚本（解决404问题）

echo "🚀 Claw健身教练 - Vercel 部署脚本"
echo "=================================="

# 检查是否在项目目录
if [ ! -f "start.html" ]; then
    echo "❌ 请在 fitness-website 目录中运行此脚本"
    echo "当前目录: $(pwd)"
    exit 1
fi

echo "✅ 在正确的目录中"

# 检查是否安装了 Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "❌ 未安装 Vercel CLI"
    echo "请先安装: npm i -g vercel"
    exit 1
fi

echo "✅ Vercel CLI 已安装"

# 检查是否登录
if ! vercel whoami &> /dev/null; then
    echo "❌ 未登录 Vercel"
    echo "请先登录: vercel login"
    exit 1
fi

echo "✅ 已登录 Vercel"

# 清理不需要的文件
echo ""
echo "🧹 清理不需要的文件..."
rm -rf api/
rm -f vercel*.json
rm -f vercel*.js
rm -f check-files.js
rm -f deploy.sh
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

# 部署到 Vercel
echo ""
echo "🚀 开始部署到 Vercel..."
echo "=================================="
echo ""
echo "请选择部署方式:"
echo "1. 使用 Vercel CLI (推荐)"
echo "2. 使用 GitHub (需要先推送到 GitHub)"
echo "3. 退出"
echo ""
read -p "请输入选项 (1-3): " choice

case $choice in
    1)
        echo "使用 Vercel CLI 部署..."
        echo ""
        echo "运行: vercel --prod"
        echo ""
        vercel --prod
        ;;
    2)
        echo "使用 GitHub 部署..."
        echo ""
        echo "步骤:"
        echo "1. 推送到 GitHub:"
        echo "   git add ."
        echo "   git commit -m 'Deploy to Vercel'"
        echo "   git push origin main"
        echo ""
        echo "2. 在 Vercel 中:"
        echo "   - 点击 'Add New' → 'Project'"
        echo "   - 选择 'Import Git Repository'"
        echo "   - 选择你的仓库"
        echo "   - Vercel 会自动检测为静态网站"
        echo "   - 点击 'Deploy'"
        ;;
    3)
        echo "退出部署"
        exit 0
        ;;
    *)
        echo "❌ 无效选项"
        exit 1
        ;;
esac

echo ""
echo "=================================="
echo "✅ 部署完成！"
echo "=================================="
echo ""
echo "部署后，请访问提供的 URL 测试网站。"
echo ""
echo "如果遇到 404 错误，请尝试以下方法："
echo "1. 访问 /start.html 而不是根路径"
echo "2. 清除浏览器缓存"
echo "3. 等待几分钟让 Vercel 缓存更新"
echo "4. 检查 Vercel 部署日志"
echo ""
echo "祝你部署成功！💪"