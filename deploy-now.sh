#!/bin/bash

# Claw健身教练 - 立即部署到 Vercel

echo "🚀 Claw健身教练 - 立即部署到 Vercel"
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

# 检查文件结构
echo ""
echo "📋 检查文件结构..."
echo "必需文件:"
for file in start.html index.html plan-guide.html css/style.css js/app.js js/i18n.js data/plans.json; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file (缺失)"
        exit 1
    fi
done

echo ""
echo "✅ 所有必需文件都存在"

# 检查 vercel.json
echo ""
echo "📋 检查 Vercel 配置..."
if [ -f "vercel.json" ]; then
    echo "✅ vercel.json 存在"
    cat vercel.json
else
    echo "❌ vercel.json 不存在"
    echo "正在创建..."
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
    echo "✅ vercel.json 已创建"
fi

echo ""
echo "🚀 开始部署到 Vercel..."
echo "=================================="
echo ""

# 部署到 Vercel
vercel --prod

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