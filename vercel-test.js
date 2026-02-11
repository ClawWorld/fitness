// Vercel 部署测试脚本
const fs = require('fs');
const path = require('path');

console.log('🔍 Vercel 部署配置检查');
console.log('========================\n');

// 检查必需文件
const requiredFiles = [
    'start.html',
    'index.html',
    'plan-guide.html',
    'css/style.css',
    'js/app.js',
    'js/i18n.js',
    'data/plans.json'
];

let allFilesExist = true;

requiredFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        console.log(`✅ ${file} - 存在`);
    } else {
        console.log(`❌ ${file} - 缺失`);
        allFilesExist = false;
    }
});

console.log('\n========================');
console.log('📦 Vercel 配置文件检查');
console.log('========================\n');

// 检查 Vercel 配置文件
const vercelFiles = [
    'vercel.json',
    'vercel-static.json',
    'api/index.js',
    'api/server.js',
    'api/package.json'
];

vercelFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        console.log(`✅ ${file} - 存在`);
    } else {
        console.log(`⚠️ ${file} - 不存在（可选）`);
    }
});

console.log('\n========================');
console.log('📊 项目统计');
console.log('========================\n');

// 统计文件数量
function countFiles(dir) {
    let count = 0;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            count += countFiles(filePath);
        } else {
            count++;
        }
    });
    return count;
}

const totalFiles = countFiles(__dirname);
console.log(`📁 总文件数: ${totalFiles}`);
console.log(`📂 目录数: ${fs.readdirSync(__dirname).filter(item => {
    const stats = fs.statSync(path.join(__dirname, item));
    return stats.isDirectory();
}).length}`);

console.log('\n========================');
console.log('🎯 部署建议');
console.log('========================\n');

if (allFilesExist) {
    console.log('✅ 所有必需文件都存在，可以部署到 Vercel');
    console.log('\n部署步骤:');
    console.log('1. 将整个项目上传到 GitHub');
    console.log('2. 在 Vercel 中导入 GitHub 仓库');
    console.log('3. Vercel 会自动识别为静态网站');
    console.log('4. 无需配置，直接部署');
} else {
    console.log('❌ 缺少必需文件，无法部署');
    console.log('\n请确保以下文件存在:');
    requiredFiles.forEach(file => {
        if (!fs.existsSync(path.join(__dirname, file))) {
            console.log(`  - ${file}`);
        }
    });
}

console.log('\n========================');
console.log('🌐 多语言支持检查');
console.log('========================\n');

// 检查 i18n.js 文件
const i18nPath = path.join(__dirname, 'js/i18n.js');
if (fs.existsSync(i18nPath)) {
    const i18nContent = fs.readFileSync(i18nPath, 'utf8');
    const languageCount = (i18nContent.match(/'zh-CN'|'en'/g) || []).length;
    console.log(`✅ 国际化支持: ${languageCount} 种语言（中英文）`);
    
    // 检查翻译数量
    const translationCount = (i18nContent.match(/'header\.title'|'header\.subtitle'|'button\.start'/g) || []).length;
    console.log(`✅ 翻译条目: ${translationCount} 条`);
} else {
    console.log('❌ i18n.js 文件缺失');
}

console.log('\n========================');
console.log('🚀 准备就绪！');
console.log('========================\n');

if (allFilesExist) {
    console.log('项目已准备好部署到 Vercel！');
    console.log('建议使用静态文件部署方法。');
} else {
    console.log('请修复缺失的文件后再部署。');
}