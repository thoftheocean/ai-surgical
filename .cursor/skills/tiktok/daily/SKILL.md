---
name: daily
description: TikTok账号日常培育，模拟真实用户浏览行为。自动识别目标内容（如健身/运动视频），执行长时间观看、点赞、评论浏览、收藏等互动。触发关键词：日常培育、账号培育、养号、TikTok浏览、模拟浏览、真人行为、模拟真人、账号预热、兴趣培养、刷视频、自动浏览、培养账号。
---

# TikTok 账号日常培育

模拟真实用户的TikTok浏览行为，通过智能识别目标内容并执行差异化互动，培养账号的兴趣标签。

## 触发关键词

- 日常培育、账号培育、养号
- TikTok浏览、模拟浏览
- 真人行为、模拟真人
- 账号预热、兴趣培养

## 快速开始

### 1. 确认账号阶段（重要！）

**必须先询问账号状态**，根据阶段自动调整互动策略：

| 阶段 | 时间 | 点赞 | 关注 | 收藏 | 说明 |
|-----|------|------|------|------|------|
| **new** | 0-3天 | ❌ | ❌ | ❌ | 只观看，不互动 |
| **warmup** | 4-7天 | ⚠️低频 | ❌ | ⚠️低频 | 开始少量点赞 |
| **active** | 7天+ | ✅ | ⚠️低频 | ✅ | 正常互动 |

### 2. 确认培育目标

询问用户培育方向，常见类型：
- 健身/运动 (fitness)
- 美妆/护肤 (beauty)
- 美食/烹饪 (food)
- 科技/数码 (tech)
- 游戏 (gaming)

### 3. 加载配置

根据账号阶段和培育目标加载配置，详见 [browsing-config.md](browsing-config.md)

### 4. 执行浏览

使用Chrome DevTools MCP执行自动化浏览

## 核心行为逻辑

```
每个视频到达时:
│
├─ 检测是否为目标内容
│   │
│   ├─ 是目标内容 ──┬─ 85%概率 → 长时间观看(按视频时长40-80%)
│   │               │             ├─ [根据阶段] 点赞
│   │               │             ├─ [根据阶段] 看评论
│   │               │             ├─ [根据阶段] 收藏
│   │               │             └─ [根据阶段] 关注
│   │               │
│   │               └─ 15%概率 → 提前划走(1-3秒等待+2秒AI处理)
│   │
│   └─ 非目标内容 ──┬─ 10%概率 → 被吸引(按视频时长30-60%)
│                   │
│                   └─ 90%概率 → 快速划走(0-2秒等待+2秒AI处理)
│
├─ 检查连续非目标计数
│   └─ >= 10个 → 触发主动搜索（仅active阶段）
│
└─ 下一个视频

阶段互动限制:
┌─────────┬────────┬────────┬────────┬──────────┐
│ 阶段    │ 点赞   │ 收藏   │ 关注   │ 看评论   │
├─────────┼────────┼────────┼────────┼──────────┤
│ new     │ 0%     │ 0%     │ 0%     │ 20%      │
│ warmup  │ 15%    │ 10%    │ 0%     │ 25%      │
│ active  │ 50%    │ 28%    │ 8%     │ 30%      │
└─────────┴────────┴────────┴────────┴──────────┘
```

## 主动搜索机制

当连续浏览10个视频都未遇到目标内容时：

1. 点击搜索框
2. 输入随机目标关键词
3. 浏览搜索结果，观看3-5个视频
4. 每个视频观看20-40秒
5. 60%点赞，40%收藏，15%关注
6. 返回首页继续浏览
7. 重置计数器

## 执行流程

### 阶段1: 初始化
```javascript
// 设置账号阶段（重要！）
const accountStage = 'new';  // 'new' | 'warmup' | 'active'

// 加载配置
const config = loadConfig('fitness'); // 或其他目标类型

// 阶段互动限制
const stageModifiers = {
  new:    { like: 0, favorite: 0, follow: 0, openComments: 0.20 },
  warmup: { like: 0.15, favorite: 0.10, follow: 0, openComments: 0.25 },
  active: { like: 0.50, favorite: 0.28, follow: 0.08, openComments: 0.30 }
};
const modifier = stageModifiers[accountStage];

// 初始化状态
const state = {
  noTargetCount: 0,      // 连续非目标计数
  totalWatched: 0,       // 总观看数
  targetWatched: 0,      // 目标视频观看数
  likesGiven: 0,         // 点赞数
  favoritesAdded: 0,     // 收藏数
  followsAdded: 0,       // 关注数
  searchesPerformed: 0   // 搜索次数
};
```

### 阶段2: 主循环
```javascript
while (继续浏览) {
  // 1. 获取当前视频信息
  const videoInfo = await getVideoInfo();
  
  // 2. 判断是否为目标内容
  const isTarget = checkIsTarget(videoInfo, config.keywords);
  
  // 3. 根据类型执行行为
  if (isTarget) {
    state.noTargetCount = 0;
    await handleTargetVideo(videoInfo, config);
  } else {
    state.noTargetCount++;
    
    // 检查是否需要主动搜索
    if (state.noTargetCount >= config.searchTrigger.threshold) {
      await performActiveSearch(config);
      state.noTargetCount = 0;
    } else {
      await handleNonTargetVideo(videoInfo, config);
    }
  }
  
  // 4. 下一个视频
  await pressArrowDown();
  await randomDelay(500, 2000);
}
```

### 阶段3: 统计报告
```javascript
console.log('=== 培育报告 ===');
console.log(`总观看: ${state.totalWatched}`);
console.log(`目标视频: ${state.targetWatched}`);
console.log(`点赞: ${state.likesGiven}`);
console.log(`收藏: ${state.favoritesAdded}`);
console.log(`关注: ${state.followsAdded}`);
console.log(`主动搜索: ${state.searchesPerformed}次`);
```

## Chrome DevTools MCP 工具

执行时使用以下工具：

| 工具 | 用途 |
|-----|------|
| `navigate_page` | 导航到TikTok |
| `take_snapshot` | 获取页面快照，分析视频信息 |
| `press_key` | 按键操作（ArrowDown划视频） |
| `click` | 点击元素（点赞、评论、收藏等） |
| `evaluate_script` | 执行JS（等待、滚动、检测关键词） |
| `fill` | 填写搜索框 |

## 详细配置

- 完整配置参数见 [browsing-config.md](browsing-config.md)
- 关键词库见 [keywords.md](keywords.md)

## 注意事项

1. **账号阶段**: 新账号(0-3天)禁用所有互动，只做观看
2. **动态时长**: 观看时间根据视频总时长计算(40-80%)，而非固定值
3. **AI延迟补偿**: 快速划走等待时间已扣除AI处理时间(~2秒)
4. **随机性**: 所有行为都包含随机因素，避免机械化
5. **时间间隔**: 动作之间保持自然间隔(0.5-2秒)
6. **休息机制**: 长时间浏览后可适当暂停
7. **异常处理**: 遇到弹窗/验证时需人工介入

## 获取视频信息并计算等待时间

```javascript
// 一次性获取视频信息并计算实际等待时间（扣除已播放）
() => {
  const video = document.querySelector('video');
  const duration = video?.duration ? Math.floor(video.duration) : 30;
  const currentTime = video?.currentTime ? Math.floor(video.currentTime) : 0;
  
  // 目标观看时间（40-80%）
  const ratio = Math.random() * 0.4 + 0.4;
  let targetTime = Math.floor(duration * ratio);
  targetTime = Math.max(10, Math.min(60, targetTime));
  
  // 扣除已播放时间 = 实际需要等待的时间
  const waitTime = Math.max(0, targetTime - currentTime);
  
  return { duration, currentTime, targetTime, waitTime };
}
// 示例：视频30秒，已播放8秒，目标20秒 → 等待12秒
```

## 评论滚动代码

TikTok评论面板滚动：

```javascript
// evaluate_script 中使用
async () => {
  const duration = 8000; // 滚动8秒
  const startTime = Date.now();
  let count = 0;
  
  while (Date.now() - startTime < duration) {
    // 找评论容器（多种选择器）
    const container = 
      document.querySelector('[class*="DivCommentListContainer"]') ||
      document.querySelector('[data-e2e="comment-list"]') ||
      document.querySelector('[class*="CommentListContainer"]');
    
    if (container && container.scrollHeight > container.clientHeight) {
      container.scrollTop += Math.floor(Math.random() * 150) + 150;
      count++;
    }
    
    // 随机间隔1-2秒
    await new Promise(r => setTimeout(r, Math.random() * 1000 + 1000));
  }
  
  return 'scrolled ' + count + ' times';
}
```

## 培育报告

每次培育完成后，保存报告到 `logs/tiktok/daily/`：

### 日志目录结构
```
logs/
└── tiktok/
    └── daily/             # 对应 skills/tiktok/daily
        ├── 2026-01-30_session1.md
        ├── 2026-01-30_session2.md
        └── ...
```

### 报告命名
```
YYYY-MM-DD_session{N}.md
例: 2026-01-30_session1.md
```

### 报告内容
1. **基本信息**: 日期、账号、阶段、目标、时长
2. **浏览统计**: 总观看、目标/非目标、命中率、互动数
3. **目标视频列表**: 用户名、标签、观看时长
4. **算法反馈**: 推荐变化、效果评估
5. **技术验证**: 优化项验证结果、待优化项
6. **下次建议**: 后续培育建议

### 效果追踪指标
- 目标内容命中率（越高越好）
- 连续推荐目标内容的频率
- 推荐用户名中含目标关键词的比例
