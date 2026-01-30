# 浏览行为配置

## 账号阶段配置（重要）

根据账号状态选择不同的配置：

| 阶段 | 时间 | 点赞 | 关注 | 收藏 | 评论 | 说明 |
|-----|------|------|------|------|------|------|
| **新账号** | 0-3天 | ❌禁用 | ❌禁用 | ❌禁用 | ✅可看 | 只观看，建立浏览记录 |
| **预热期** | 4-7天 | ⚠️低频 | ❌禁用 | ⚠️低频 | ✅可看 | 开始少量互动 |
| **活跃期** | 7天+ | ✅正常 | ⚠️低频 | ✅正常 | ✅可看 | 正常互动 |

```javascript
// 账号阶段枚举
const AccountStage = {
  NEW: 'new',           // 新账号（0-3天）
  WARMUP: 'warmup',     // 预热期（4-7天）
  ACTIVE: 'active'      // 活跃期（7天+）
};

// 当前账号阶段 - 执行前需要设置
let currentStage = AccountStage.NEW;
```

---

## 完整配置结构

```javascript
const browsingConfig = {
  // ==================== 账号阶段 ====================
  accountStage: 'new',  // 'new' | 'warmup' | 'active'
  
  // ==================== 目标视频配置 ====================
  targetVideo: {
    // 长时间观看概率
    longWatch: 0.85,        // 85%长时间观看
    skipEarly: 0.15,        // 15%提前划走
    
    // 长时间观看时的行为（会根据阶段自动调整）
    whenLongWatch: {
      // 观看时间：根据视频时长动态计算（见下方函数）
      watchTimeRatio: [0.4, 0.8],    // 观看视频时长的40%-80%
      watchTimeMin: 10,              // 最少观看10秒
      watchTimeMax: 60,              // 最多观看60秒
      like: 0.50,                    // 50%点赞（新账号自动禁用）
      openComments: 0.30,            // 30%打开评论
      commentScrollTime: [5, 15],    // 评论滚动5-15秒
      likeComments: 0.25,            // 25%给评论点赞（1-3条）
      favorite: 0.28,                // 28%收藏（新账号自动禁用）
      follow: 0.08,                  // 8%关注博主（新账号自动禁用）
      rewatch: 0.12,                 // 12%重复观看
      share: 0.02                    // 2%分享
    },
    
    // 提前划走时的行为（时间已考虑AI处理延迟，实际等待更短）
    whenSkip: {
      watchTime: [1, 3],             // 实际等待1-3秒（AI处理约2秒）
      like: 0,
      openComments: 0,
      favorite: 0
    }
  },
  
  // ==================== 非目标视频配置 ====================
  nonTargetVideo: {
    // 被其他内容吸引的概率
    longWatch: 0.10,        // 10%被吸引
    skipEarly: 0.90,        // 90%快速划走
    
    // 被吸引时的行为
    whenLongWatch: {
      watchTimeRatio: [0.3, 0.6],    // 观看视频时长的30%-60%
      watchTimeMin: 10,
      watchTimeMax: 40,
      like: 0.30,                    // 30%点赞
      openComments: 0.15,            // 15%看评论
      commentScrollTime: [3, 8],     // 评论滚动3-8秒
      favorite: 0.10,                // 10%收藏
      follow: 0.02                   // 2%关注
    },
    
    // 快速划走时的行为（时间已考虑AI处理延迟）
    whenSkip: {
      watchTime: [0, 2],             // 实际等待0-2秒（AI处理约2秒，总计2-4秒）
      like: 0,
      openComments: 0,
      favorite: 0
    }
  },
  
  // ==================== 主动搜索配置 ====================
  activeSearch: {
    // 触发条件
    triggerAfter: 10,                // 连续10个非目标视频后触发
    
    // 搜索后行为
    videosToWatch: [3, 5],           // 观看3-5个搜索结果
    watchTime: [20, 40],             // 每个视频20-40秒
    
    // 搜索结果的互动率（主动搜索说明很感兴趣）
    interactions: {
      like: 0.60,                    // 60%点赞
      favorite: 0.40,                // 40%收藏
      follow: 0.15,                  // 15%关注
      openComments: 0.25,            // 25%看评论
      commentScrollTime: [5, 12]     // 评论滚动5-12秒
    },
    
    // 搜索完成后
    returnToHome: true               // 返回首页继续浏览
  },
  
  // ==================== 时间配置 ====================
  timing: {
    // 动作间隔（毫秒）
    actionDelay: [300, 1300],        // 点击等动作后等待0.3-1.3秒
    scrollDelay: [500, 2500],        // 划视频后等待0.5-2.5秒
    pageLoadWait: [1000, 2000],      // 页面加载等待1-2秒
    
    // 打字模拟（可选）
    typeDelay: [50, 150],            // 每个字符间隔50-150ms
    
    // 评论滚动
    commentScrollInterval: 1500,     // 每1.5秒滚动一次
    commentScrollAmount: 200         // 每次滚动200px
  },
  
  // ==================== 会话配置 ====================
  session: {
    // 单次浏览
    minVideos: 20,                   // 最少浏览20个视频
    maxVideos: 50,                   // 最多浏览50个视频
    
    // 休息机制
    restAfterVideos: [15, 25],       // 每15-25个视频休息一次
    restDuration: [3000, 8000],      // 休息3-8秒
    
    // 总时长限制
    maxDuration: 15 * 60 * 1000      // 最长15分钟
  }
};
```

## 预设配置：健身/运动

```javascript
const fitnessConfig = {
  name: 'fitness',
  displayName: '健身运动',
  
  // 继承基础配置
  ...browsingConfig,
  
  // 搜索关键词
  searchKeywords: [
    "workout motivation",
    "gym workout", 
    "fitness routine",
    "leg day workout",
    "home workout",
    "muscle building",
    "hiit workout",
    "full body workout",
    "abs workout",
    "back workout",
    "chest workout",
    "arm workout",
    "glute workout",
    "cardio workout"
  ]
};
```

## 预设配置：美妆

```javascript
const beautyConfig = {
  name: 'beauty',
  displayName: '美妆护肤',
  
  ...browsingConfig,
  
  searchKeywords: [
    "makeup tutorial",
    "skincare routine",
    "beauty tips",
    "makeup look",
    "grwm makeup",
    "foundation routine",
    "eye makeup",
    "lip tutorial",
    "skincare tips",
    "beauty hack"
  ]
};
```

## 预设配置：美食

```javascript
const foodConfig = {
  name: 'food',
  displayName: '美食烹饪',
  
  ...browsingConfig,
  
  searchKeywords: [
    "recipe",
    "cooking tutorial",
    "food hack",
    "easy recipe",
    "dinner ideas",
    "meal prep",
    "baking",
    "foodtok",
    "what i eat",
    "healthy recipe"
  ]
};
```

## 随机数生成工具

```javascript
// 在范围内生成随机整数
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 在范围内生成随机浮点数
function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

// 根据概率返回布尔值
function randomChance(probability) {
  return Math.random() < probability;
}

// 从数组中随机选择
function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// 生成随机延迟
function randomDelay(min, max) {
  return new Promise(resolve => 
    setTimeout(resolve, randomInt(min, max))
  );
}
```

---

## 动态观看时间计算（重要）

根据视频总时长动态计算观看时间：

```javascript
/**
 * 根据视频时长计算观看时间
 * @param {number} videoDuration - 视频总时长（秒）
 * @param {Object} config - 配置对象
 * @param {boolean} isTarget - 是否为目标视频
 * @returns {number} 观看时间（秒）
 */
function calculateWatchTime(videoDuration, config, isTarget = true) {
  const c = isTarget 
    ? config.targetVideo.whenLongWatch 
    : config.nonTargetVideo.whenLongWatch;
  
  // 根据比例计算观看时间
  const ratio = randomFloat(c.watchTimeRatio[0], c.watchTimeRatio[1]);
  let watchTime = Math.floor(videoDuration * ratio);
  
  // 限制在最小和最大范围内
  watchTime = Math.max(c.watchTimeMin, watchTime);
  watchTime = Math.min(c.watchTimeMax, watchTime);
  
  return watchTime;
}

// 示例：
// 15秒短视频 → 观看 10-12秒 (最小限制)
// 30秒视频  → 观看 12-24秒
// 60秒视频  → 观看 24-48秒
// 180秒视频 → 观看 60秒 (最大限制)
```

### 从页面获取视频时长和当前播放位置

```javascript
/**
 * 获取视频时长和当前播放位置
 * @returns {Object} { duration, currentTime, remaining }
 */
function getVideoInfo() {
  const video = document.querySelector('video');
  if (video) {
    const duration = Math.floor(video.duration) || 30;
    const currentTime = Math.floor(video.currentTime) || 0;
    return {
      duration,
      currentTime,
      remaining: duration - currentTime
    };
  }
  return { duration: 30, currentTime: 0, remaining: 30 };
}
```

### 计算实际等待时间（扣除已播放时间）

**重要**: AI分析过程中视频已在播放，需要从目标观看时间中扣除已播放时间。

```javascript
/**
 * 计算实际需要等待的时间
 * @param {number} targetWatchTime - 目标观看时间（秒）
 * @param {number} alreadyPlayed - 已播放时间（秒）
 * @returns {number} 实际等待时间（秒），最小为0
 */
function calculateActualWaitTime(targetWatchTime, alreadyPlayed) {
  const waitTime = targetWatchTime - alreadyPlayed;
  return Math.max(0, waitTime);
}

// 示例：
// 目标观看24秒，视频已播放8秒 → 实际等待16秒
// 目标观看10秒，视频已播放12秒 → 实际等待0秒（已经看够了）
```

### 完整决策函数（推荐使用）

```javascript
// 在 evaluate_script 中一次性获取所有信息并计算
() => {
  const video = document.querySelector('video');
  const duration = video && video.duration ? Math.floor(video.duration) : 30;
  const currentTime = video && video.currentTime ? Math.floor(video.currentTime) : 0;
  
  // 计算目标观看时间（视频时长的40-80%）
  const ratio = Math.random() * 0.4 + 0.4;
  let targetWatchTime = Math.floor(duration * ratio);
  targetWatchTime = Math.max(10, Math.min(60, targetWatchTime));
  
  // 扣除已播放时间
  const actualWaitTime = Math.max(0, targetWatchTime - currentTime);
  
  return {
    duration,           // 视频总时长
    currentTime,        // 已播放时间
    targetWatchTime,    // 目标观看时间
    actualWaitTime,     // 实际需要等待的时间
    willOpenComments: Math.random() < 0.20
  };
}
```

### AI处理延迟说明

| 操作 | AI处理时间 | 实际等待 | 用户感知总时间 |
|------|-----------|---------|--------------|
| 快速划走 | ~2秒 | 0-2秒 | 2-4秒 |
| 短暂停留 | ~2秒 | 1-3秒 | 3-5秒 |
| 长时间观看 | ~3秒 | 按时长计算 | 观看时间+3秒 |

因此配置中的等待时间已**扣除AI处理时间**。

## 行为决策函数

```javascript
// 决定目标视频的行为
function decideTargetBehavior(config) {
  const willLongWatch = randomChance(config.targetVideo.longWatch);
  
  if (willLongWatch) {
    const c = config.targetVideo.whenLongWatch;
    return {
      action: 'longWatch',
      watchTime: randomInt(c.watchTime[0], c.watchTime[1]) * 1000,
      willLike: randomChance(c.like),
      willOpenComments: randomChance(c.openComments),
      commentScrollTime: randomInt(c.commentScrollTime[0], c.commentScrollTime[1]) * 1000,
      willFavorite: randomChance(c.favorite),
      willFollow: randomChance(c.follow),
      willRewatch: randomChance(c.rewatch)
    };
  } else {
    const c = config.targetVideo.whenSkip;
    return {
      action: 'skip',
      watchTime: randomInt(c.watchTime[0], c.watchTime[1]) * 1000,
      willLike: false,
      willOpenComments: false,
      willFavorite: false,
      willFollow: false
    };
  }
}

// 决定非目标视频的行为
function decideNonTargetBehavior(config) {
  const willLongWatch = randomChance(config.nonTargetVideo.longWatch);
  
  if (willLongWatch) {
    const c = config.nonTargetVideo.whenLongWatch;
    return {
      action: 'attracted',
      watchTime: randomInt(c.watchTime[0], c.watchTime[1]) * 1000,
      willLike: randomChance(c.like),
      willOpenComments: randomChance(c.openComments),
      commentScrollTime: randomInt(c.commentScrollTime[0], c.commentScrollTime[1]) * 1000,
      willFavorite: randomChance(c.favorite),
      willFollow: randomChance(c.follow)
    };
  } else {
    const c = config.nonTargetVideo.whenSkip;
    return {
      action: 'skip',
      watchTime: randomInt(c.watchTime[0], c.watchTime[1]) * 1000,
      willLike: false,
      willOpenComments: false,
      willFavorite: false,
      willFollow: false
    };
  }
}
```

## 阶段配置（自动应用）

根据 `accountStage` 自动调整互动概率：

```javascript
// 阶段配置修改器
const stageModifiers = {
  // 新账号：完全禁用互动，只观看
  new: {
    like: 0,              // 禁用点赞
    favorite: 0,          // 禁用收藏
    follow: 0,            // 禁用关注
    likeComments: 0,      // 禁用评论点赞
    share: 0,             // 禁用分享
    openComments: 0.20    // 可以看评论（降低频率）
  },
  
  // 预热期：低频互动
  warmup: {
    like: 0.15,           // 15%点赞
    favorite: 0.10,       // 10%收藏
    follow: 0,            // 仍禁用关注
    likeComments: 0,      // 禁用评论点赞
    share: 0,             // 禁用分享
    openComments: 0.25    // 25%看评论
  },
  
  // 活跃期：正常互动
  active: {
    like: 0.50,           // 正常点赞
    favorite: 0.28,       // 正常收藏
    follow: 0.08,         // 正常关注
    likeComments: 0.25,   // 正常评论点赞
    share: 0.02,          // 正常分享
    openComments: 0.30    // 正常看评论
  }
};

// 获取当前阶段的实际配置
function getEffectiveConfig(baseConfig, stage) {
  const modifier = stageModifiers[stage] || stageModifiers.new;
  return {
    ...baseConfig,
    targetVideo: {
      ...baseConfig.targetVideo,
      whenLongWatch: {
        ...baseConfig.targetVideo.whenLongWatch,
        ...modifier
      }
    },
    nonTargetVideo: {
      ...baseConfig.nonTargetVideo,
      whenLongWatch: {
        ...baseConfig.nonTargetVideo.whenLongWatch,
        like: modifier.like * 0.6,      // 非目标视频互动率更低
        favorite: modifier.favorite * 0.5,
        follow: modifier.follow * 0.25
      }
    }
  };
}
```

---

## 评论滚动（修复版）

TikTok评论面板的正确滚动方式：

```javascript
/**
 * 滚动评论面板
 * @param {number} duration - 滚动持续时间（毫秒）
 * @returns {Promise<string>} - 滚动结果
 */
async function scrollComments(duration = 8000) {
  return new Promise(async (resolve) => {
    const startTime = Date.now();
    let scrollCount = 0;
    
    const scroll = async () => {
      // 尝试多种选择器找到评论容器
      const selectors = [
        '[class*="DivCommentListContainer"]',
        '[class*="CommentListContainer"]',
        '[data-e2e="comment-list"]',
        '[class*="comment-list"]',
        '[class*="DivCommentContainer"]'
      ];
      
      let container = null;
      for (const sel of selectors) {
        container = document.querySelector(sel);
        if (container) break;
      }
      
      // 如果没找到，尝试通过评论内容定位父容器
      if (!container) {
        const commentItem = document.querySelector('[class*="CommentItem"]');
        if (commentItem) {
          container = commentItem.parentElement;
        }
      }
      
      // 最后尝试：找到右侧面板中可滚动的元素
      if (!container) {
        const rightPanel = document.querySelector('[class*="DivCommentContainer"]') 
                        || document.querySelector('aside')
                        || document.querySelector('[role="complementary"]');
        if (rightPanel) {
          // 找到其中可滚动的子元素
          const scrollables = rightPanel.querySelectorAll('*');
          for (const el of scrollables) {
            if (el.scrollHeight > el.clientHeight) {
              container = el;
              break;
            }
          }
        }
      }
      
      if (container && container.scrollHeight > container.clientHeight) {
        // 随机滚动量 150-300px
        const scrollAmount = Math.floor(Math.random() * 150) + 150;
        container.scrollTop += scrollAmount;
        scrollCount++;
      }
      
      // 检查是否继续滚动
      if (Date.now() - startTime < duration) {
        // 随机间隔 1-2秒
        const interval = Math.floor(Math.random() * 1000) + 1000;
        await new Promise(r => setTimeout(r, interval));
        await scroll();
      }
    };
    
    await scroll();
    resolve(`scrolled ${scrollCount} times`);
  });
}
```

### 使用方式（DevTools MCP）

```javascript
// 在 evaluate_script 中使用
CallMcpTool({
  server: 'user-chrome-devtools',
  toolName: 'evaluate_script',
  arguments: {
    function: `async () => {
      // 滚动评论 8 秒
      const startTime = Date.now();
      let count = 0;
      
      while (Date.now() - startTime < 8000) {
        // 找评论容器
        const container = document.querySelector('[class*="CommentListContainer"]')
          || document.querySelector('[data-e2e="comment-list"]')
          || document.querySelector('aside > div > div');
        
        if (container && container.scrollHeight > container.clientHeight) {
          container.scrollTop += Math.floor(Math.random() * 150) + 150;
          count++;
        }
        
        await new Promise(r => setTimeout(r, Math.floor(Math.random() * 1000) + 1000));
      }
      
      return 'scrolled ' + count + ' times';
    }`
  }
});
```

---

## 行为决策（带阶段检查）

```javascript
// 决定目标视频的行为（带阶段限制）
function decideTargetBehavior(config, stage = 'new') {
  const modifier = stageModifiers[stage] || stageModifiers.new;
  const willLongWatch = Math.random() < config.targetVideo.longWatch;
  
  if (willLongWatch) {
    const c = config.targetVideo.whenLongWatch;
    return {
      action: 'longWatch',
      watchTime: randomInt(c.watchTime[0], c.watchTime[1]) * 1000,
      // 应用阶段限制
      willLike: Math.random() < modifier.like,
      willOpenComments: Math.random() < modifier.openComments,
      commentScrollTime: randomInt(c.commentScrollTime[0], c.commentScrollTime[1]) * 1000,
      willFavorite: Math.random() < modifier.favorite,
      willFollow: Math.random() < modifier.follow,
      willRewatch: Math.random() < c.rewatch
    };
  } else {
    const c = config.targetVideo.whenSkip;
    return {
      action: 'skip',
      watchTime: randomInt(c.watchTime[0], c.watchTime[1]) * 1000,
      willLike: false,
      willOpenComments: false,
      willFavorite: false,
      willFollow: false
    };
  }
}
```

---

## 快速配置参考

| 阶段 | like | favorite | follow | openComments |
|------|------|----------|--------|--------------|
| new | 0 | 0 | 0 | 0.20 |
| warmup | 0.15 | 0.10 | 0 | 0.25 |
| active | 0.50 | 0.28 | 0.08 | 0.30 |
