/**
 * TikTok 行为数据监控脚本
 * 用于检测当前页面的行为数据收集状态和风险等级
 * 
 * 使用方法：在 TikTok 页面控制台中执行此脚本
 */

(function() {
    'use strict';

    // ============ 配置 ============
    const CONFIG = {
        // 行为检测标志
        BEHAVIOR_FLAGS: {
            kNoMove: 2,
            kNoClickTouch: 4,
            kNoKeyboardEvent: 8,
            kMoveFast: 16,
            kKeyboardFast: 32,
            kFakeOperations: 64,
            kUntrusted: 128
        },
        // 监控间隔 (ms)
        MONITOR_INTERVAL: 1000,
        // 日志颜色
        COLORS: {
            safe: '#4CAF50',
            warning: '#FF9800',
            danger: '#F44336',
            info: '#2196F3'
        }
    };

    // ============ 状态存储 ============
    const STATE = {
        mouseMoves: 0,
        clicks: 0,
        keyPresses: 0,
        touchEvents: 0,
        untrustedEvents: 0,
        fakeEvents: 0,
        lastMouseMove: 0,
        lastClick: 0,
        lastKeyPress: 0,
        moveIntervals: [],
        keyIntervals: [],
        startTime: Date.now(),
        ubcode: 0
    };

    // ============ 工具函数 ============
    function log(message, type = 'info') {
        const color = CONFIG.COLORS[type] || CONFIG.COLORS.info;
        console.log(
            `%c[TikTok Monitor] ${message}`,
            `color: ${color}; font-weight: bold;`
        );
    }

    function logTable(title, data) {
        console.log(`%c${title}`, 'color: #2196F3; font-size: 14px; font-weight: bold;');
        console.table(data);
    }

    // ============ ubcode 解析 ============
    function parseUbcode(ubcode) {
        const flags = [];
        if (ubcode & CONFIG.BEHAVIOR_FLAGS.kNoMove) flags.push('无鼠标移动');
        if (ubcode & CONFIG.BEHAVIOR_FLAGS.kNoClickTouch) flags.push('无点击/触摸');
        if (ubcode & CONFIG.BEHAVIOR_FLAGS.kNoKeyboardEvent) flags.push('无键盘事件');
        if (ubcode & CONFIG.BEHAVIOR_FLAGS.kMoveFast) flags.push('鼠标移动过快');
        if (ubcode & CONFIG.BEHAVIOR_FLAGS.kKeyboardFast) flags.push('键盘输入过快');
        if (ubcode & CONFIG.BEHAVIOR_FLAGS.kFakeOperations) flags.push('伪造操作');
        if (ubcode & CONFIG.BEHAVIOR_FLAGS.kUntrusted) flags.push('不可信事件');
        return flags.length ? flags : ['正常'];
    }

    function getRiskLevel(ubcode) {
        const bitCount = ubcode.toString(2).split('1').length - 1;
        if (bitCount === 0) return { level: '低', color: 'safe' };
        if (bitCount <= 2) return { level: '中', color: 'warning' };
        return { level: '高', color: 'danger' };
    }

    // ============ 计算 ubcode ============
    function calculateUbcode() {
        let ubcode = 0;
        const elapsed = (Date.now() - STATE.startTime) / 1000;

        // 无鼠标移动检测 (超过5秒没有移动)
        if (STATE.mouseMoves === 0 && elapsed > 5) {
            ubcode |= CONFIG.BEHAVIOR_FLAGS.kNoMove;
        }

        // 无点击/触摸检测
        if (STATE.clicks === 0 && STATE.touchEvents === 0 && elapsed > 10) {
            ubcode |= CONFIG.BEHAVIOR_FLAGS.kNoClickTouch;
        }

        // 无键盘事件检测
        if (STATE.keyPresses === 0 && elapsed > 30) {
            ubcode |= CONFIG.BEHAVIOR_FLAGS.kNoKeyboardEvent;
        }

        // 鼠标移动过快检测 (平均间隔 < 10ms)
        if (STATE.moveIntervals.length > 10) {
            const avgInterval = STATE.moveIntervals.reduce((a, b) => a + b, 0) / STATE.moveIntervals.length;
            if (avgInterval < 10) {
                ubcode |= CONFIG.BEHAVIOR_FLAGS.kMoveFast;
            }
        }

        // 键盘输入过快检测 (平均间隔 < 30ms)
        if (STATE.keyIntervals.length > 5) {
            const avgInterval = STATE.keyIntervals.reduce((a, b) => a + b, 0) / STATE.keyIntervals.length;
            if (avgInterval < 30) {
                ubcode |= CONFIG.BEHAVIOR_FLAGS.kKeyboardFast;
            }
        }

        // 伪造操作检测
        if (STATE.fakeEvents > 0) {
            ubcode |= CONFIG.BEHAVIOR_FLAGS.kFakeOperations;
        }

        // 不可信事件检测
        if (STATE.untrustedEvents > 0) {
            ubcode |= CONFIG.BEHAVIOR_FLAGS.kUntrusted;
        }

        STATE.ubcode = ubcode;
        return ubcode;
    }

    // ============ 事件监听器 ============
    function setupEventListeners() {
        // 鼠标移动
        document.addEventListener('mousemove', function(e) {
            const now = Date.now();
            if (STATE.lastMouseMove > 0) {
                const interval = now - STATE.lastMouseMove;
                STATE.moveIntervals.push(interval);
                if (STATE.moveIntervals.length > 100) {
                    STATE.moveIntervals.shift();
                }
            }
            STATE.lastMouseMove = now;
            STATE.mouseMoves++;
            
            if (!e.isTrusted) {
                STATE.untrustedEvents++;
            }
        }, true);

        // 点击
        document.addEventListener('click', function(e) {
            STATE.clicks++;
            STATE.lastClick = Date.now();
            
            if (!e.isTrusted) {
                STATE.untrustedEvents++;
            }
        }, true);

        // 键盘
        document.addEventListener('keydown', function(e) {
            const now = Date.now();
            if (STATE.lastKeyPress > 0) {
                const interval = now - STATE.lastKeyPress;
                STATE.keyIntervals.push(interval);
                if (STATE.keyIntervals.length > 50) {
                    STATE.keyIntervals.shift();
                }
            }
            STATE.lastKeyPress = now;
            STATE.keyPresses++;
            
            if (!e.isTrusted) {
                STATE.untrustedEvents++;
            }
        }, true);

        // 触摸
        document.addEventListener('touchstart', function(e) {
            STATE.touchEvents++;
            
            if (!e.isTrusted) {
                STATE.untrustedEvents++;
            }
        }, true);

        document.addEventListener('touchmove', function(e) {
            STATE.touchEvents++;
        }, true);

        log('事件监听器已安装', 'safe');
    }

    // ============ 显示面板 ============
    function createMonitorPanel() {
        // 移除已存在的面板
        const existingPanel = document.getElementById('tiktok-behavior-monitor');
        if (existingPanel) {
            existingPanel.remove();
        }

        const panel = document.createElement('div');
        panel.id = 'tiktok-behavior-monitor';
        panel.innerHTML = `
            <style>
                #tiktok-behavior-monitor {
                    position: fixed;
                    top: 10px;
                    right: 10px;
                    width: 320px;
                    background: rgba(0, 0, 0, 0.9);
                    color: #fff;
                    font-family: 'Consolas', monospace;
                    font-size: 12px;
                    padding: 15px;
                    border-radius: 8px;
                    z-index: 999999;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
                }
                #tiktok-behavior-monitor h3 {
                    margin: 0 0 10px 0;
                    color: #FF0050;
                    font-size: 14px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                #tiktok-behavior-monitor .close-btn {
                    cursor: pointer;
                    font-size: 18px;
                    color: #888;
                }
                #tiktok-behavior-monitor .close-btn:hover {
                    color: #fff;
                }
                #tiktok-behavior-monitor .section {
                    margin-bottom: 12px;
                    padding-bottom: 10px;
                    border-bottom: 1px solid #333;
                }
                #tiktok-behavior-monitor .section:last-child {
                    border-bottom: none;
                    margin-bottom: 0;
                }
                #tiktok-behavior-monitor .label {
                    color: #888;
                }
                #tiktok-behavior-monitor .value {
                    color: #00D9FF;
                    float: right;
                }
                #tiktok-behavior-monitor .risk-low { color: #4CAF50; }
                #tiktok-behavior-monitor .risk-medium { color: #FF9800; }
                #tiktok-behavior-monitor .risk-high { color: #F44336; }
                #tiktok-behavior-monitor .ubcode-box {
                    background: #1a1a1a;
                    padding: 8px;
                    border-radius: 4px;
                    margin-top: 8px;
                }
                #tiktok-behavior-monitor .flag {
                    display: inline-block;
                    padding: 2px 6px;
                    margin: 2px;
                    border-radius: 3px;
                    font-size: 10px;
                }
                #tiktok-behavior-monitor .flag-active {
                    background: #F44336;
                    color: #fff;
                }
                #tiktok-behavior-monitor .flag-inactive {
                    background: #333;
                    color: #666;
                }
                #tiktok-behavior-monitor .row {
                    display: flex;
                    justify-content: space-between;
                    margin: 4px 0;
                }
            </style>
            <h3>
                🔍 TikTok 行为监控
                <span class="close-btn" onclick="document.getElementById('tiktok-behavior-monitor').remove()">×</span>
            </h3>
            <div class="section">
                <div class="row"><span class="label">运行时间:</span><span class="value" id="mon-elapsed">0s</span></div>
            </div>
            <div class="section">
                <div class="row"><span class="label">鼠标移动:</span><span class="value" id="mon-mouse">0</span></div>
                <div class="row"><span class="label">点击次数:</span><span class="value" id="mon-clicks">0</span></div>
                <div class="row"><span class="label">键盘按键:</span><span class="value" id="mon-keys">0</span></div>
                <div class="row"><span class="label">触摸事件:</span><span class="value" id="mon-touch">0</span></div>
            </div>
            <div class="section">
                <div class="row"><span class="label">平均移动间隔:</span><span class="value" id="mon-move-avg">-</span></div>
                <div class="row"><span class="label">平均按键间隔:</span><span class="value" id="mon-key-avg">-</span></div>
            </div>
            <div class="section">
                <div class="row"><span class="label">不可信事件:</span><span class="value" id="mon-untrusted">0</span></div>
                <div class="row"><span class="label">伪造事件:</span><span class="value" id="mon-fake">0</span></div>
            </div>
            <div class="section">
                <div class="row">
                    <span class="label">风险等级:</span>
                    <span class="value" id="mon-risk">低</span>
                </div>
                <div class="row">
                    <span class="label">ubcode:</span>
                    <span class="value" id="mon-ubcode">0</span>
                </div>
                <div class="ubcode-box" id="mon-flags"></div>
            </div>
        `;

        document.body.appendChild(panel);
        log('监控面板已创建', 'safe');
    }

    // ============ 更新面板 ============
    function updatePanel() {
        const ubcode = calculateUbcode();
        const risk = getRiskLevel(ubcode);
        const flags = parseUbcode(ubcode);
        const elapsed = Math.floor((Date.now() - STATE.startTime) / 1000);

        // 平均间隔计算
        const avgMoveInterval = STATE.moveIntervals.length > 0 
            ? Math.round(STATE.moveIntervals.reduce((a, b) => a + b, 0) / STATE.moveIntervals.length)
            : '-';
        const avgKeyInterval = STATE.keyIntervals.length > 0 
            ? Math.round(STATE.keyIntervals.reduce((a, b) => a + b, 0) / STATE.keyIntervals.length)
            : '-';

        // 更新 DOM
        const panel = document.getElementById('tiktok-behavior-monitor');
        if (!panel) return;

        document.getElementById('mon-elapsed').textContent = `${elapsed}s`;
        document.getElementById('mon-mouse').textContent = STATE.mouseMoves;
        document.getElementById('mon-clicks').textContent = STATE.clicks;
        document.getElementById('mon-keys').textContent = STATE.keyPresses;
        document.getElementById('mon-touch').textContent = STATE.touchEvents;
        document.getElementById('mon-move-avg').textContent = avgMoveInterval === '-' ? '-' : `${avgMoveInterval}ms`;
        document.getElementById('mon-key-avg').textContent = avgKeyInterval === '-' ? '-' : `${avgKeyInterval}ms`;
        document.getElementById('mon-untrusted').textContent = STATE.untrustedEvents;
        document.getElementById('mon-fake').textContent = STATE.fakeEvents;
        document.getElementById('mon-ubcode').textContent = `${ubcode} (0x${ubcode.toString(16).toUpperCase()})`;

        // 风险等级
        const riskEl = document.getElementById('mon-risk');
        riskEl.textContent = risk.level;
        riskEl.className = `value risk-${risk.level === '低' ? 'low' : risk.level === '中' ? 'medium' : 'high'}`;

        // 标志显示
        const flagsEl = document.getElementById('mon-flags');
        const allFlags = [
            { name: '无移动', flag: CONFIG.BEHAVIOR_FLAGS.kNoMove },
            { name: '无点击', flag: CONFIG.BEHAVIOR_FLAGS.kNoClickTouch },
            { name: '无按键', flag: CONFIG.BEHAVIOR_FLAGS.kNoKeyboardEvent },
            { name: '移动快', flag: CONFIG.BEHAVIOR_FLAGS.kMoveFast },
            { name: '按键快', flag: CONFIG.BEHAVIOR_FLAGS.kKeyboardFast },
            { name: '伪造', flag: CONFIG.BEHAVIOR_FLAGS.kFakeOperations },
            { name: '不可信', flag: CONFIG.BEHAVIOR_FLAGS.kUntrusted }
        ];
        
        flagsEl.innerHTML = allFlags.map(f => 
            `<span class="flag ${ubcode & f.flag ? 'flag-active' : 'flag-inactive'}">${f.name}</span>`
        ).join('');
    }

    // ============ 控制台输出 ============
    function printStatus() {
        const ubcode = calculateUbcode();
        const risk = getRiskLevel(ubcode);
        const flags = parseUbcode(ubcode);
        const elapsed = Math.floor((Date.now() - STATE.startTime) / 1000);

        console.clear();
        console.log('%c═══════════════════════════════════════════════', 'color: #FF0050');
        console.log('%c       TikTok 行为数据监控报告', 'color: #FF0050; font-size: 16px; font-weight: bold');
        console.log('%c═══════════════════════════════════════════════', 'color: #FF0050');
        
        logTable('📊 事件统计', [
            { '指标': '运行时间', '数值': `${elapsed}s` },
            { '指标': '鼠标移动', '数值': STATE.mouseMoves },
            { '指标': '点击次数', '数值': STATE.clicks },
            { '指标': '键盘按键', '数值': STATE.keyPresses },
            { '指标': '触摸事件', '数值': STATE.touchEvents },
            { '指标': '不可信事件', '数值': STATE.untrustedEvents }
        ]);

        const avgMove = STATE.moveIntervals.length > 0 
            ? Math.round(STATE.moveIntervals.reduce((a, b) => a + b, 0) / STATE.moveIntervals.length)
            : '-';
        const avgKey = STATE.keyIntervals.length > 0 
            ? Math.round(STATE.keyIntervals.reduce((a, b) => a + b, 0) / STATE.keyIntervals.length)
            : '-';

        logTable('⚡ 速度分析', [
            { '指标': '平均移动间隔', '数值': avgMove === '-' ? '-' : `${avgMove}ms`, '阈值': '< 10ms 危险' },
            { '指标': '平均按键间隔', '数值': avgKey === '-' ? '-' : `${avgKey}ms`, '阈值': '< 30ms 危险' }
        ]);

        log(`风险等级: ${risk.level}`, risk.color);
        log(`ubcode: ${ubcode} (0x${ubcode.toString(16).toUpperCase()}) - 二进制: ${ubcode.toString(2).padStart(8, '0')}`, 'info');
        log(`检测标志: ${flags.join(', ')}`, ubcode === 0 ? 'safe' : 'danger');

        console.log('%c═══════════════════════════════════════════════', 'color: #FF0050');
    }

    // ============ 测试函数 ============
    window.TikTokMonitor = {
        // 获取当前状态
        getStatus: function() {
            const ubcode = calculateUbcode();
            return {
                ...STATE,
                ubcode,
                ubcodeHex: '0x' + ubcode.toString(16).toUpperCase(),
                ubcodeBinary: ubcode.toString(2).padStart(8, '0'),
                flags: parseUbcode(ubcode),
                risk: getRiskLevel(ubcode)
            };
        },

        // 模拟不可信事件 (测试用)
        simulateFakeClick: function() {
            const event = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });
            document.dispatchEvent(event);
            STATE.fakeEvents++;
            log('已模拟伪造点击事件', 'warning');
        },

        // 模拟快速鼠标移动 (测试用)
        simulateFastMove: function(count = 100) {
            for (let i = 0; i < count; i++) {
                const event = new MouseEvent('mousemove', {
                    bubbles: true,
                    cancelable: true,
                    view: window,
                    clientX: Math.random() * window.innerWidth,
                    clientY: Math.random() * window.innerHeight
                });
                document.dispatchEvent(event);
            }
            log(`已模拟 ${count} 次快速移动`, 'warning');
        },

        // 重置状态
        reset: function() {
            STATE.mouseMoves = 0;
            STATE.clicks = 0;
            STATE.keyPresses = 0;
            STATE.touchEvents = 0;
            STATE.untrustedEvents = 0;
            STATE.fakeEvents = 0;
            STATE.moveIntervals = [];
            STATE.keyIntervals = [];
            STATE.startTime = Date.now();
            STATE.ubcode = 0;
            log('状态已重置', 'safe');
        },

        // 打印报告
        printReport: printStatus,

        // 显示/隐藏面板
        togglePanel: function() {
            const panel = document.getElementById('tiktok-behavior-monitor');
            if (panel) {
                panel.remove();
                log('面板已隐藏', 'info');
            } else {
                createMonitorPanel();
            }
        }
    };

    // ============ 初始化 ============
    function init() {
        console.log('%c', 'padding: 50px; background: url(https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/150px-TikTok_logo.svg.png) no-repeat;');
        log('TikTok 行为监控脚本启动', 'safe');
        
        setupEventListeners();
        createMonitorPanel();

        // 定时更新面板
        setInterval(updatePanel, CONFIG.MONITOR_INTERVAL);

        log('使用 TikTokMonitor.getStatus() 获取当前状态', 'info');
        log('使用 TikTokMonitor.printReport() 打印详细报告', 'info');
        log('使用 TikTokMonitor.simulateFakeClick() 测试伪造检测', 'info');
        log('使用 TikTokMonitor.togglePanel() 显示/隐藏面板', 'info');
    }

    // 启动
    init();

})();
