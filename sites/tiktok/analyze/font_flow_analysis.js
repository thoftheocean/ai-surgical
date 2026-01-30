// 分析字体数据的完整流程
const fs = require('fs');

const code = fs.readFileSync('d:/work/ai-surgical/sites/tiktok/js/webmssdk.js', 'utf8');

console.log('=== TikTok 字体数据流程分析 ===\n');

// 1. 提取完整的字体检测函数
console.log('【1. 完整字体检测函数】\n');

const mmIndex = code.indexOf('"mmmmmmmmmmlli"');
if (mmIndex !== -1) {
    // 找到函数开始 (向前搜索 "function")
    let funcStart = mmIndex;
    for (let i = mmIndex; i > Math.max(0, mmIndex - 300); i--) {
        if (code.substring(i, i + 8) === 'function') {
            funcStart = i;
            break;
        }
    }
    
    // 找到函数结束 (搜索 t.o[4]={data: 之后的 })
    let funcEnd = mmIndex;
    let braceCount = 0;
    let inFunc = false;
    for (let i = funcStart; i < Math.min(code.length, funcStart + 3000); i++) {
        if (code[i] === '{') {
            braceCount++;
            inFunc = true;
        }
        if (code[i] === '}') {
            braceCount--;
            if (inFunc && braceCount === 0) {
                funcEnd = i + 1;
                break;
            }
        }
    }
    
    const fontFunc = code.substring(funcStart, funcEnd);
    console.log(fontFunc);
}

// 2. 分析指纹收集的所有数据点
console.log('\n\n【2. 所有指纹数据点 (t.o 赋值)】\n');

// 找到所有不同的 t.o[数字] 索引
const toIndices = new Set();
const toPattern = /t\.o\[(\d+)\]\s*=/g;
let match;
while ((match = toPattern.exec(code)) !== null) {
    toIndices.add(parseInt(match[1]));
}

const sortedIndices = Array.from(toIndices).sort((a, b) => a - b);
console.log('数据存储索引:', sortedIndices.slice(0, 30).join(', '));
console.log(`共 ${sortedIndices.length} 个数据点\n`);

// 3. 分析特定索引的数据含义
console.log('【3. 关键数据点分析】\n');

// 搜索 o[4] 的赋值上下文来理解其含义
const dataPoints = {
    4: '字体指纹',
    // 搜索其他可能的指纹数据
};

// 找到所有 t.o[X]={data: 的模式
const dataAssignments = code.match(/t\.o\[\d+\]\s*=\s*\{\s*data:\s*[^}]+\}/g);
if (dataAssignments) {
    console.log('data 类型赋值:');
    const uniqueAssignments = [...new Set(dataAssignments)];
    uniqueAssignments.slice(0, 20).forEach((a, i) => {
        console.log(`  ${i + 1}. ${a.substring(0, 100)}`);
    });
}

// 4. 分析指纹数据如何被组合
console.log('\n\n【4. 指纹数据组合分析】\n');

// 搜索数组拼接或字符串拼接的模式
const concatPatterns = code.match(/o\[\d+\]\.data/g);
if (concatPatterns) {
    console.log(`o[X].data 引用: ${concatPatterns.length} 处`);
    const uniqueRefs = [...new Set(concatPatterns)];
    console.log('唯一引用:', uniqueRefs.slice(0, 20).join(', '));
}

// 5. 分析签名算法
console.log('\n\n【5. 签名算法分析】\n');

// 搜索可能的签名/加密函数
const signPatterns = [
    /function\s+\w+\s*\([^)]*\)\s*\{[^}]*sign[^}]*\}/gi,
    /encrypt|cipher/gi,
    /xor|XOR/gi,
    /charCodeAt/gi
];

signPatterns.forEach((pattern, i) => {
    const matches = code.match(pattern);
    console.log(`模式 ${i + 1}: ${matches ? matches.length : 0} 处`);
});

// 6. 分析 XOR 加密
console.log('\n【6. XOR/编码分析】\n');

const xorMatch = code.match(/charCodeAt\([^)]+\)\s*\^\s*\w+\.charCodeAt/g);
if (xorMatch) {
    console.log('XOR 加密模式:', xorMatch.length, '处');
    xorMatch.slice(0, 3).forEach((m, i) => {
        console.log(`  ${i + 1}. ${m}`);
    });
}

// 7. 分析最终输出
console.log('\n\n【7. 最终签名输出】\n');

// 搜索 _signature 或 X-Bogus 相关
const outputPatterns = ['_signature', 'X-Bogus', 'msToken', 'a_bogus'];
outputPatterns.forEach(p => {
    const count = (code.match(new RegExp(p, 'gi')) || []).length;
    if (count > 0) {
        console.log(`${p}: ${count} 处`);
    }
});
