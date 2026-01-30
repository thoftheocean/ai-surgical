# TikTok Canvas/WebGL 指纹逆向分析

## 一、重要发现

**TikTok `webmssdk.js` 不使用传统的 Canvas 指纹！**

| 传统方法 | TikTok 方法 |
|---------|------------|
| Canvas 绘制图形 | ❌ 不使用 |
| toDataURL() | ❌ 不使用 |
| 计算 Canvas hash | ❌ 不使用 |
| **WebGL 参数收集** | ✅ 使用 |
| **GPU 信息获取** | ✅ 使用 |
| **MD5 哈希** | ✅ 使用 |

## 二、WebGL 指纹源码位置

**文件**: `webmssdk.js`  
**行号**: 10605 - 10681

## 三、WebGL 指纹收集源码 (美化后)

```javascript
/**
 * TikTok WebGL 指纹收集
 * 来源: webmssdk.js 第 10605-10681 行
 */
function collectWebGLFingerprint(context) {
    const ctx = context;
    const webglData = {};
    let gpuString = "";
    
    // 检查缓存
    if (ctx.u.o[813].v && 
        ctx.u.o[813].v.WEBGL && 
        ctx.u.o[813].v.VENDOR && 
        ctx.u.o[813].v.RENDERER) {
        // 使用缓存数据
        webglData = ctx.u.o[813].v.WEBGL;
        gpuString = ctx.u.o[813].v.VENDOR + "/" + ctx.u.o[813].v.RENDERER;
    } else {
        // 获取 WebGL 上下文
        const gl = getWebGLContext();  // 内部函数，返回 WebGL context
        
        if (!gl) {
            // WebGL 不可用
            ctx.o[4] = { data: { webglData: {}, gpu: "" } };
            return { data: { webglData: {}, gpu: "" } };
        }
        
        // 收集 WebGL 参数
        webglData = {
            // 扩展列表
            supportedExtensions: gl.getSupportedExtensions() || [],
            
            // 抗锯齿
            antialias: gl.getContextAttributes().antialias ? 1 : 2,
            
            // 颜色位深度
            blueBits: gl.getParameter(gl.BLUE_BITS),
            greenBits: gl.getParameter(gl.GREEN_BITS),
            depthBits: gl.getParameter(gl.DEPTH_BITS),
            stencilBits: gl.getParameter(gl.STENCIL_BITS),
            
            // 纹理限制
            maxCombinedTextureImageUnits: gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
            maxCubeMapTextureSize: gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE),
            maxTextureImageUnits: gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),
            maxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),
            maxVertexTextureImageUnits: gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
            
            // 渲染缓冲区
            maxRenderbufferSize: gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),
            
            // Shader 限制
            maxFragmentUniformVectors: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),
            maxVertexUniformVectors: gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),
            maxVaryingVectors: gl.getParameter(gl.MAX_VARYING_VECTORS),
            maxVertexAttribs: gl.getParameter(gl.MAX_VERTEX_ATTRIBS),
            
            // 版本信息
            shadingLanguageVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
            version: gl.getParameter(gl.VERSION),
            
            // 各向异性过滤
            maxAnisotropy: getMaxAnisotropy(gl)  // 自定义函数
        };
        
        // 获取 GPU 信息 (需要 WEBGL_debug_renderer_info 扩展)
        const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
        const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        
        // 缓存 GPU 信息
        ctx.u.o[813].v.RENDERER = renderer;
        ctx.u.o[813].v.VENDOR = vendor;
        ctx.u.o[813].v.WEBGL = webglData;
        
        // 生成 GPU 字符串
        gpuString = vendor + "/" + renderer;
    }
    
    // 存储结果
    ctx.o[4] = {
        data: {
            webglData: webglData,
            gpu: gpuString  // 例如: "Google Inc. (AMD)/ANGLE (AMD, Radeon 780M, D3D11)"
        }
    };
}
```

## 四、收集的 WebGL 参数列表

| 参数 | API 调用 | 示例值 |
|------|---------|--------|
| supportedExtensions | getSupportedExtensions() | ["ANGLE_instanced_arrays", ...] |
| antialias | getContextAttributes().antialias | 1 或 2 |
| blueBits | getParameter(BLUE_BITS) | 8 |
| greenBits | getParameter(GREEN_BITS) | 8 |
| depthBits | getParameter(DEPTH_BITS) | 24 |
| stencilBits | getParameter(STENCIL_BITS) | 8 |
| maxCombinedTextureImageUnits | getParameter(...) | 32 |
| maxCubeMapTextureSize | getParameter(...) | 16384 |
| maxTextureImageUnits | getParameter(...) | 16 |
| maxTextureSize | getParameter(...) | 16384 |
| maxVertexTextureImageUnits | getParameter(...) | 16 |
| maxRenderbufferSize | getParameter(...) | 16384 |
| maxFragmentUniformVectors | getParameter(...) | 1024 |
| maxVertexUniformVectors | getParameter(...) | 4096 |
| maxVaryingVectors | getParameter(...) | 30 |
| maxVertexAttribs | getParameter(...) | 16 |
| shadingLanguageVersion | getParameter(...) | "WebGL GLSL ES 1.0" |
| version | getParameter(...) | "WebGL 1.0" |
| vendor | UNMASKED_VENDOR_WEBGL | "Google Inc. (AMD)" |
| renderer | UNMASKED_RENDERER_WEBGL | "ANGLE (AMD, Radeon 780M...)" |

## 五、MD5 哈希算法

### 源码位置

**文件**: `webmssdk.js`  
**行号**: 约 4300 - 4900

### 特征识别

MD5 初始向量（可在代码中看到）：
```javascript
this.h0 = (n + 1732584193) | 0   // 0x67452301
this.h1 = (t - 271733879) | 0    // 0xefcdab89
this.h2 = (r - 1732584194) | 0   // 0x98badcfe
this.h3 = (i + 271733878) | 0    // 0x10325476
```

### 还原的 MD5 类

```javascript
/**
 * TikTok MD5 实现
 * 来源: webmssdk.js 
 */
class MD5 {
    constructor() {
        this.h0 = 0x67452301;
        this.h1 = 0xefcdab89;
        this.h2 = 0x98badcfe;
        this.h3 = 0x10325476;
        this.first = true;
        this.finalized = false;
        this.hashed = false;
    }
    
    // 更新数据
    update(data) {
        // ... 处理输入数据
    }
    
    // 完成计算
    finalize() {
        // ... 填充和最终计算
    }
    
    // 输出 hex 字符串
    hex() {
        this.finalize();
        const d = "0123456789abcdef";
        const h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
        
        return (
            d[(h0 >>> 4) & 15] + d[h0 & 15] +
            d[(h0 >>> 12) & 15] + d[(h0 >>> 8) & 15] +
            // ... 继续拼接
        );
    }
    
    // 输出字节数组
    digest() {
        this.finalize();
        return [
            this.h0 & 255, (this.h0 >>> 8) & 255, (this.h0 >>> 16) & 255, (this.h0 >>> 24) & 255,
            this.h1 & 255, (this.h1 >>> 8) & 255, (this.h1 >>> 16) & 255, (this.h1 >>> 24) & 255,
            this.h2 & 255, (this.h2 >>> 8) & 255, (this.h2 >>> 16) & 255, (this.h2 >>> 24) & 255,
            this.h3 & 255, (this.h3 >>> 8) & 255, (this.h3 >>> 16) & 255, (this.h3 >>> 24) & 255
        ];
    }
}
```

## 六、可直接使用的 WebGL 指纹收集代码

```javascript
/**
 * TikTok WebGL 指纹收集还原
 * 可在浏览器控制台直接执行
 */
(function() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
        console.log('WebGL 不可用');
        return { webglData: {}, gpu: '' };
    }
    
    // 收集 WebGL 参数
    const webglData = {
        supportedExtensions: gl.getSupportedExtensions() || [],
        antialias: gl.getContextAttributes().antialias ? 1 : 2,
        blueBits: gl.getParameter(gl.BLUE_BITS),
        greenBits: gl.getParameter(gl.GREEN_BITS),
        depthBits: gl.getParameter(gl.DEPTH_BITS),
        stencilBits: gl.getParameter(gl.STENCIL_BITS),
        maxCombinedTextureImageUnits: gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
        maxCubeMapTextureSize: gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE),
        maxTextureImageUnits: gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),
        maxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),
        maxVertexTextureImageUnits: gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
        maxRenderbufferSize: gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),
        maxFragmentUniformVectors: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),
        maxVertexUniformVectors: gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),
        maxVaryingVectors: gl.getParameter(gl.MAX_VARYING_VECTORS),
        maxVertexAttribs: gl.getParameter(gl.MAX_VERTEX_ATTRIBS),
        shadingLanguageVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
        version: gl.getParameter(gl.VERSION)
    };
    
    // 获取 GPU 信息
    let gpu = '';
    try {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
            const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
            const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            webglData.vendor = vendor;
            webglData.renderer = renderer;
            gpu = vendor + '/' + renderer;
        }
    } catch(e) {}
    
    // 获取各向异性过滤最大值
    try {
        const ext = gl.getExtension('EXT_texture_filter_anisotropic') ||
                   gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') ||
                   gl.getExtension('MOZ_EXT_texture_filter_anisotropic');
        if (ext) {
            webglData.maxAnisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        }
    } catch(e) {}
    
    console.log('═══════════════════════════════════════');
    console.log('  TikTok WebGL 指纹');
    console.log('═══════════════════════════════════════');
    console.log('  GPU:', gpu);
    console.log('  扩展数量:', webglData.supportedExtensions.length);
    console.log('  最大纹理大小:', webglData.maxTextureSize);
    console.log('  WebGL 版本:', webglData.version);
    console.log('═══════════════════════════════════════');
    
    return { webglData, gpu };
})();
```

## 七、总结

### TikTok 指纹收集架构

```
┌─────────────────────────────────────────────────────────────┐
│                    TikTok 设备指纹                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  【字体指纹】 t.o[4]                                        │
│    → offsetWidth 检测 29 种字体                             │
│    → 输出: "4ff" (16进制位图)                               │
│                                                             │
│  【WebGL 指纹】 t.o[4]                                      │
│    → getParameter() 收集 18+ 个参数                         │
│    → UNMASKED_VENDOR/RENDERER 获取 GPU                     │
│    → 输出: { webglData: {...}, gpu: "..." }                │
│                                                             │
│  【其他指纹】                                                │
│    → 屏幕信息、时区、插件等                                 │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  【哈希算法】 MD5                                           │
│    → 将指纹数据哈希                                         │
│    → 参与 X-Bogus 签名计算                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 为什么不用传统 Canvas 指纹？

1. **Canvas 绘制需要创建可见元素** - 可能被检测到
2. **toDataURL() 可能被 Hook** - 容易被反检测
3. **WebGL 参数更稳定** - 不受渲染差异影响
4. **GPU 信息更具区分度** - 硬件级别的唯一性
