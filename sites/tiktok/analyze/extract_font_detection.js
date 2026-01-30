// 提取 webmssdk.js 中完整的字体检测代码
const fs = require('fs');

const code = fs.readFileSync('d:/work/ai-surgical/sites/tiktok/js/webmssdk.js', 'utf8');

console.log('=== 提取字体检测代码 ===\n');

// 找到 fontFamily 附近的代码
const fontFamilyIndex = code.indexOf('fontFamily');
if (fontFamilyIndex !== -1) {
    // 向前找到函数开始
    let startIndex = fontFamilyIndex;
    let braceCount = 0;
    let foundStart = false;
    
    for (let i = fontFamilyIndex; i >= 0 && i > fontFamilyIndex - 2000; i--) {
        if (code[i] === '}') braceCount++;
        if (code[i] === '{') {
            braceCount--;
            if (braceCount < 0) {
                // 找到函数开始的 {
                // 继续往前找 function 或 =>
                for (let j = i; j >= 0 && j > i - 200; j--) {
                    if (code.substring(j, j + 8) === 'function' || code.substring(j, j + 2) === '=>') {
                        startIndex = j;
                        foundStart = true;
                        break;
                    }
                }
                break;
            }
        }
    }
    
    // 向后找到函数结束
    let endIndex = fontFamilyIndex;
    braceCount = 0;
    for (let i = fontFamilyIndex; i < code.length && i < fontFamilyIndex + 3000; i++) {
        if (code[i] === '{') braceCount++;
        if (code[i] === '}') {
            braceCount--;
            if (braceCount < 0) {
                endIndex = i + 1;
                break;
            }
        }
    }
    
    const snippet = code.substring(startIndex - 100, endIndex + 100);
    console.log('=== fontFamily 附近的代码 (位置:', fontFamilyIndex, ') ===\n');
    console.log(snippet);
}

console.log('\n\n=== offsetWidth 检测代码 ===\n');

// 找到 offsetWidth!== 的模式
const offsetMatch = code.match(/var\s+\w+=\w+\.offsetWidth!==\w+\[\w+\]\|\|\w+\.offsetHeight!==\w+\[\w+\]/);
if (offsetMatch) {
    const matchIndex = code.indexOf(offsetMatch[0]);
    // 获取更大范围的上下文
    const contextStart = Math.max(0, matchIndex - 500);
    const contextEnd = Math.min(code.length, matchIndex + 500);
    console.log(code.substring(contextStart, contextEnd));
}

// 尝试找字体数组
console.log('\n\n=== 搜索字体数组 ===\n');

// 在 offsetWidth 附近搜索可能的字体名列表
const offsetIndex = code.indexOf('offsetWidth');
if (offsetIndex !== -1) {
    const nearbyCode = code.substring(Math.max(0, offsetIndex - 5000), offsetIndex + 1000);
    
    // 搜索类似 "Arial", "Verdana" 这样的模式
    const stringLiterals = nearbyCode.match(/"[A-Z][a-z]+\s?[A-Z]?[a-z]*"/g);
    if (stringLiterals) {
        const uniqueStrings = [...new Set(stringLiterals)];
        console.log('附近的字符串字面量:');
        uniqueStrings.forEach(s => console.log('  ', s));
    }
}
