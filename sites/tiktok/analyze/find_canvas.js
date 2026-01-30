// 搜索 webmssdk.js 中的 Canvas 相关代码
const fs = require('fs');

const code = fs.readFileSync('d:/work/ai-surgical/sites/tiktok/js/webmssdk.js', 'utf8');

console.log('=== 搜索 Canvas 指纹相关代码 ===\n');

// 1. 搜索 canvas 关键词
const canvasMatches = code.match(/canvas/gi);
console.log('canvas 出现次数:', canvasMatches ? canvasMatches.length : 0);

// 2. 搜索 getContext
const contextMatches = code.match(/getContext/gi);
console.log('getContext 出现次数:', contextMatches ? contextMatches.length : 0);

// 3. 搜索 toDataURL
const dataURLMatches = code.match(/toDataURL/gi);
console.log('toDataURL 出现次数:', dataURLMatches ? dataURLMatches.length : 0);

// 4. 搜索 hash 相关
const hashMatches = code.match(/hash|Hash|HASH/g);
console.log('hash 出现次数:', hashMatches ? hashMatches.length : 0);

// 5. 搜索 createElement
const createMatches = code.match(/createElement/gi);
console.log('createElement 出现次数:', createMatches ? createMatches.length : 0);

// 6. 找到所有 canvas 上下文
console.log('\n=== Canvas 相关代码片段 ===\n');

let searchIndex = 0;
let count = 0;
while (searchIndex < code.length && count < 10) {
    const idx = code.toLowerCase().indexOf('canvas', searchIndex);
    if (idx === -1) break;
    
    const start = Math.max(0, idx - 100);
    const end = Math.min(code.length, idx + 200);
    const context = code.substring(start, end).replace(/\n/g, ' ');
    
    console.log(`\n--- 位置 ${idx} ---`);
    console.log(context);
    
    searchIndex = idx + 1;
    count++;
}

// 7. 搜索 WebGL 相关 (可能 Canvas 指纹在 WebGL 部分)
console.log('\n\n=== WebGL 相关 ===');
const webglMatches = code.match(/webgl|WebGL|WEBGL/g);
console.log('WebGL 出现次数:', webglMatches ? webglMatches.length : 0);

// 8. 搜索可能的指纹函数
console.log('\n=== 指纹相关函数 ===');
const fpPatterns = ['fingerprint', 'fp', 'device', 'collect'];
fpPatterns.forEach(p => {
    const matches = code.match(new RegExp(p, 'gi'));
    console.log(`${p}: ${matches ? matches.length : 0} 次`);
});
