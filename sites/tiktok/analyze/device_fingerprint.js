/**
 * TikTok设备指纹收集还原 - device_fingerprint.js
 * 
 * 基于TikTok webmssdk.js逆向分析
 * 收集与TikTok相同的设备信息用于指纹生成
 * 
 * @version 1.0.0
 * @date 2026-01-29
 */

(function(window) {
    'use strict';

    const DeviceFingerprint = {
        version: '1.0.0',
        
        /**
         * 收集所有设备指纹信息
         * @returns {Promise<Object>} 设备指纹对象
         */
        async collect() {
            const fingerprint = {
                timestamp: Date.now(),
                version: this.version
            };

            // 并行收集所有信息
            const [
                navigator,
                screen,
                windowInfo,
                timezone,
                canvas,
                webgl,
                audio,
                fonts,
                connection,
                battery,
                storage,
                features
            ] = await Promise.all([
                this.getNavigatorInfo(),
                this.getScreenInfo(),
                this.getWindowInfo(),
                this.getTimezoneInfo(),
                this.getCanvasFingerprint(),
                this.getWebGLInfo(),
                this.getAudioFingerprint(),
                this.getFontsInfo(),
                this.getConnectionInfo(),
                this.getBatteryInfo(),
                this.getStorageInfo(),
                this.getFeatures()
            ]);

            Object.assign(fingerprint, {
                navigator,
                screen,
                window: windowInfo,
                timezone,
                canvas,
                webgl,
                audio,
                fonts,
                connection,
                battery,
                storage,
                features
            });

            // 生成指纹哈希
            fingerprint.hash = await this.generateHash(fingerprint);

            return fingerprint;
        },

        /**
         * Navigator信息收集
         */
        getNavigatorInfo() {
            const nav = window.navigator;
            return {
                userAgent: nav.userAgent,
                platform: nav.platform,
                language: nav.language,
                languages: [...(nav.languages || [])],
                cookieEnabled: nav.cookieEnabled,
                doNotTrack: nav.doNotTrack,
                hardwareConcurrency: nav.hardwareConcurrency,
                deviceMemory: nav.deviceMemory,
                maxTouchPoints: nav.maxTouchPoints,
                vendor: nav.vendor,
                vendorSub: nav.vendorSub,
                productSub: nav.productSub,
                webdriver: nav.webdriver,
                pdfViewerEnabled: nav.pdfViewerEnabled,
                plugins: this.getPlugins(),
                mimeTypes: this.getMimeTypes()
            };
        },

        /**
         * 获取浏览器插件列表
         */
        getPlugins() {
            try {
                return Array.from(navigator.plugins || []).map(p => ({
                    name: p.name,
                    filename: p.filename,
                    description: p.description,
                    length: p.length
                }));
            } catch (e) {
                return [];
            }
        },

        /**
         * 获取MIME类型列表
         */
        getMimeTypes() {
            try {
                return Array.from(navigator.mimeTypes || []).map(m => ({
                    type: m.type,
                    suffixes: m.suffixes,
                    description: m.description
                }));
            } catch (e) {
                return [];
            }
        },

        /**
         * Screen信息收集
         */
        getScreenInfo() {
            const scr = window.screen;
            return {
                width: scr.width,
                height: scr.height,
                availWidth: scr.availWidth,
                availHeight: scr.availHeight,
                colorDepth: scr.colorDepth,
                pixelDepth: scr.pixelDepth,
                orientation: scr.orientation ? scr.orientation.type : null,
                orientationAngle: scr.orientation ? scr.orientation.angle : null
            };
        },

        /**
         * Window信息收集
         */
        getWindowInfo() {
            return {
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight,
                outerWidth: window.outerWidth,
                outerHeight: window.outerHeight,
                devicePixelRatio: window.devicePixelRatio,
                screenX: window.screenX,
                screenY: window.screenY,
                pageXOffset: window.pageXOffset,
                pageYOffset: window.pageYOffset
            };
        },

        /**
         * 时区信息收集
         */
        getTimezoneInfo() {
            const date = new Date();
            const options = Intl.DateTimeFormat().resolvedOptions();
            return {
                offset: date.getTimezoneOffset(),
                timezone: options.timeZone,
                locale: options.locale,
                calendar: options.calendar,
                numberingSystem: options.numberingSystem
            };
        },

        /**
         * Canvas指纹收集 - TikTok核心指纹之一
         */
        getCanvasFingerprint() {
            try {
                const canvas = document.createElement('canvas');
                canvas.width = 280;
                canvas.height = 60;
                const ctx = canvas.getContext('2d');

                // 绘制背景
                ctx.fillStyle = '#f60';
                ctx.fillRect(100, 1, 62, 20);

                // 绘制文字 - 使用特定字体和颜色
                ctx.fillStyle = '#069';
                ctx.font = '14px Arial, sans-serif';
                ctx.fillText('BrowserFingerprint', 2, 15);

                ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
                ctx.font = '18px Times New Roman';
                ctx.fillText('Canvas Test 🎨', 4, 45);

                // 绘制复杂图形
                ctx.beginPath();
                ctx.arc(50, 50, 20, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();

                // 添加渐变
                const gradient = ctx.createLinearGradient(0, 0, 280, 0);
                gradient.addColorStop(0, 'red');
                gradient.addColorStop(0.5, 'green');
                gradient.addColorStop(1, 'blue');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 55, 280, 5);

                const dataURL = canvas.toDataURL();
                
                return {
                    dataURL: dataURL,
                    hash: this.hashString(dataURL),
                    length: dataURL.length
                };
            } catch (e) {
                return { error: e.message };
            }
        },

        /**
         * WebGL指纹收集 - TikTok核心指纹之一
         */
        getWebGLInfo() {
            try {
                const canvas = document.createElement('canvas');
                const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

                if (!gl) {
                    return { supported: false };
                }

                const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
                const extensions = gl.getSupportedExtensions() || [];

                const info = {
                    supported: true,
                    vendor: gl.getParameter(gl.VENDOR),
                    renderer: gl.getParameter(gl.RENDERER),
                    version: gl.getParameter(gl.VERSION),
                    shadingLanguageVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
                    
                    // 真实GPU信息 (重要!)
                    unmaskedVendor: debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : null,
                    unmaskedRenderer: debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : null,
                    
                    // 硬件参数
                    maxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),
                    maxRenderbufferSize: gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),
                    maxViewportDims: Array.from(gl.getParameter(gl.MAX_VIEWPORT_DIMS)),
                    maxVertexAttribs: gl.getParameter(gl.MAX_VERTEX_ATTRIBS),
                    maxVertexUniformVectors: gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),
                    maxFragmentUniformVectors: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),
                    maxVaryingVectors: gl.getParameter(gl.MAX_VARYING_VECTORS),
                    maxCombinedTextureImageUnits: gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    maxTextureImageUnits: gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),
                    maxVertexTextureImageUnits: gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                    
                    // 扩展信息
                    extensionsCount: extensions.length,
                    extensions: extensions,
                    
                    // 精度信息
                    vertexShaderPrecision: this.getShaderPrecision(gl, gl.VERTEX_SHADER),
                    fragmentShaderPrecision: this.getShaderPrecision(gl, gl.FRAGMENT_SHADER)
                };

                // 生成WebGL渲染指纹
                info.renderHash = this.getWebGLRenderFingerprint(gl);

                return info;
            } catch (e) {
                return { error: e.message };
            }
        },

        /**
         * 获取着色器精度
         */
        getShaderPrecision(gl, shaderType) {
            const precision = {};
            ['LOW_FLOAT', 'MEDIUM_FLOAT', 'HIGH_FLOAT', 'LOW_INT', 'MEDIUM_INT', 'HIGH_INT'].forEach(p => {
                const format = gl.getShaderPrecisionFormat(shaderType, gl[p]);
                if (format) {
                    precision[p] = {
                        rangeMin: format.rangeMin,
                        rangeMax: format.rangeMax,
                        precision: format.precision
                    };
                }
            });
            return precision;
        },

        /**
         * WebGL渲染指纹
         */
        getWebGLRenderFingerprint(gl) {
            try {
                const canvas = gl.canvas;
                canvas.width = 256;
                canvas.height = 128;

                // 创建简单的渲染程序
                const vertexShader = gl.createShader(gl.VERTEX_SHADER);
                gl.shaderSource(vertexShader, `
                    attribute vec2 position;
                    void main() {
                        gl_Position = vec4(position, 0.0, 1.0);
                    }
                `);
                gl.compileShader(vertexShader);

                const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
                gl.shaderSource(fragmentShader, `
                    precision mediump float;
                    void main() {
                        gl_FragColor = vec4(0.812, 0.195, 0.553, 1.0);
                    }
                `);
                gl.compileShader(fragmentShader);

                const program = gl.createProgram();
                gl.attachShader(program, vertexShader);
                gl.attachShader(program, fragmentShader);
                gl.linkProgram(program);
                gl.useProgram(program);

                // 绘制三角形
                const vertices = new Float32Array([-0.5, -0.5, 0.5, -0.5, 0.0, 0.5]);
                const buffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
                gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

                const position = gl.getAttribLocation(program, 'position');
                gl.enableVertexAttribArray(position);
                gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

                gl.clearColor(0.0, 0.0, 0.0, 1.0);
                gl.clear(gl.COLOR_BUFFER_BIT);
                gl.drawArrays(gl.TRIANGLES, 0, 3);

                // 读取像素
                const pixels = new Uint8Array(256 * 128 * 4);
                gl.readPixels(0, 0, 256, 128, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

                return this.hashArray(pixels);
            } catch (e) {
                return null;
            }
        },

        /**
         * AudioContext指纹收集
         */
        async getAudioFingerprint() {
            try {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                if (!AudioContext) {
                    return { supported: false };
                }

                const context = new AudioContext();
                
                const info = {
                    supported: true,
                    sampleRate: context.sampleRate,
                    state: context.state,
                    baseLatency: context.baseLatency,
                    outputLatency: context.outputLatency,
                    maxChannelCount: context.destination.maxChannelCount,
                    numberOfInputs: context.destination.numberOfInputs,
                    numberOfOutputs: context.destination.numberOfOutputs,
                    channelCount: context.destination.channelCount,
                    channelCountMode: context.destination.channelCountMode,
                    channelInterpretation: context.destination.channelInterpretation
                };

                // 生成音频指纹
                info.fingerprint = await this.generateAudioFingerprint(context);

                await context.close();
                return info;
            } catch (e) {
                return { error: e.message };
            }
        },

        /**
         * 生成音频指纹 - TikTok使用的方法
         */
        generateAudioFingerprint(context) {
            return new Promise((resolve) => {
                try {
                    const oscillator = context.createOscillator();
                    const analyser = context.createAnalyser();
                    const gain = context.createGain();
                    const scriptProcessor = context.createScriptProcessor(4096, 1, 1);

                    gain.gain.value = 0; // 静音
                    oscillator.type = 'triangle';
                    oscillator.frequency.value = 10000;

                    oscillator.connect(analyser);
                    analyser.connect(scriptProcessor);
                    scriptProcessor.connect(gain);
                    gain.connect(context.destination);

                    oscillator.start(0);

                    scriptProcessor.onaudioprocess = (e) => {
                        const output = e.inputBuffer.getChannelData(0);
                        let sum = 0;
                        for (let i = 0; i < output.length; i++) {
                            sum += Math.abs(output[i]);
                        }
                        oscillator.disconnect();
                        scriptProcessor.disconnect();
                        resolve(sum.toString());
                    };

                    setTimeout(() => resolve('timeout'), 1000);
                } catch (e) {
                    resolve('error');
                }
            });
        },

        /**
         * 字体检测 - TikTok收集的字体列表
         */
        getFontsInfo() {
            try {
                const baseFonts = ['monospace', 'sans-serif', 'serif'];
                const testString = 'mmmmmmmmmmlli';
                const testSize = '72px';

                const testDiv = document.createElement('div');
                testDiv.style.cssText = 'position:absolute;left:-9999px;font-size:' + testSize;
                document.body.appendChild(testDiv);

                // 获取基准字体宽度
                const defaultWidths = {};
                baseFonts.forEach(baseFont => {
                    testDiv.style.fontFamily = baseFont;
                    testDiv.textContent = testString;
                    defaultWidths[baseFont] = testDiv.offsetWidth;
                });

                // 测试字体列表 (TikTok检测的字体)
                const testFonts = [
                    // 西方常用字体
                    'Arial', 'Arial Black', 'Arial Narrow', 'Book Antiqua', 'Bookman Old Style',
                    'Calibri', 'Cambria', 'Cambria Math', 'Century', 'Century Gothic',
                    'Comic Sans MS', 'Consolas', 'Courier', 'Courier New',
                    'Georgia', 'Helvetica', 'Impact', 'Lucida Console', 'Lucida Sans Unicode',
                    'Microsoft Sans Serif', 'Monaco', 'Palatino Linotype',
                    'Segoe UI', 'Tahoma', 'Times', 'Times New Roman',
                    'Trebuchet MS', 'Verdana', 'Wingdings',
                    // 中文字体
                    'Microsoft YaHei', 'Microsoft YaHei UI', 'SimHei', 'SimSun', 'NSimSun',
                    'FangSong', 'KaiTi', 'STXihei', 'STHeiti', 'STKaiti', 'STSong', 'STFangsong',
                    'LiSu', 'YouYuan', 'STCaiyun', 'STHupo', 'STLiti', 'STXingkai',
                    'Source Han Sans CN', 'Noto Sans CJK SC', 'PingFang SC',
                    // 日文字体
                    'MS Gothic', 'MS PGothic', 'MS Mincho', 'MS PMincho', 'Meiryo',
                    // 韩文字体
                    'Malgun Gothic', 'Gulim', 'Dotum', 'Batang'
                ];

                const detectedFonts = [];
                testFonts.forEach(font => {
                    let detected = false;
                    baseFonts.forEach(baseFont => {
                        testDiv.style.fontFamily = `"${font}", ${baseFont}`;
                        testDiv.textContent = testString;
                        if (testDiv.offsetWidth !== defaultWidths[baseFont]) {
                            detected = true;
                        }
                    });
                    if (detected) detectedFonts.push(font);
                });

                document.body.removeChild(testDiv);

                return {
                    detected: detectedFonts,
                    count: detectedFonts.length,
                    hash: this.hashString(detectedFonts.join(','))
                };
            } catch (e) {
                return { error: e.message };
            }
        },

        /**
         * 网络连接信息
         */
        getConnectionInfo() {
            try {
                const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                if (!conn) return { supported: false };

                return {
                    supported: true,
                    effectiveType: conn.effectiveType,
                    downlink: conn.downlink,
                    downlinkMax: conn.downlinkMax,
                    rtt: conn.rtt,
                    saveData: conn.saveData,
                    type: conn.type
                };
            } catch (e) {
                return { error: e.message };
            }
        },

        /**
         * 电池信息
         */
        async getBatteryInfo() {
            try {
                if (!navigator.getBattery) {
                    return { supported: false };
                }

                const battery = await navigator.getBattery();
                return {
                    supported: true,
                    charging: battery.charging,
                    chargingTime: battery.chargingTime,
                    dischargingTime: battery.dischargingTime,
                    level: battery.level
                };
            } catch (e) {
                return { error: e.message };
            }
        },

        /**
         * 存储信息
         */
        async getStorageInfo() {
            const info = {
                localStorage: !!window.localStorage,
                sessionStorage: !!window.sessionStorage,
                indexedDB: !!window.indexedDB,
                cookieEnabled: navigator.cookieEnabled
            };

            // 存储配额估计
            if (navigator.storage && navigator.storage.estimate) {
                try {
                    const estimate = await navigator.storage.estimate();
                    info.storageQuota = estimate.quota;
                    info.storageUsage = estimate.usage;
                } catch (e) {}
            }

            return info;
        },

        /**
         * 浏览器特性检测
         */
        getFeatures() {
            return {
                // 触摸支持
                touchSupport: 'ontouchstart' in window,
                maxTouchPoints: navigator.maxTouchPoints || 0,
                
                // API支持
                webRTC: !!window.RTCPeerConnection,
                webSocket: !!window.WebSocket,
                webWorker: !!window.Worker,
                serviceWorker: 'serviceWorker' in navigator,
                
                // 媒体API
                getUserMedia: !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia),
                getDisplayMedia: !!(navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia),
                
                // 其他API
                notification: 'Notification' in window,
                permissions: 'permissions' in navigator,
                geolocation: 'geolocation' in navigator,
                bluetooth: 'bluetooth' in navigator,
                usb: 'usb' in navigator,
                
                // 编解码支持
                webp: this.checkWebPSupport(),
                avif: this.checkAVIFSupport(),
                
                // CSS支持
                cssGrid: CSS.supports('display', 'grid'),
                cssFlexbox: CSS.supports('display', 'flex'),
                
                // 性能API
                performanceObserver: 'PerformanceObserver' in window,
                
                // 自动化检测
                webdriver: navigator.webdriver,
                phantom: !!window._phantom,
                nightmare: !!window.__nightmare,
                selenium: !!window.document.__selenium_unwrapped || !!window.document.__webdriver_evaluate || !!window.document.__driver_evaluate
            };
        },

        /**
         * WebP支持检测
         */
        checkWebPSupport() {
            const canvas = document.createElement('canvas');
            return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        },

        /**
         * AVIF支持检测
         */
        checkAVIFSupport() {
            const canvas = document.createElement('canvas');
            return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
        },

        /**
         * 字符串哈希
         */
        hashString(str) {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                const char = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash = hash & hash;
            }
            return hash.toString(16);
        },

        /**
         * 数组哈希
         */
        hashArray(arr) {
            let hash = 0;
            for (let i = 0; i < arr.length; i++) {
                hash = ((hash << 5) - hash) + arr[i];
                hash = hash & hash;
            }
            return hash.toString(16);
        },

        /**
         * 生成完整指纹哈希
         */
        async generateHash(fingerprint) {
            const str = JSON.stringify(fingerprint);
            
            if (window.crypto && window.crypto.subtle) {
                try {
                    const encoder = new TextEncoder();
                    const data = encoder.encode(str);
                    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
                    const hashArray = Array.from(new Uint8Array(hashBuffer));
                    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
                } catch (e) {}
            }
            
            return this.hashString(str);
        },

        /**
         * 生成简短的设备ID
         */
        async getDeviceId() {
            const fp = await this.collect();
            return fp.hash.substring(0, 32);
        }
    };

    // 导出
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = DeviceFingerprint;
    } else {
        window.DeviceFingerprint = DeviceFingerprint;
    }

})(typeof window !== 'undefined' ? window : this);

// 使用示例:
// DeviceFingerprint.collect().then(fp => console.log(fp));
// DeviceFingerprint.getDeviceId().then(id => console.log(id));
