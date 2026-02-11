// Claw健身教练 - 主要JavaScript逻辑

// 训练计划数据
const workoutPlans = {
    1: { // 第1个月 - 基础适应期
        1: { // 第1周
            monday: {
                title: "周一：前胸 + 手臂",
                exercises: [
                    "俯卧撑：3组 × 8-10次",
                    "哑铃卧推：3组 × 10-12次",
                    "哑铃弯举：3组 × 12-15次",
                    "锤式弯举：3组 × 12-15次",
                    "三头肌伸展：3组 × 12-15次"
                ],
                duration: "35分钟"
            },
            wednesday: {
                title: "周三：背部 + 腹部",
                exercises: [
                    "哑铃划船：3组 × 10-12次",
                    "俯身飞鸟：3组 × 12-15次",
                    "平板支撑：3组 × 30秒",
                    "卷腹：3组 × 15-20次",
                    "俄罗斯转体：3组 × 15次/侧"
                ],
                duration: "35分钟"
            },
            friday: {
                title: "周五：腿部",
                exercises: [
                    "深蹲：3组 × 10-12次",
                    "箭步蹲：3组 × 10次/腿",
                    "腿弯举：3组 × 12-15次",
                    "提踵：3组 × 15-20次",
                    "臀桥：3组 × 15-20次"
                ],
                duration: "35分钟"
            },
            saturday: {
                title: "周六：全身轻度训练（可选）",
                exercises: [
                    "开合跳：2组 × 30秒",
                    "高抬腿：2组 × 30秒",
                    "俯卧撑：2组 × 8次",
                    "深蹲：2组 × 10次",
                    "平板支撑：2组 × 30秒"
                ],
                duration: "20分钟"
            }
        },
        2: { // 第2周
            monday: {
                title: "周一：前胸 + 手臂",
                exercises: [
                    "俯卧撑：3组 × 10-12次",
                    "哑铃卧推：3组 × 12-15次",
                    "哑铃弯举：3组 × 12-15次",
                    "锤式弯举：3组 × 12-15次",
                    "三头肌伸展：3组 × 12-15次",
                    "仰卧臂屈伸：2组 × 10-12次"
                ],
                duration: "40分钟"
            },
            wednesday: {
                title: "周三：背部 + 腹部",
                exercises: [
                    "哑铃划船：3组 × 12-15次",
                    "俯身飞鸟：3组 × 12-15次",
                    "平板支撑：3组 × 35秒",
                    "卷腹：3组 × 20-25次",
                    "俄罗斯转体：3组 × 15次/侧",
                    "反向卷腹：2组 × 12-15次"
                ],
                duration: "40分钟"
            },
            friday: {
                title: "周五：腿部",
                exercises: [
                    "深蹲：3组 × 12-15次",
                    "箭步蹲：3组 × 12次/腿",
                    "腿弯举：3组 × 12-15次",
                    "提踵：3组 × 20-25次",
                    "臀桥：3组 × 20-25次",
                    "靠墙静蹲：2组 × 30秒"
                ],
                duration: "40分钟"
            },
            saturday: {
                title: "周六：全身轻度训练（可选）",
                exercises: [
                    "开合跳：2组 × 30秒",
                    "高抬腿：2组 × 30秒",
                    "俯卧撑：2组 × 10次",
                    "深蹲：2组 × 12次",
                    "平板支撑：2组 × 35秒"
                ],
                duration: "25分钟"
            }
        },
        3: { // 第3周
            monday: {
                title: "周一：前胸 + 手臂",
                exercises: [
                    "俯卧撑：4组 × 10-12次",
                    "哑铃卧推：4组 × 12-15次",
                    "哑铃弯举：4组 × 12-15次",
                    "锤式弯举：4组 × 12-15次",
                    "三头肌伸展：4组 × 12-15次",
                    "仰卧臂屈伸：3组 × 10-12次"
                ],
                duration: "42分钟"
            },
            wednesday: {
                title: "周三：背部 + 腹部",
                exercises: [
                    "哑铃划船：4组 × 12-15次",
                    "俯身飞鸟：4组 × 12-15次",
                    "平板支撑：4组 × 40秒",
                    "卷腹：4组 × 20-25次",
                    "俄罗斯转体：4组 × 15次/侧",
                    "反向卷腹：3组 × 12-15次"
                ],
                duration: "42分钟"
            },
            friday: {
                title: "周五：腿部",
                exercises: [
                    "深蹲：4组 × 12-15次",
                    "箭步蹲：4组 × 12次/腿",
                    "腿弯举：4组 × 12-15次",
                    "提踵：4组 × 20-25次",
                    "臀桥：4组 × 20-25次",
                    "靠墙静蹲：3组 × 35秒"
                ],
                duration: "42分钟"
            },
            saturday: {
                title: "周六：全身轻度训练（可选）",
                exercises: [
                    "开合跳：3组 × 30秒",
                    "高抬腿：3组 × 30秒",
                    "俯卧撑：3组 × 10次",
                    "深蹲：3组 × 12次",
                    "平板支撑：3组 × 40秒"
                ],
                duration: "30分钟"
            }
        },
        4: { // 第4周
            monday: {
                title: "周一：前胸 + 手臂",
                exercises: [
                    "俯卧撑：4组 × 12-15次",
                    "哑铃卧推：4组 × 15-18次",
                    "哑铃弯举：4组 × 15-18次",
                    "锤式弯举：4组 × 15-18次",
                    "三头肌伸展：4组 × 15-18次",
                    "仰卧臂屈伸：3组 × 12-15次"
                ],
                duration: "45分钟"
            },
            wednesday: {
                title: "周三：背部 + 腹部",
                exercises: [
                    "哑铃划船：4组 × 15-18次",
                    "俯身飞鸟：4组 × 15-18次",
                    "平板支撑：4组 × 45秒",
                    "卷腹：4组 × 25-30次",
                    "俄罗斯转体：4组 × 18次/侧",
                    "反向卷腹：3组 × 15-18次"
                ],
                duration: "45分钟"
            },
            friday: {
                title: "周五：腿部",
                exercises: [
                    "深蹲：4组 × 15-18次",
                    "箭步蹲：4组 × 15次/腿",
                    "腿弯举：4组 × 15-18次",
                    "提踵：4组 × 25-30次",
                    "臀桥：4组 × 25-30次",
                    "靠墙静蹲：3组 × 40秒"
                ],
                duration: "45分钟"
            },
            saturday: {
                title: "周六：全身轻度训练（可选）",
                exercises: [
                    "开合跳：3组 × 35秒",
                    "高抬腿：3组 × 35秒",
                    "俯卧撑：3组 × 12次",
                    "深蹲：3组 × 15次",
                    "平板支撑：3组 × 45秒"
                ],
                duration: "35分钟"
            }
        }
    },
    2: { // 第2个月 - 强度提升期
        // 简化版本，实际使用时可以扩展
        1: {
            monday: {
                title: "周一：前胸 + 手臂",
                exercises: [
                    "俯卧撑：4组 × 12-15次",
                    "哑铃卧推：4组 × 15-18次",
                    "哑铃弯举：4组 × 15-18次",
                    "锤式弯举：4组 × 15-18次",
                    "三头肌伸展：4组 × 15-18次",
                    "仰卧臂屈伸：3组 × 12-15次",
                    "俯卧撑变式：2组 × 8-10次"
                ],
                duration: "45分钟"
            },
            wednesday: {
                title: "周三：背部 + 腹部",
                exercises: [
                    "哑铃划船：4组 × 15-18次",
                    "俯身飞鸟：4组 × 15-18次",
                    "平板支撑：4组 × 45秒",
                    "卷腹：4组 × 25-30次",
                    "俄罗斯转体：4组 × 18次/侧",
                    "反向卷腹：3组 × 15-18次",
                    "侧平板支撑：2组 × 30秒/侧"
                ],
                duration: "45分钟"
            },
            friday: {
                title: "周五：腿部",
                exercises: [
                    "深蹲：4组 × 15-18次",
                    "箭步蹲：4组 × 15次/腿",
                    "腿弯举：4组 × 15-18次",
                    "提踵：4组 × 25-30次",
                    "臀桥：4组 × 25-30次",
                    "靠墙静蹲：3组 × 40秒",
                    "单腿提踵：2组 × 15次/腿"
                ],
                duration: "45分钟"
            },
            saturday: {
                title: "周六：全身轻度训练（可选）",
                exercises: [
                    "开合跳：3组 × 35秒",
                    "高抬腿：3组 × 35秒",
                    "俯卧撑：3组 × 12次",
                    "深蹲：3组 × 15次",
                    "平板支撑：3组 × 45秒",
                    "波比跳：2组 × 8次"
                ],
                duration: "35分钟"
            }
        }
    },
    3: { // 第3个月 - 巩固与突破期
        // 简化版本
        1: {
            monday: {
                title: "周一：前胸 + 手臂",
                exercises: [
                    "俯卧撑：4组 × 15-18次",
                    "哑铃卧推：4组 × 18-20次",
                    "哑铃弯举：4组 × 18-20次",
                    "锤式弯举：4组 × 18-20次",
                    "三头肌伸展：4组 × 18-20次",
                    "仰卧臂屈伸：3组 × 15-18次",
                    "俯卧撑变式：3组 × 10-12次"
                ],
                duration: "45分钟"
            },
            wednesday: {
                title: "周三：背部 + 腹部",
                exercises: [
                    "哑铃划船：4组 × 18-20次",
                    "俯身飞鸟：4组 × 18-20次",
                    "平板支撑：4组 × 50秒",
                    "卷腹：4组 × 30-35次",
                    "俄罗斯转体：4组 × 20次/侧",
                    "反向卷腹：3组 × 18-20次",
                    "侧平板支撑：3组 × 35秒/侧"
                ],
                duration: "45分钟"
            },
            friday: {
                title: "周五：腿部",
                exercises: [
                    "深蹲：4组 × 18-20次",
                    "箭步蹲：4组 × 18次/腿",
                    "腿弯举：4组 × 18-20次",
                    "提踵：4组 × 30-35次",
                    "臀桥：4组 × 30-35次",
                    "靠墙静蹲：3组 × 45秒",
                    "单腿提踵：3组 × 18次/腿"
                ],
                duration: "45分钟"
            },
            saturday: {
                title: "周六：全身轻度训练（可选）",
                exercises: [
                    "开合跳：3组 × 40秒",
                    "高抬腿：3组 × 40秒",
                    "俯卧撑：3组 × 15次",
                    "深蹲：3组 × 18次",
                    "平板支撑：3组 × 50秒",
                    "波比跳：3组 × 10次"
                ],
                duration: "40分钟"
            }
        }
    }
};

// 训练部位映射
const workoutTypeMap = {
    'chest': '前胸',
    'arms': '手臂',
    'abs': '腹部',
    'back': '背部',
    'legs': '腿部'
};

// 当前状态
let currentMonth = 1;
let currentWeek = 1;
let workoutHistory = [];

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化语言
    initLanguage();
    
    // 创建语言切换器
    createLanguageSwitcher('language-switcher-container');
    
    // 初始化应用
    initializeApp();
});

function initializeApp() {
    // 设置默认日期为今天
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('workout-date').value = today;
    
    // 加载保存的数据
    loadSavedData();
    
    // 显示默认训练计划
    displayWorkoutPlan(currentMonth, currentWeek);
    
    // 绑定事件监听器
    bindEventListeners();
    
    // 更新统计信息
    updateStats();
    
    // 更新国际化文本
    updateInternationalTexts();
}

function bindEventListeners() {
    // 月份按钮
    document.querySelectorAll('.month-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.month-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentMonth = parseInt(this.dataset.month);
            displayWorkoutPlan(currentMonth, currentWeek);
        });
    });

    // 周按钮
    document.querySelectorAll('.week-tab').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.week-tab').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentWeek = parseInt(this.dataset.week);
            displayWorkoutPlan(currentMonth, currentWeek);
        });
    });
}

function displayWorkoutPlan(month, week) {
    const planContent = document.getElementById('plan-content');
    const plan = workoutPlans[month] && workoutPlans[month][week];
    
    if (!plan) {
        planContent.innerHTML = `
            <div class="error-message">
                ${t('message.no-plan', { month: month, week: week })}
            </div>
        `;
        return;
    }

    let html = '';
    
    // 显示周一、周三、周五的训练
    ['monday', 'wednesday', 'friday'].forEach(day => {
        if (plan[day]) {
            html += `
                <div class="workout-card">
                    <h4>${plan[day].title}</h4>
                    <p><strong>${t('workout-card.duration')}</strong>${plan[day].duration}</p>
                    <ul>
                        ${plan[day].exercises.map(ex => `<li>${ex}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
    });

    // 显示周六的可选训练
    if (plan.saturday) {
        html += `
            <div class="workout-card" style="border-left-color: #ff6b6b;">
                <h4>${plan.saturday.title}</h4>
                <p><strong>${t('workout-card.duration')}</strong>${plan.saturday.duration}</p>
                <ul>
                    ${plan.saturday.exercises.map(ex => `<li>${ex}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    planContent.innerHTML = html;
}

function saveWorkout() {
    const date = document.getElementById('workout-date').value;
    const type = document.getElementById('workout-type').value;
    const duration = document.getElementById('workout-duration').value;
    const notes = document.getElementById('workout-notes').value;

    if (!date || !type || !duration) {
        showMessage(t('message.error'), 'error');
        return;
    }

    const workout = {
        id: Date.now(),
        date: date,
        type: type,
        typeText: workoutTypeMap[type],
        duration: parseInt(duration),
        notes: notes,
        month: currentMonth,
        week: currentWeek
    };

    workoutHistory.push(workout);
    saveData();
    updateStats();
    displayWorkoutHistory();
    
    // 清空表单
    document.getElementById('workout-notes').value = '';
    
    showMessage(t('message.success'), 'success');
}

function displayWorkoutHistory() {
    const historyList = document.getElementById('history-list');
    
    if (workoutHistory.length === 0) {
        historyList.innerHTML = `<p style="color: #a0a0a0;">${t('log-history.empty')}</p>`;
        return;
    }

    // 按日期排序，最新的在前
    const sortedHistory = [...workoutHistory].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // 只显示最近5条记录
    const recentHistory = sortedHistory.slice(0, 5);
    
    let html = '';
    recentHistory.forEach(workout => {
        html += `
            <div class="history-item">
                <div class="date">${workout.date}</div>
                <div class="type">${workout.typeText}</div>
                <div class="duration">${t('workout-card.duration')}${workout.duration}分钟</div>
                ${workout.notes ? `<div class="notes">${workout.notes}</div>` : ''}
            </div>
        `;
    });
    
    historyList.innerHTML = html;
}

function updateStats() {
    // 总训练次数
    document.getElementById('total-workouts').textContent = workoutHistory.length;
    
    // 总训练时长（小时）
    const totalMinutes = workoutHistory.reduce((sum, w) => sum + w.duration, 0);
    const totalHours = (totalMinutes / 60).toFixed(1);
    document.getElementById('total-hours').textContent = totalHours;
    
    // 当前周数
    document.getElementById('current-week').textContent = currentWeek;
    
    // 更新历史记录显示
    displayWorkoutHistory();
}

function saveData() {
    const data = {
        workoutHistory: workoutHistory,
        currentMonth: currentMonth,
        currentWeek: currentWeek
    };
    localStorage.setItem('clawFitnessData', JSON.stringify(data));
}

function loadSavedData() {
    const savedData = localStorage.getItem('clawFitnessData');
    if (savedData) {
        const data = JSON.parse(savedData);
        workoutHistory = data.workoutHistory || [];
        currentMonth = data.currentMonth || 1;
        currentWeek = data.currentWeek || 1;
        
        // 更新UI状态
        document.querySelectorAll('.month-btn').forEach(btn => {
            btn.classList.remove('active');
            if (parseInt(btn.dataset.month) === currentMonth) {
                btn.classList.add('active');
            }
        });
        
        document.querySelectorAll('.week-tab').forEach(btn => {
            btn.classList.remove('active');
            if (parseInt(btn.dataset.week) === currentWeek) {
                btn.classList.add('active');
            }
        });
    }
}

function showMessage(text, type) {
    // 移除现有的消息
    const existingMessage = document.querySelector('.success-message, .error-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // 创建新消息
    const messageDiv = document.createElement('div');
    messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
    messageDiv.textContent = text;
    
    // 添加到表单下方
    const logForm = document.querySelector('.log-form');
    logForm.appendChild(messageDiv);
    
    // 3秒后自动移除
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 3000);
}

// 更新国际化文本
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

// 导出函数供HTML调用
window.saveWorkout = saveWorkout;