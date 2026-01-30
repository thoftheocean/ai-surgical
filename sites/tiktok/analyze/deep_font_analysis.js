// 深度分析 webmssdk.js 中的字体检测和使用逻辑
const fs = require('fs');

const code = fs.readFileSync('d:/work/ai-surgical/sites/tiktok/js/webmssdk.js', 'utf8');

console.log('=== TikTok 字体检测深度逆向分析 ===\n');

// 1. 找到字体检测函数的完整代码
console.log('【1. 字体检测函数定位】\n');

const fontFuncMatch = code.match(/function\s*\(\s*n\s*\)\s*\{[^}]*mmmmmmmmmmlli[^}]*\}/);
if (fontFuncMatch) {
    console.log('字体检测函数入口已找到');
}

// 找到包含 mmmmmmmmmmlli 的完整上下文
const mmIndex = code.indexOf('mmmmmmmmmmlli');
if (mmIndex !== -1) {
    // 向前找 function 开始
    let start = mmIndex;
    for (let i = mmIndex; i > Math.max(0, mmIndex - 500); i--) {
        if (code.substring(i, i + 8) === 'function') {
            start = i;
            break;
        }
    }
    
    // 向后找到 t.o[4]={data: 的赋值
    let end = mmIndex;
    const dataAssignMatch = code.substring(mmIndex, mmIndex + 2000).match(/t\.o\[4\]=\{data:[\w.]+\(\d+\)\}/);
    if (dataAssignMatch) {
        end = mmIndex + code.substring(mmIndex, mmIndex + 2000).indexOf(dataAssignMatch[0]) + dataAssignMatch[0].length;
    }
    
    const fontFunc = code.substring(start, end + 50);
    console.log('\n完整的字体检测函数:\n');
    console.log(fontFunc);
}

// 2. 分析 t.o 对象的结构
console.log('\n\n【2. 指纹数据存储结构 t.o 分析】\n');

// 搜索所有 t.o[数字] 的赋值
const toAssignments = code.match(/t\.o\[\d+\]\s*=\s*\{[^}]+\}/g);
if (toAssignments) {
    console.log('找到的 t.o 赋值:');
    toAssignments.slice(0, 15).forEach((a, i) => {
        console.log(`  ${i + 1}. ${a.substring(0, 80)}...`);
    });
}

// 3. 分析字体数据如何被使用
console.log('\n\n【3. 字体数据使用分析】\n');

// 搜索 o[4] 的引用（字体数据存储在 o[4]）
const fontDataRefs = [];
let searchIndex = 0;
while (searchIndex < code.length) {
    const idx = code.indexOf('o[4]', searchIndex);
    if (idx === -1) break;
    const context = code.substring(Math.max(0, idx - 50), Math.min(code.length, idx + 100));
    if (!fontDataRefs.includes(context)) {
        fontDataRefs.push(context);
    }
    searchIndex = idx + 1;
}

console.log(`找到 o[4] 引用 ${fontDataRefs.length} 处:`);
fontDataRefs.slice(0, 8).forEach((ref, i) => {
    console.log(`\n引用 ${i + 1}:`);
    console.log(ref.replace(/\n/g, ' ').substring(0, 150));
});

// 4. 分析最终签名生成
console.log('\n\n【4. 签名生成分析】\n');

// 搜索 frontierSign 相关代码
const signIndex = code.indexOf('frontierSign');
if (signIndex !== -1) {
    const signContext = code.substring(Math.max(0, signIndex - 200), signIndex + 500);
    console.log('frontierSign 上下文:');
    console.log(signContext.substring(0, 400));
}

// 5. 分析数据编码方式
console.log('\n\n【5. 数据编码分析】\n');

// 搜索 toString(16) 相关代码
const hexEncode = code.match(/\.toString\(16\)/g);
console.log(`toString(16) 出现次数: ${hexEncode ? hexEncode.length : 0}`);

// 搜索 base64 相关
const base64Refs = code.match(/btoa|atob|base64/gi);
console.log(`Base64 相关引用: ${base64Refs ? base64Refs.length : 0} 次`);

// 搜索加密相关
const cryptoRefs = code.match(/encrypt|decrypt|AES|RSA|MD5|SHA/gi);
console.log(`加密相关引用: ${cryptoRefs ? cryptoRefs.length : 0} 次`);
