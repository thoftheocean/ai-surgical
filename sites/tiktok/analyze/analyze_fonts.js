// 分析 webmssdk.js 中的字体检测代码
const fs = require('fs');

const code = fs.readFileSync('d:/work/ai-surgical/sites/tiktok/js/webmssdk.js', 'utf8');

console.log('=== 分析 webmssdk.js 字体检测代码 ===\n');
console.log('文件大小:', code.length, '字节');

// 1. 搜索字体名称
const fontNames = ['Arial', 'Verdana', 'Georgia', 'Times', 'Courier', 'Comic', 'Impact', 'Trebuchet'];
fontNames.forEach(font => {
    const count = (code.match(new RegExp(font, 'gi')) || []).length;
    if (count > 0) {
        console.log(`找到 "${font}": ${count} 次`);
    }
});

// 2. 搜索 monospace/sans-serif
const baseFonts = ['monospace', 'sans-serif', 'serif'];
baseFonts.forEach(font => {
    const count = (code.match(new RegExp(font, 'gi')) || []).length;
    if (count > 0) {
        console.log(`找到 "${font}": ${count} 次`);
    }
});

// 3. 搜索字体检测关键模式
const patterns = [
    { name: 'offsetWidth', regex: /offsetWidth/gi },
    { name: 'offsetHeight', regex: /offsetHeight/gi },
    { name: 'measureText', regex: /measureText/gi },
    { name: 'fontFamily', regex: /fontFamily/gi },
    { name: 'createElement.*span', regex: /createElement\s*\(\s*["']span["']\s*\)/gi },
    { name: 'appendChild', regex: /appendChild/gi },
    { name: 'fonts', regex: /\bfonts\b/gi },
    { name: 'queryLocalFonts', regex: /queryLocalFonts/gi }
];

console.log('\n=== 关键模式搜索 ===');
patterns.forEach(p => {
    const matches = code.match(p.regex);
    if (matches) {
        console.log(`${p.name}: ${matches.length} 处`);
    }
});

// 4. 提取包含字体检测特征的代码片段
console.log('\n=== 字体检测相关代码片段 ===');
const segments = code.split(/[,;{}]/);
const fontSegments = segments.filter(s => 
    (s.includes('offsetWidth') || s.includes('fontFamily')) && 
    s.length > 20 && 
    s.length < 500
);

fontSegments.slice(0, 10).forEach((s, i) => {
    console.log(`\n片段 ${i + 1}:`);
    console.log(s.trim().substring(0, 200));
});

// 5. 搜索可能的字体列表数组
console.log('\n=== 可能的字体列表 ===');
const arrayMatch = code.match(/\[["'][A-Za-z\s]+["'](?:\s*,\s*["'][A-Za-z\s]+["']){3,}\]/g);
if (arrayMatch) {
    arrayMatch.slice(0, 5).forEach((arr, i) => {
        if (arr.length < 500) {
            console.log(`数组 ${i + 1}: ${arr}`);
        }
    });
}
