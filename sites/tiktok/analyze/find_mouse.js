// 搜索 webmssdk.js 中的鼠标/行为数据收集代码
const fs = require('fs');

const code = fs.readFileSync('d:/work/ai-surgical/sites/tiktok/js/webmssdk.js', 'utf8');

console.log('=== TikTok 鼠标/行为数据收集分析 ===\n');

// 1. 搜索行为检测相关常量
console.log('【1. 行为检测标志】\n');
const behaviorFlags = code.match(/k[A-Z][a-zA-Z]+:\s*\d+/g);
if (behaviorFlags) {
    behaviorFlags.forEach(f => console.log('  ', f));
}

// 2. 搜索事件监听
console.log('\n【2. 事件监听】\n');
const events = ['mousemove', 'mousedown', 'mouseup', 'click', 'dblclick', 'touchstart', 'touchmove', 'touchend', 'keydown', 'keyup', 'keypress', 'scroll', 'wheel'];
events.forEach(event => {
    const count = (code.match(new RegExp(event, 'gi')) || []).length;
    if (count > 0) {
        console.log(`  ${event}: ${count} 次`);
    }
});

// 3. 搜索坐标相关
console.log('\n【3. 坐标/位置数据】\n');
const coords = ['clientX', 'clientY', 'pageX', 'pageY', 'screenX', 'screenY', 'offsetX', 'offsetY', 'movementX', 'movementY'];
coords.forEach(coord => {
    const count = (code.match(new RegExp(coord, 'g')) || []).length;
    if (count > 0) {
        console.log(`  ${coord}: ${count} 次`);
    }
});

// 4. 搜索时间戳相关
console.log('\n【4. 时间戳数据】\n');
const timePatterns = ['timestamp', 'timeStamp', 'Date.now', 'performance.now'];
timePatterns.forEach(p => {
    const count = (code.match(new RegExp(p, 'gi')) || []).length;
    if (count > 0) {
        console.log(`  ${p}: ${count} 次`);
    }
});

// 5. 找到 ubcode 相关代码
console.log('\n【5. ubcode (User Behavior Code) 分析】\n');
const ubcodeIdx = code.indexOf('ubcode');
if (ubcodeIdx !== -1) {
    const start = Math.max(0, ubcodeIdx - 100);
    const end = Math.min(code.length, ubcodeIdx + 300);
    console.log(code.substring(start, end));
}

// 6. 搜索行为数据存储
console.log('\n\n【6. 行为数据存储】\n');
const storagePatterns = ['o\\[939\\]', 'o\\[938\\]', 'o\\[936\\]', 'o\\[944\\]'];
storagePatterns.forEach(p => {
    const matches = code.match(new RegExp(p + '\\.v', 'g'));
    if (matches) {
        console.log(`  ${p}.v: ${matches.length} 次引用`);
    }
});

// 7. 搜索 isTrusted 检测
console.log('\n【7. 事件真实性检测】\n');
const trustedCount = (code.match(/isTrusted/g) || []).length;
console.log(`  isTrusted: ${trustedCount} 次`);

// 8. 找到事件处理函数 X, L, Y
console.log('\n【8. 事件处理函数定位】\n');
// 搜索 function X, function L, function Y 的定义
const funcPatterns = [
    /function\s+X\s*\(/,
    /function\s+L\s*\(/,
    /function\s+Y\s*\(/,
    /var\s+X\s*=\s*function/,
    /var\s+L\s*=\s*function/,
    /var\s+Y\s*=\s*function/
];

funcPatterns.forEach(p => {
    const match = code.match(p);
    if (match) {
        const idx = code.indexOf(match[0]);
        console.log(`  找到 ${match[0]} 在位置 ${idx}`);
    }
});
