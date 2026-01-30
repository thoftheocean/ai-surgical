# 浏览行为配置

## 完整配置结构

```javascript
const browsingConfig = {
  // ==================== 目标视频配置 ====================
  targetVideo: {
    // 长时间观看概率
    longWatch: 0.85,        // 85%长时间观看
    skipEarly: 0.15,        // 15%提前划走
    
    // 长时间观看时的行为
    whenLongWatch: {
      watchTime: [15, 45],           // 观看15-45秒
      like: 0.50,                    // 50%点赞
      openComments: 0.30,            // 30%打开评论
      commentScrollTime: [5, 15],    // 评论滚动5-15秒
      likeComments: 0.25,            // 25%给评论点赞（1-3条）
      favorite: 0.28,                // 28%收藏
      follow: 0.08,                  // 8%关注博主
      rewatch: 0.12,                 // 12%重复观看
      share: 0.02                    // 2%分享
    },
    
    // 提前划走时的行为
    whenSkip: {
      watchTime: [3, 6],             // 观看3-6秒
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
      watchTime: [15, 30],           // 观看15-30秒
      like: 0.30,                    // 30%点赞
      openComments: 0.15,            // 15%看评论
      commentScrollTime: [3, 8],     // 评论滚动3-8秒
      favorite: 0.10,                // 10%收藏
      follow: 0.02                   // 2%关注
    },
    
    // 快速划走时的行为
    whenSkip: {
      watchTime: [2, 5],             // 观看2-5秒
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

## 配置调整建议

### 新账号（前3天）
```javascript
// 降低互动率，主要观看
targetVideo.whenLongWatch.like = 0.30;
targetVideo.whenLongWatch.follow = 0.03;
targetVideo.whenLongWatch.favorite = 0.15;
```

### 活跃培育（4-7天）
```javascript
// 正常互动率
// 使用默认配置
```

### 深度培育（7天后）
```javascript
// 提高互动率
targetVideo.whenLongWatch.like = 0.60;
targetVideo.whenLongWatch.follow = 0.12;
targetVideo.whenLongWatch.favorite = 0.35;
targetVideo.whenLongWatch.openComments = 0.40;
```
