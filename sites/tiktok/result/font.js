// TikTok 字体指纹检测 - 复制到控制台执行
(function() {
    const testString = "mmmmmmmmmmlli";
    const baseFonts = ["monospace", "sans-serif", "serif"];
    const testFonts = [
        "Trebuchet MS", "Wingdings", "Sylfaen", "Segoe UI", "Constantia",
        "SimSun-ExtB", "MT Extra", "Gulim", "Leelawadee", "Tunga",
        "Meiryo", "Vrinda", "CordiaUPC", "Aparajita", "IrisUPC",
        "Palatino", "Colonna MT", "Playbill", "Jokerman", "Parchment",
        "MS Outlook", "Tw Cen MT", "OPTIMA", "Futura", "AVENIR",
        "Arial Hebrew", "Savoye LET", "Castellar", "MYRIAD PRO"
    ];
    
    // 测量基准
    const baseWidths = {};
    baseFonts.forEach(font => {
        const span = document.createElement("span");
        span.innerHTML = testString;
        span.style.cssText = `font-size:72px;font-family:${font};position:absolute;left:-9999px`;
        document.body.appendChild(span);
        baseWidths[font] = span.offsetWidth;
        document.body.removeChild(span);
    });
    
    // 检测字体
    let fingerprint = 0;
    const detected = [];
    
    testFonts.forEach((font, index) => {
        for (const base of baseFonts) {
            const span = document.createElement("span");
            span.innerHTML = testString;
            span.style.cssText = `font-size:72px;font-family:"${font}",${base};position:absolute;left:-9999px`;
            document.body.appendChild(span);
            
            if (span.offsetWidth !== baseWidths[base]) {
                if (index < 30) fingerprint |= (1 << index);
                detected.push(font);
                document.body.removeChild(span);
                break;
            }
            document.body.removeChild(span);
        }
    });
    
    // 输出结果
    console.log("═══════════════════════════════════════");
    console.log("  TikTok 字体指纹检测结果");
    console.log("═══════════════════════════════════════");
    console.log("  指纹 (hex):", fingerprint.toString(16));
    console.log("  指纹 (dec):", fingerprint);
    console.log("  检测到字体:", detected.length + "/" + testFonts.length);
    console.log("  字体列表:", detected.join(", "));
    console.log("═══════════════════════════════════════");
    
    return { hex: fingerprint.toString(16), fonts: detected };
})();