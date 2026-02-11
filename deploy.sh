#!/bin/bash

# Claw健身教练 - Vercel部署脚本

echo "🚀 开始部署到 Vercel"
echo "========================"

# 检查是否安装了 Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "❌ 未安装 Vercel CLI"
    echo "请先安装: npm i -g vercel"
    exit 1
fi

# 检查是否登录
if ! vercel whoami &> /dev/null; echo "检查登录状态..."; then
    echo "❌ 未登录 Vercel"
    echo "请先登录: vercel login"
    exit 1
fi

echo "✅ 已登录 Vercel"

# 选择部署配置
echo ""
echo "请选择部署配置:"
echo "1. 静态文件部署 (推荐)"
echo "2. Node.js 服务器部署"
echo "3. 退出"
read -p "请输入选项 (1-3): " choice

case $choice in
    1)
        echo "使用静态文件部署..."
        # 复制静态配置
        cp vercel-simple.json vercel.json
        ;;
    2)
        echo "使用 Node.js 服务器部署..."
        # 确保 vercel.json 使用正确的配置
        if [ ! -f "vercel.json" ]; then
            echo "❌ vercel.json 文件不存在"
            exit 1
        fi
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
echo "开始部署..."
echo "========================"

# 部署到 Vercel
vercel --prod

echo ""
echo "✅ 部署完成！"
echo "========================"
echo ""
echo "部署后，请访问提供的 URL 测试网站。"
echo "如果遇到 404 错误，请尝试以下方法："
echo "1. 确保 start.html 文件存在"
echo "2. 检查 vercel.json 配置"
echo "3. 尝试清除浏览器缓存"
echo "4. 等待几分钟让 Vercel 缓存更新"