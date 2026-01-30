// 深入分析 WebGL 和 Canvas 指纹代码
const fs = require('fs');

const code = fs.readFileSync('d:/work/ai-surgical/sites/tiktok/js/webmssdk.js', 'utf8');

console.log('=== 深入分析 WebGL/Canvas 指纹 ===\n');

// 1. 找到 WebGL 相关代码
console.log('【1. WebGL 代码位置】\n');

let webglIndex = 0;
let webglCount = 0;
while (webglIndex < code.length && webglCount < 5) {
    const idx = code.indexOf('WebGL', webglIndex);
    if (idx === -1) break;
    
    const start = Math.max(0, idx - 50);
    const end = Math.min(code.length, idx + 150);
    console.log(`位置 ${idx}:`, code.substring(start, end).replace(/\n/g, ' ').substring(0, 180));
    console.log('');
    
    webglIndex = idx + 1;
    webglCount++;
}

// 2. 找到 getContext 相关代码
console.log('\n【2. getContext 代码】\n');
const ctxIdx = code.indexOf('getContext');
if (ctxIdx !== -1) {
    const start = Math.max(0, ctxIdx - 100);
    const end = Math.min(code.length, ctxIdx + 300);
    console.log(code.substring(start, end));
}

// 3. 搜索 hash 函数
console.log('\n\n【3. Hash 相关代码】\n');
let hashIndex = 0;
let hashCount = 0;
while (hashIndex < code.length && hashCount < 5) {
    const idx = code.indexOf('hash', hashIndex);
    if (idx === -1) break;
    
    const start = Math.max(0, idx - 30);
    const end = Math.min(code.length, idx + 100);
    console.log(`位置 ${idx}:`, code.substring(start, end).replace(/\n/g, ' ').substring(0, 120));
    
    hashIndex = idx + 1;
    hashCount++;
}

// 4. 搜索 getParameter (WebGL 信息获取)
console.log('\n\n【4. WebGL getParameter】\n');
const paramMatches = code.match(/getParameter/gi);
console.log('getParameter 出现次数:', paramMatches ? paramMatches.length : 0);

if (paramMatches) {
    let paramIdx = 0;
    let paramCount = 0;
    while (paramIdx < code.length && paramCount < 3) {
        const idx = code.indexOf('getParameter', paramIdx);
        if (idx === -1) break;
        
        const start = Math.max(0, idx - 30);
        const end = Math.min(code.length, idx + 150);
        console.log(`\n位置 ${idx}:`, code.substring(start, end).replace(/\n/g, ' '));
        
        paramIdx = idx + 1;
        paramCount++;
    }
}

// 5. 搜索 RENDERER / VENDOR (WebGL 硬件信息)
console.log('\n\n【5. WebGL 硬件信息】\n');
const rendererMatch = code.match(/RENDERER|VENDOR|UNMASKED/gi);
console.log('RENDERER/VENDOR/UNMASKED 出现次数:', rendererMatch ? rendererMatch.length : 0);

// 6. 查找 webglData 结构
console.log('\n\n【6. WebGL 数据结构】\n');
const webglDataIdx = code.indexOf('webglData');
if (webglDataIdx !== -1) {
    const start = Math.max(0, webglDataIdx - 50);
    const end = Math.min(code.length, webglDataIdx + 500);
    console.log(code.substring(start, end));
}
