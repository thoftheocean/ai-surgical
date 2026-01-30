# Facebook 浏览行为配置

## 账号阶段配置（重要）

根据账号状态选择不同的配置：

| 阶段 | 时间 | Reaction | 评论 | 分享 | 保存 | 加好友 | 说明 |
|-----|------|----------|------|------|------|--------|------|
| **新账号** | 0-3天 | ❌禁用 | ❌禁用 | ❌禁用 | ❌禁用 | ❌禁用 | 只浏览，建立记录 |
| **预热期** | 4-10天 | ⚠️低频 | ❌禁用 | ❌禁用 | ⚠️低频 | ❌禁用 | 少量Reaction |
| **活跃期** | 10天+ | ✅正常 | ⚠️低频 | ⚠️低频 | ✅正常 | ⚠️极低 | 正常互动 |

```javascript
// 账号阶段枚举
const AccountStage = {
  NEW: 'new',           // 新账号（0-3天）
  WARMUP: 'warmup',     // 预热期（4-10天）
  ACTIVE: 'active'      // 活跃期（10天+）
};

// 当前账号阶段 - 执行前需要设置
let currentStage = AccountStage.NEW;
```

---

## 完整配置结构

```javascript
const facebookBrowsingConfig = {
  // ==================== 账号阶段 ====================
  accountStage: 'new',  // 'new' | 'warmup' | 'active'
  
  // ==================== 模块权重 ====================
  moduleWeights: {
    feed: 0.40,         // News Feed 40%
    reels: 0.25,        // Reels 25%
    watch: 0.15,        // Watch视频 15%
    groups: 0.15,       // 群组 15%
    marketplace: 0.05   // Marketplace 5%（电商账号可调高）
  },
  
  // ==================== Feed浏览配置 ====================
  feed: {
    // 目标内容
    targetPost: {
      longView: 0.80,           // 80%长时间停留
      quickScroll: 0.20,        // 20%快速滚过
      
      whenLongView: {
        viewTimeMin: 5,         // 最少停留5秒
        viewTimeMax: 20,        // 最多停留20秒
        reaction: 0.35,         // 35%给Reaction（会被阶段覆盖）
        viewComments: 0.25,     // 25%查看评论
        commentScrollTime: [3, 10],  // 评论滚动3-10秒
        savePost: 0.20,         // 20%保存
        viewProfile: 0.05,      // 5%查看发帖人主页
        sharePost: 0.03         // 3%分享
      },
      
      whenQuickScroll: {
        viewTime: [1, 3],       // 停留1-3秒
        reaction: 0,
        viewComments: 0,
        savePost: 0
      }
    },
    
    // 非目标内容
    nonTargetPost: {
      longView: 0.08,           // 8%被吸引
      quickScroll: 0.92,        // 92%快速滚过
      
      whenLongView: {
        viewTimeMin: 3,
        viewTimeMax: 12,
        reaction: 0.20,
        viewComments: 0.12,
        commentScrollTime: [2, 6],
        savePost: 0.08
      },
      
      whenQuickScroll: {
        viewTime: [0.5, 2],     // 停留0.5-2秒
        reaction: 0,
        viewComments: 0
      }
    },
    
    // 滚动配置
    scroll: {
      distance: [300, 600],     // 每次滚动300-600px
      behavior: 'smooth',       // 平滑滚动
      afterDelay: [1500, 4000]  // 滚动后等待1.5-4秒
    }
  },
  
  // ==================== Reels配置（类似TikTok） ====================
  reels: {
    targetReel: {
      longWatch: 0.85,          // 85%长时间观看
      skipEarly: 0.15,          // 15%提前划走
      
      whenLongWatch: {
        watchTimeRatio: [0.4, 0.8],  // 观看视频时长的40-80%
        watchTimeMin: 8,             // 最少8秒
        watchTimeMax: 45,            // 最多45秒
        reaction: 0.40,              // 40%Reaction
        viewComments: 0.25,          // 25%看评论
        commentScrollTime: [4, 12],  // 评论滚动4-12秒
        savePost: 0.22,              // 22%保存
        followCreator: 0.05,         // 5%关注创作者
        sharePost: 0.02              // 2%分享
      },
      
      whenSkip: {
        watchTime: [1, 3],           // 观看1-3秒
        reaction: 0,
        viewComments: 0,
        savePost: 0
      }
    },
    
    nonTargetReel: {
      longWatch: 0.10,          // 10%被吸引
      skipEarly: 0.90,          // 90%快速划过
      
      whenLongWatch: {
        watchTimeRatio: [0.3, 0.5],
        watchTimeMin: 5,
        watchTimeMax: 25,
        reaction: 0.25,
        viewComments: 0.10,
        savePost: 0.08
      },
      
      whenSkip: {
        watchTime: [0, 2],           // 0-2秒（AI处理时间已在播）
        reaction: 0,
        viewComments: 0
      }
    }
  },
  
  // ==================== Watch视频配置 ====================
  watch: {
    targetVideo: {
      longWatch: 0.75,
      skipEarly: 0.25,
      
      whenLongWatch: {
        watchTimeRatio: [0.3, 0.7],    // 观看30-70%
        watchTimeMin: 20,              // 最少20秒
        watchTimeMax: 180,             // 最长3分钟
        reaction: 0.30,
        viewComments: 0.20,
        commentScrollTime: [5, 15],
        saveVideo: 0.15,
        followCreator: 0.03
      }
    },
    
    nonTargetVideo: {
      longWatch: 0.05,
      skipEarly: 0.95,
      
      whenLongWatch: {
        watchTimeRatio: [0.2, 0.4],
        watchTimeMin: 15,
        watchTimeMax: 60,
        reaction: 0.15
      },
      
      whenSkip: {
        watchTime: [3, 8],
        reaction: 0
      }
    }
  },
  
  // ==================== 群组浏览配置 ====================
  groups: {
    // 已加入群组的内容
    targetGroupPost: {
      longView: 0.75,
      quickScroll: 0.25,
      
      whenLongView: {
        viewTimeMin: 5,
        viewTimeMax: 25,
        reaction: 0.30,
        viewComments: 0.35,      // 群组评论更活跃
        commentScrollTime: [5, 15],
        savePost: 0.15,
        shareToGroup: 0          // 不分享到群组
      }
    },
    
    nonTargetGroupPost: {
      longView: 0.10,
      quickScroll: 0.90,
      
      whenLongView: {
        viewTimeMin: 3,
        viewTimeMax: 12,
        reaction: 0.15,
        viewComments: 0.20
      }
    }
  },
  
  // ==================== Marketplace配置 ====================
  marketplace: {
    targetListing: {
      longView: 0.70,
      
      whenLongView: {
        viewTimeMin: 8,
        viewTimeMax: 30,
        saveItem: 0.25,
        viewSeller: 0.10,
        viewPhotos: 0.40         // 浏览更多图片
      }
    }
  },
  
  // ==================== 时间配置 ====================
  timing: {
    // 动作间隔（毫秒）
    actionDelay: [500, 2000],        // 点击等动作后等待0.5-2秒
    scrollDelay: [1500, 4000],       // 滚动后等待1.5-4秒
    moduleSwitch: [30000, 90000],    // 模块切换间隔30-90秒
    pageLoadWait: [1500, 3000],      // 页面加载等待1.5-3秒
    
    // Reels滑动
    reelSwipeDelay: [500, 1500],     // Reel切换后等待0.5-1.5秒
    
    // 打字模拟（如需输入）
    typeDelay: [80, 200],            // 每个字符间隔80-200ms
    
    // 评论滚动
    commentScrollInterval: [1000, 2000],  // 每1-2秒滚动一次
    commentScrollAmount: [150, 300]       // 每次滚动150-300px
  },
  
  // ==================== 会话配置 ====================
  session: {
    // 单次浏览时长
    minDuration: 10 * 60 * 1000,     // 最少10分钟
    maxDuration: 25 * 60 * 1000,     // 最长25分钟
    
    // 休息机制
    restAfterMinutes: [5, 10],       // 每5-10分钟休息一次
    restDuration: [5000, 15000],     // 休息5-15秒
    
    // 各模块浏览数量
    feedPostsPerVisit: [8, 15],      // 每次Feed浏览8-15条
    reelsPerVisit: [6, 12],          // 每次Reels浏览6-12个
    watchVideosPerVisit: [2, 5],     // 每次Watch看2-5个
    groupPostsPerVisit: [5, 10]      // 每次群组浏览5-10条
  },
  
  // ==================== 模块切换触发 ====================
  moduleSwitchTrigger: {
    // 连续非目标内容数
    threshold: 15,                    // 连续15个非目标后切换模块
    
    // 或者时间触发
    maxTimeInModule: 5 * 60 * 1000   // 单模块最长5分钟
  }
};
```

---

## 阶段配置修改器

根据 `accountStage` 自动调整互动概率：

```javascript
// 阶段配置修改器
const stageModifiers = {
  // 新账号：完全禁用互动，只浏览
  new: {
    reaction: 0,              // 禁用Reaction
    savePost: 0,              // 禁用保存
    sharePost: 0,             // 禁用分享
    followCreator: 0,         // 禁用关注
    addFriend: 0,             // 禁用加好友
    viewComments: 0.15,       // 可以看评论（降低频率）
    viewProfile: 0            // 禁用查看主页
  },
  
  // 预热期：低频互动
  warmup: {
    reaction: 0.12,           // 12% Reaction
    savePost: 0.08,           // 8%保存
    sharePost: 0,             // 仍禁用分享
    followCreator: 0,         // 仍禁用关注
    addFriend: 0,             // 仍禁用加好友
    viewComments: 0.20,       // 20%看评论
    viewProfile: 0.02         // 2%查看主页
  },
  
  // 活跃期：正常互动
  active: {
    reaction: 0.35,           // 正常Reaction
    savePost: 0.20,           // 正常保存
    sharePost: 0.03,          // 低频分享
    followCreator: 0.05,      // 低频关注
    addFriend: 0.02,          // 极低频加好友
    viewComments: 0.25,       // 正常看评论
    viewProfile: 0.05         // 正常查看主页
  }
};

// 获取当前阶段的实际配置
function getEffectiveConfig(baseConfig, stage) {
  const modifier = stageModifiers[stage] || stageModifiers.new;
  
  // 深度合并配置
  return {
    ...baseConfig,
    feed: {
      ...baseConfig.feed,
      targetPost: {
        ...baseConfig.feed.targetPost,
        whenLongView: {
          ...baseConfig.feed.targetPost.whenLongView,
          reaction: modifier.reaction,
          savePost: modifier.savePost,
          sharePost: modifier.sharePost,
          viewComments: modifier.viewComments,
          viewProfile: modifier.viewProfile
        }
      }
    },
    reels: {
      ...baseConfig.reels,
      targetReel: {
        ...baseConfig.reels.targetReel,
        whenLongWatch: {
          ...baseConfig.reels.targetReel.whenLongWatch,
          reaction: modifier.reaction,
          savePost: modifier.savePost,
          followCreator: modifier.followCreator,
          viewComments: modifier.viewComments
        }
      }
    }
  };
}
```

---

## 预设配置：健身/运动

```javascript
const fitnessFacebookConfig = {
  name: 'fitness',
  displayName: '健身运动',
  
  // 继承基础配置
  ...facebookBrowsingConfig,
  
  // 模块权重调整（健身内容Reels较多）
  moduleWeights: {
    feed: 0.35,
    reels: 0.35,      // 提高Reels权重
    watch: 0.15,
    groups: 0.10,
    marketplace: 0.05
  }
};
```

## 预设配置：电商/购物

```javascript
const ecommerceFacebookConfig = {
  name: 'ecommerce',
  displayName: '电商购物',
  
  ...facebookBrowsingConfig,
  
  // 模块权重调整
  moduleWeights: {
    feed: 0.30,
    reels: 0.15,
    watch: 0.10,
    groups: 0.15,
    marketplace: 0.30  // 大幅提高Marketplace权重
  }
};
```

## 预设配置：本地生活

```javascript
const localFacebookConfig = {
  name: 'local',
  displayName: '本地生活',
  
  ...facebookBrowsingConfig,
  
  // 模块权重调整
  moduleWeights: {
    feed: 0.40,
    reels: 0.15,
    watch: 0.10,
    groups: 0.25,      // 提高群组权重
    marketplace: 0.10
  }
};
```

---

## Reaction类型权重

Facebook支持多种Reaction，根据内容智能选择：

```javascript
const reactionWeights = {
  like: 0.60,     // 👍 Like - 默认最常用
  love: 0.20,     // ❤️ Love - 喜欢的内容
  haha: 0.10,     // 😆 Haha - 搞笑内容
  wow: 0.05,      // 😮 Wow - 惊奇内容
  sad: 0.03,      // 😢 Sad - 感人内容
  angry: 0.02     // 😠 Angry - 不常用
};

/**
 * 根据内容类型智能选择Reaction
 * @param {Object} postInfo - 帖子信息
 * @returns {string} reaction类型
 */
function selectReaction(postInfo) {
  const text = (postInfo.text || '').toLowerCase();
  
  // 搞笑内容
  if (text.includes('funny') || text.includes('😂') || text.includes('lol') || 
      text.includes('haha') || text.includes('meme')) {
    return Math.random() < 0.7 ? 'haha' : 'like';
  }
  
  // 可爱/感人内容
  if (text.includes('cute') || text.includes('❤️') || text.includes('love') ||
      text.includes('beautiful') || text.includes('amazing')) {
    return Math.random() < 0.6 ? 'love' : 'like';
  }
  
  // 惊奇内容
  if (text.includes('wow') || text.includes('incredible') || 
      text.includes('unbelievable') || text.includes('crazy')) {
    return Math.random() < 0.5 ? 'wow' : 'like';
  }
  
  // 默认按权重随机选择
  return weightedRandomChoice(reactionWeights);
}
```

---

## 动态观看时间计算

```javascript
/**
 * 根据视频时长计算观看时间
 * @param {number} videoDuration - 视频总时长（秒）
 * @param {Object} config - 配置对象
 * @param {boolean} isTarget - 是否为目标内容
 * @returns {number} 观看时间（秒）
 */
function calculateWatchTime(videoDuration, config, isTarget = true) {
  const c = isTarget 
    ? config.reels.targetReel.whenLongWatch 
    : config.reels.nonTargetReel.whenLongWatch;
  
  // 根据比例计算观看时间
  const ratio = randomFloat(c.watchTimeRatio[0], c.watchTimeRatio[1]);
  let watchTime = Math.floor(videoDuration * ratio);
  
  // 限制在最小和最大范围内
  watchTime = Math.max(c.watchTimeMin, watchTime);
  watchTime = Math.min(c.watchTimeMax, watchTime);
  
  return watchTime;
}

// 示例：
// 15秒短视频 → 观看 8秒 (最小限制)
// 30秒视频  → 观看 12-24秒
// 60秒视频  → 观看 24-45秒
// 120秒视频 → 观看 45秒 (最大限制)
```

---

## 获取Reel信息并计算等待时间

```javascript
// 在 evaluate_script 中一次性获取所有信息并计算
() => {
  const video = document.querySelector('video');
  const duration = video && video.duration ? Math.floor(video.duration) : 20;
  const currentTime = video && video.currentTime ? Math.floor(video.currentTime) : 0;
  
  // 计算目标观看时间（视频时长的40-80%）
  const ratio = Math.random() * 0.4 + 0.4;
  let targetWatchTime = Math.floor(duration * ratio);
  targetWatchTime = Math.max(8, Math.min(45, targetWatchTime));
  
  // 扣除已播放时间
  const actualWaitTime = Math.max(0, targetWatchTime - currentTime);
  
  return {
    duration,           // 视频总时长
    currentTime,        // 已播放时间
    targetWatchTime,    // 目标观看时间
    actualWaitTime,     // 实际需要等待的时间
    willReact: Math.random() < 0.35
  };
}
```

---

## Feed滚动代码

```javascript
// evaluate_script 中使用
async () => {
  // 随机滚动距离 300-600px
  const scrollAmount = Math.floor(Math.random() * 300) + 300;
  
  // 平滑滚动
  window.scrollBy({ 
    top: scrollAmount, 
    behavior: 'smooth' 
  });
  
  // 等待滚动完成和内容加载
  await new Promise(r => setTimeout(r, 1500));
  
  return 'scrolled ' + scrollAmount + 'px';
}
```

---

## 评论滚动代码

```javascript
// evaluate_script 中使用
async () => {
  const duration = 8000;  // 滚动8秒
  const startTime = Date.now();
  let count = 0;
  
  while (Date.now() - startTime < duration) {
    // 找评论区域（Facebook评论通常在帖子下方）
    // 多种选择器适配不同页面结构
    const containers = [
      document.querySelector('[role="article"] [role="complementary"]'),
      document.querySelector('[data-pagelet="FeedUnit"] ul'),
      document.querySelector('[aria-label="评论"]')?.parentElement,
      document.querySelector('[aria-label="Comments"]')?.parentElement
    ];
    
    const container = containers.find(c => c && c.scrollHeight > c.clientHeight);
    
    if (container) {
      const scrollAmount = Math.floor(Math.random() * 150) + 150;
      container.scrollTop += scrollAmount;
      count++;
    }
    
    // 随机间隔1-2秒
    await new Promise(r => setTimeout(r, Math.random() * 1000 + 1000));
  }
  
  return 'scrolled comments ' + count + ' times';
}
```

---

## 随机数工具函数

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

// 带权重的随机选择
function weightedRandomChoice(weights) {
  const total = Object.values(weights).reduce((a, b) => a + b, 0);
  let rand = Math.random() * total;
  
  for (const [key, weight] of Object.entries(weights)) {
    rand -= weight;
    if (rand <= 0) return key;
  }
  return Object.keys(weights)[0];
}

// 生成随机延迟
function randomDelay(min, max) {
  return new Promise(resolve => 
    setTimeout(resolve, randomInt(min, max))
  );
}
```

---

## 行为决策函数（带阶段检查）

```javascript
/**
 * 决定Feed帖子的行为
 * @param {Object} config - 配置
 * @param {string} stage - 账号阶段
 * @param {boolean} isTarget - 是否为目标内容
 */
function decideFeedBehavior(config, stage, isTarget) {
  const modifier = stageModifiers[stage] || stageModifiers.new;
  const postConfig = isTarget ? config.feed.targetPost : config.feed.nonTargetPost;
  
  const willLongView = Math.random() < postConfig.longView;
  
  if (willLongView) {
    const c = postConfig.whenLongView;
    return {
      action: 'longView',
      viewTime: randomInt(c.viewTimeMin, c.viewTimeMax) * 1000,
      willReact: Math.random() < modifier.reaction,
      willViewComments: Math.random() < modifier.viewComments,
      commentScrollTime: randomInt(c.commentScrollTime[0], c.commentScrollTime[1]) * 1000,
      willSave: Math.random() < modifier.savePost,
      willViewProfile: Math.random() < (modifier.viewProfile || 0)
    };
  } else {
    const c = postConfig.whenQuickScroll;
    return {
      action: 'quickScroll',
      viewTime: randomFloat(c.viewTime[0], c.viewTime[1]) * 1000,
      willReact: false,
      willViewComments: false,
      willSave: false
    };
  }
}
```

---

## 快速配置参考

### 阶段互动概率

| 阶段 | Reaction | 保存 | 分享 | 关注 | 加好友 | 看评论 |
|------|----------|------|------|------|--------|--------|
| new | 0% | 0% | 0% | 0% | 0% | 15% |
| warmup | 12% | 8% | 0% | 0% | 0% | 20% |
| active | 35% | 20% | 3% | 5% | 2% | 25% |

### 各模块停留时间

| 模块 | 目标内容 | 非目标内容 |
|------|----------|------------|
| Feed | 5-20秒 | 0.5-2秒 |
| Reels | 8-45秒(按比例) | 0-2秒 |
| Watch | 20-180秒(按比例) | 3-8秒 |
| Groups | 5-25秒 | 0.5-2秒 |
| Marketplace | 8-30秒 | 2-5秒 |

### 模块切换触发

- 连续15个非目标内容
- 或单模块停留超过5分钟
