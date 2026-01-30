// 提取完整的字体列表
const fs = require('fs');

const code = fs.readFileSync('d:/work/ai-surgical/sites/tiktok/js/webmssdk.js', 'utf8');

// 找到字体数组的位置
const fontArrayMatch = code.match(/for\(var c=\[([^\]]+)\]/);
if (fontArrayMatch) {
    console.log('=== TikTok 字体检测列表 ===\n');
    
    const fontArrayStr = fontArrayMatch[1];
    // 解析字体名称
    const fonts = fontArrayStr.match(/"[^"]+"/g);
    
    if (fonts) {
        console.log('检测的字体数量:', fonts.length);
        console.log('\n字体列表:');
        fonts.forEach((f, i) => {
            console.log(`${i + 1}. ${f}`);
        });
        
        // 输出为 JSON 格式
        console.log('\n\nJSON 格式:');
        console.log(JSON.stringify(fonts.map(f => f.replace(/"/g, '')), null, 2));
    }
}

// 提取完整的字体检测函数
console.log('\n\n=== 完整的字体检测函数 ===\n');

const funcStart = code.indexOf('var r="mmmmmmmmmmlli"');
if (funcStart !== -1) {
    // 找到函数结束
    let braceCount = 0;
    let funcEnd = funcStart;
    let started = false;
    
    for (let i = funcStart - 50; i < code.length && i < funcStart + 2000; i++) {
        if (code[i] === '{') {
            braceCount++;
            started = true;
        }
        if (code[i] === '}') {
            braceCount--;
            if (started && braceCount === 0) {
                funcEnd = i + 1;
                break;
            }
        }
    }
    
    const funcCode = code.substring(funcStart - 50, funcEnd);
    console.log(funcCode);
}
