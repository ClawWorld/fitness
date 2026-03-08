// Claw健身教练 - 国际化（i18n）支持
// 支持多语言切换

// 语言配置 - 简化版，只支持中英文
const languages = {
    'zh-CN': {
        name: '中文',
        flag: '🇨🇳'
    },
    'en': {
        name: 'English',
        flag: '🇺🇸'
    }
};

// 翻译数据 - 简化版，只支持中英文
const translations = {
    'zh-CN': {
        // 头部
        'header.title': '💪 Claw健身教练',
        'header.subtitle': '你的私人健身助手',
        
        // 月份选择
        'month-selector.title': '选择月份',
        'month-selector.month1': '第1个月',
        'month-selector.month2': '第2个月',
        'month-selector.month3': '第3个月',
        
        // 周选择
        'week-selector.title': '选择周数',
        'week-selector.week1': '第1周',
        'week-selector.week2': '第2周',
        'week-selector.week3': '第3周',
        'week-selector.week4': '第4周',
        
        // 训练计划
        'plan-section.title': '本月训练计划',
        'plan-section.no-plan': '暂无训练计划',
        
        // 训练记录
        'log-section.title': '训练记录',
        'log-form.date': '训练日期',
        'log-form.type': '训练部位',
        'log-form.type.chest': '前胸',
        'log-form.type.arms': '手臂',
        'log-form.type.abs': '腹部',
        'log-form.type.back': '背部',
        'log-form.type.legs': '腿部',
        'log-form.duration': '训练时长（分钟）',
        'log-form.notes': '训练备注',
        'log-form.notes.placeholder': '记录你的感受、进步或需要改进的地方...',
        'log-form.save': '保存训练记录',
        'log-history.title': '近期训练记录',
        'log-history.empty': '暂无训练记录',
        
        // 进度追踪
        'progress-section.title': '进度追踪',
        'progress.total-workouts': '总训练次数',
        'progress.total-hours': '总训练时长（小时）',
        'progress.current-week': '当前周数',
        
        // 教练建议
        'coach-section.title': '💪 教练建议',
        'coach-tip1.title': '新手提示：',
        'coach-tip1.text': '保持正确的姿势比增加重量更重要。如果感觉疼痛，请立即停止。',
        'coach-tip2.title': '恢复建议：',
        'coach-tip2.text': '每次训练后确保有足够的休息时间，肌肉在休息时生长。',
        'coach-tip3.title': '营养提醒：',
        'coach-tip3.text': '训练后30分钟内补充蛋白质，帮助肌肉恢复。',
        
        // 页脚
        'footer.copyright': '© 2026 Claw健身教练 | 你的健身伙伴',
        'footer.disclaimer': '⚠️ 请在开始任何新的锻炼计划前咨询医生',
        
        // 消息提示
        'message.success': '训练记录已保存！💪',
        'message.error': '请填写所有必填项',
        'message.no-plan': '暂无第{month}个月第{week}周的训练计划',
        
        // 按钮
        'button.start': '开始训练 🚀',
        'button.plan-guide': '查看计划说明 📖',
        'button.change-language': '切换语言 🌐',
        
        // 训练计划卡片
        'workout-card.duration': '时长：',
        
        // 其他
        'loading': '加载中...',
        'error': '错误',
        'warning': '警告'
    },
    'en': {
        // Header
        'header.title': '💪 Claw Fitness Coach',
        'header.subtitle': 'Your Personal Fitness Assistant',
        
        // Month selection
        'month-selector.title': 'Select Month',
        'month-selector.month1': 'Month 1',
        'month-selector.month2': 'Month 2',
        'month-selector.month3': 'Month 3',
        
        // Week selection
        'week-selector.title': 'Select Week',
        'week-selector.week1': 'Week 1',
        'week-selector.week2': 'Week 2',
        'week-selector.week3': 'Week 3',
        'week-selector.week4': 'Week 4',
        
        // Training plan
        'plan-section.title': 'This Month\'s Training Plan',
        'plan-section.no-plan': 'No training plan available',
        
        // Training log
        'log-section.title': 'Training Log',
        'log-form.date': 'Training Date',
        'log-form.type': 'Training Area',
        'log-form.type.chest': 'Chest',
        'log-form.type.arms': 'Arms',
        'log-form.type.abs': 'Abs',
        'log-form.type.back': 'Back',
        'log-form.type.legs': 'Legs',
        'log-form.duration': 'Duration (minutes)',
        'log-form.notes': 'Notes',
        'log-form.notes.placeholder': 'Record your feelings, progress, or areas for improvement...',
        'log-form.save': 'Save Training Record',
        'log-history.title': 'Recent Training Records',
        'log-history.empty': 'No training records yet',
        
        // Progress tracking
        'progress-section.title': 'Progress Tracking',
        'progress.total-workouts': 'Total Workouts',
        'progress.total-hours': 'Total Hours',
        'progress.current-week': 'Current Week',
        
        // Coach tips
        'coach-section.title': '💪 Coach Tips',
        'coach-tip1.title': 'Beginner Tip: ',
        'coach-tip1.text': 'Maintaining proper form is more important than increasing weight. Stop immediately if you feel pain.',
        'coach-tip2.title': 'Recovery Advice: ',
        'coach-tip2.text': 'Ensure adequate rest time after each workout. Muscles grow during rest.',
        'coach-tip3.title': 'Nutrition Reminder: ',
        'coach-tip3.text': 'Supplement with protein within 30 minutes after training to aid muscle recovery.',
        
        // Footer
        'footer.copyright': '© 2026 Claw Fitness Coach | Your Fitness Partner',
        'footer.disclaimer': '⚠️ Please consult a doctor before starting any new exercise program',
        
        // Messages
        'message.success': 'Training record saved! 💪',
        'message.error': 'Please fill in all required fields',
        'message.no-plan': 'No training plan available for Month {month} Week {week}',
        
        // Buttons
        'button.start': 'Start Training 🚀',
        'button.plan-guide': 'View Plan Guide 📖',
        'button.change-language': 'Change Language 🌐',
        
        // Workout cards
        'workout-card.duration': 'Duration: ',
        
        // Other
        'loading': 'Loading...',
        'error': 'Error',
        'warning': 'Warning'
    }
};

// 默认语言
let currentLanguage = 'zh-CN';

// 获取翻译
function t(key, params = {}) {
    const lang = currentLanguage;
    let text = translations[lang] && translations[lang][key];
    
    if (!text) {
        // 如果当前语言没有翻译，尝试英文
        text = translations['en'] && translations['en'][key];
        if (!text) {
            // 如果英文也没有，返回key本身
            text = key;
        }
    }
    
    // 替换参数
    if (params && Object.keys(params).length > 0) {
        Object.keys(params).forEach(param => {
            text = text.replace(new RegExp(`{${param}}`, 'g'), params[param]);
        });
    }
    
    return text;
}

// 设置语言
function setLanguage(lang) {
    if (languages[lang]) {
        currentLanguage = lang;
        localStorage.setItem('clawFitnessLanguage', lang);
        updateUI();
        if (typeof updateInternationalTexts === 'function') {
            updateInternationalTexts();
        }
        if (typeof displayWorkoutPlan === 'function' && typeof currentMonth !== 'undefined' && typeof currentWeek !== 'undefined') {
            displayWorkoutPlan(currentMonth, currentWeek);
        }
        if (typeof updateStats === 'function') {
            updateStats();
        } else if (typeof displayWorkoutHistory === 'function') {
            displayWorkoutHistory();
        }
        return true;
    }
    return false;
}

// 获取当前语言
function getCurrentLanguage() {
    return currentLanguage;
}

function getLanguageFromQuery() {
    try {
        const params = new URLSearchParams(window.location.search);
        const lang = params.get('lang');
        if (lang && languages[lang]) {
            return lang;
        }
    } catch (error) {
        console.warn('Failed to parse language from query string:', error);
    }
    return null;
}

// 获取语言列表
function getLanguages() {
    return languages;
}

// 更新UI文本
function updateUI() {
    // 更新所有带有data-i18n属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const text = t(key);
        if (text) {
            element.textContent = text;
        }
    });
    
    // 更新所有带有data-i18n-placeholder属性的元素
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const text = t(key);
        if (text) {
            element.placeholder = text;
        }
    });
    
    // 更新所有带有data-i18n-value属性的元素
    document.querySelectorAll('[data-i18n-value]').forEach(element => {
        const key = element.getAttribute('data-i18n-value');
        const text = t(key);
        if (text) {
            element.value = text;
        }
    });
}

// 初始化语言
function initLanguage() {
    const queryLanguage = getLanguageFromQuery();
    if (queryLanguage) {
        currentLanguage = queryLanguage;
        localStorage.setItem('clawFitnessLanguage', queryLanguage);
    } else {
        const savedLanguage = localStorage.getItem('clawFitnessLanguage');
        if (savedLanguage && languages[savedLanguage]) {
            currentLanguage = savedLanguage;
        } else {
            const browserLang = navigator.language || navigator.userLanguage;
            if (browserLang && languages[browserLang]) {
                currentLanguage = browserLang;
            } else if (browserLang && browserLang.startsWith('zh')) {
                currentLanguage = 'zh-CN';
            } else if (browserLang && browserLang.startsWith('en')) {
                currentLanguage = 'en';
            }
        }
    }
    
    updateUI();
}

// 创建语言切换器
function createLanguageSwitcher(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let html = '<div class="language-switcher">';
    html += '<label data-i18n="button.change-language">切换语言 🌐</label>';
    html += '<select id="language-select">';
    
    Object.keys(languages).forEach(lang => {
        const langInfo = languages[lang];
        const selected = lang === currentLanguage ? 'selected' : '';
        html += `<option value="${lang}" ${selected}>${langInfo.flag} ${langInfo.name}</option>`;
    });
    
    html += '</select>';
    html += '</div>';
    
    container.innerHTML = html;
    
    // 绑定事件
    const select = document.getElementById('language-select');
    if (select) {
        select.addEventListener('change', function() {
            setLanguage(this.value);
        });
    }
}

// 更新国际化文本 - 简化版，只更新需要的部分
function updateInternationalTexts() {
    // 更新头部
    const headerTitle = document.querySelector('.header h1');
    const headerSubtitle = document.querySelector('.header .subtitle');
    if (headerTitle) headerTitle.textContent = t('header.title');
    if (headerSubtitle) headerSubtitle.textContent = t('header.subtitle');
    
    // 更新月份选择器标题
    const monthTitle = document.querySelector('.month-selector h2');
    if (monthTitle) monthTitle.textContent = t('month-selector.title');
    
    // 更新月份按钮文本
    document.querySelectorAll('.month-btn').forEach(btn => {
        const month = btn.getAttribute('data-month');
        if (month === '1') btn.textContent = t('month-selector.month1');
        if (month === '2') btn.textContent = t('month-selector.month2');
        if (month === '3') btn.textContent = t('month-selector.month3');
    });
    
    // 更新周选择器标题
    const weekTitle = document.querySelector('.week-tabs');
    if (weekTitle) {
        const titleElement = weekTitle.previousElementSibling;
        if (titleElement && titleElement.tagName === 'H2') {
            titleElement.textContent = t('week-selector.title');
        }
    }
    
    // 更新周按钮文本
    document.querySelectorAll('.week-tab').forEach(btn => {
        const week = btn.getAttribute('data-week');
        if (week === '1') btn.textContent = t('week-selector.week1');
        if (week === '2') btn.textContent = t('week-selector.week2');
        if (week === '3') btn.textContent = t('week-selector.week3');
        if (week === '4') btn.textContent = t('week-selector.week4');
    });
    
    // 更新训练计划部分标题
    const planTitle = document.querySelector('.plan-section h2');
    if (planTitle) planTitle.textContent = t('plan-section.title');
    
    // 更新训练记录部分标题
    const logTitle = document.querySelector('.log-section h2');
    if (logTitle) logTitle.textContent = t('log-section.title');
    
    // 更新训练记录表单标签
    const dateLabel = document.querySelector('label[for="workout-date"]');
    const typeLabel = document.querySelector('label[for="workout-type"]');
    const durationLabel = document.querySelector('label[for="workout-duration"]');
    const notesLabel = document.querySelector('label[for="workout-notes"]');
    
    if (dateLabel) dateLabel.textContent = t('log-form.date');
    if (typeLabel) typeLabel.textContent = t('log-form.type');
    if (durationLabel) durationLabel.textContent = t('log-form.duration');
    if (notesLabel) notesLabel.textContent = t('log-form.notes');
    
    // 更新训练部位选项
    const typeSelect = document.getElementById('workout-type');
    if (typeSelect) {
        const options = typeSelect.options;
        if (options.length >= 5) {
            options[0].text = t('log-form.type.chest');
            options[1].text = t('log-form.type.arms');
            options[2].text = t('log-form.type.abs');
            options[3].text = t('log-form.type.back');
            options[4].text = t('log-form.type.legs');
        }
    }
    
    // 更新备注占位符
    const notesTextarea = document.getElementById('workout-notes');
    if (notesTextarea) notesTextarea.placeholder = t('log-form.notes.placeholder');
    
    // 更新保存按钮
    const saveButton = document.querySelector('.btn-primary');
    if (saveButton) saveButton.textContent = t('log-form.save');
    
    // 更新历史记录标题
    const historyTitle = document.querySelector('.workout-history h3');
    if (historyTitle) historyTitle.textContent = t('log-history.title');
    
    // 更新进度追踪标题
    const progressTitle = document.querySelector('.progress-section h2');
    if (progressTitle) progressTitle.textContent = t('progress-section.title');
    
    // 更新进度统计标签
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels.length >= 3) {
        statLabels[0].textContent = t('progress.total-workouts');
        statLabels[1].textContent = t('progress.total-hours');
        statLabels[2].textContent = t('progress.current-week');
    }
    
    // 更新教练建议标题
    const coachTitle = document.querySelector('.coach-section h2');
    if (coachTitle) coachTitle.textContent = t('coach-section.title');
    
    // 更新教练建议内容
    const coachTips = document.querySelectorAll('.tip');
    if (coachTips.length >= 3) {
        coachTips[0].innerHTML = `<strong>${t('coach-tip1.title')}</strong>${t('coach-tip1.text')}`;
        coachTips[1].innerHTML = `<strong>${t('coach-tip2.title')}</strong>${t('coach-tip2.text')}`;
        coachTips[2].innerHTML = `<strong>${t('coach-tip3.title')}</strong>${t('coach-tip3.text')}`;
    }
    
    // 更新页脚
    const footerCopyright = document.querySelector('.footer p');
    const footerDisclaimer = document.querySelector('.disclaimer');
    if (footerCopyright) footerCopyright.textContent = t('footer.copyright');
    if (footerDisclaimer) footerDisclaimer.textContent = t('footer.disclaimer');
}

// 导出函数
window.t = t;
window.setLanguage = setLanguage;
window.getCurrentLanguage = getCurrentLanguage;
window.getLanguages = getLanguages;
window.updateUI = updateUI;
window.initLanguage = initLanguage;
window.createLanguageSwitcher = createLanguageSwitcher;