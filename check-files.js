// 检查文件结构
const fs = require('fs');
const path = require('path');

console.log('🔍 检查文件结构');
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
console.log('📁 文件结构检查');
console.log('========================\n');

// 检查目录结构
const dirs = ['css', 'js', 'data', 'docs', 'api'];
dirs.forEach(dir => {
    const dirPath = path.join(__dirname, dir);
    if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath);
        console.log(`📁 ${dir}/ - ${files.length} 个文件`);
    } else {
        console.log(`❌ ${dir}/ - 目录不存在`);
    }
});

console.log('\n========================');
console.log('🎯 入口文件检查');
console.log('========================\n');

// 检查入口文件
const entryFile = 'start.html';
const entryPath = path.join(__dirname, entryFile);

if (fs.existsSync(entryPath)) {
    console.log(`✅ ${entryFile} - 存在`);
    
    // 检查文件内容
    const content = fs.readFileSync(entryPath, 'utf8');
    if (content.includes('Claw健身教练')) {
        console.log(`✅ ${entryFile} - 包含中文内容`);
    } else {
        console.log(`⚠️ ${entryFile} - 可能不包含中文内容`);
    }
    
    if (content.includes('index.html')) {
        console.log(`✅ ${entryFile} - 包含主界面链接`);
    } else {
        console.log(`❌ ${entryFile} - 缺少主界面链接`);
    }
} else {
    console.log(`❌ ${entryFile} - 不存在`);
}

console.log('\n========================');
console.log('📦 Vercel 配置检查');
console.log('========================\n');

// 检查 Vercel 配置
const vercelFiles = ['vercel.json', 'vercel-simple.json', 'vercel-static.json'];
vercelFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        console.log(`✅ ${file} - 存在`);
        
        // 显示配置内容
        const content = fs.readFileSync(filePath, 'utf8');
        const config = JSON.parse(content);
        console.log(`   版本: ${config.version}`);
        console.log(`   构建: ${config.builds ? config.builds.length : 0} 个`);
        console.log(`   路由: ${config.routes ? config.routes.length : 0} 个`);
    } else {
        console.log(`⚠️ ${file} - 不存在`);
    }
});

console.log('\n========================');
console.log('🎯 部署建议');
console.log('========================\n');

if (allFilesExist) {
    console.log('✅ 所有必需文件都存在');
    console.log('\n推荐部署方法：');
    console.log('1. 使用静态文件部署 (最简单)');
    console.log('2. 确保 vercel.json 配置正确');
    console.log('3. 在 Vercel 中导入项目');
    console.log('4. Vercel 会自动检测为静态网站');
} else {
    console.log('❌ 缺少必需文件，请修复后再部署');
}

console.log('\n========================');
console.log('🚀 下一步');
console.log('========================\n');

console.log('1. 检查 vercel.json 配置');
console.log('2. 确保 start.html 在根目录');
console.log('3. 使用以下命令部署：');
console.log('   vercel --prod');
console.log('4. 如果仍然 404，尝试：');
console.log('   - 清除浏览器缓存');
console.log('   - 等待几分钟');
console.log('   - 检查 Vercel 部署日志');