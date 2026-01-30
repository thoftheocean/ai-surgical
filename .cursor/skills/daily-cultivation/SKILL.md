---
name: daily-cultivation
description: TikTok账号日常培育，模拟真实用户浏览行为。自动识别目标内容（如健身/运动视频），执行长时间观看、点赞、评论浏览、收藏等互动。当用户提到账号培育、日常养号、TikTok浏览、模拟真人行为、账号预热时使用。
---

# TikTok 账号日常培育

模拟真实用户的TikTok浏览行为，通过智能识别目标内容并执行差异化互动，培养账号的兴趣标签。

## 触发关键词

- 日常培育、账号培育、养号
- TikTok浏览、模拟浏览
- 真人行为、模拟真人
- 账号预热、兴趣培养

## 快速开始

### 1. 确认培育目标

询问用户培育方向，常见类型：
- 健身/运动 (fitness)
- 美妆/护肤 (beauty)
- 美食/烹饪 (food)
- 科技/数码 (tech)
- 游戏 (gaming)

### 2. 加载配置

根据培育目标加载对应配置，详见 [browsing-config.md](browsing-config.md)

### 3. 执行浏览

使用Chrome DevTools MCP执行自动化浏览

## 核心行为逻辑

```
每个视频到达时:
│
├─ 检测是否为目标内容
│   │
│   ├─ 是目标内容 ──┬─ 85%概率 → 长时间观看(15-45秒)
│   │               │             ├─ 50%点赞
│   │               │             ├─ 30%看评论(滚动5-15秒)
│   │               │             ├─ 28%收藏
│   │               │             └─ 8%关注
│   │               │
│   │               └─ 15%概率 → 提前划走(3-6秒)
│   │
│   └─ 非目标内容 ──┬─ 10%概率 → 被吸引(15-30秒)
│                   │             ├─ 30%点赞
│                   │             └─ 15%看评论
│                   │
│                   └─ 90%概率 → 快速划走(2-5秒)
│
├─ 检查连续非目标计数
│   └─ >= 10个 → 触发主动搜索
│
└─ 下一个视频
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
// 加载配置
const config = loadConfig('fitness'); // 或其他目标类型

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

1. **随机性**: 所有行为都包含随机因素，避免机械化
2. **时间间隔**: 动作之间保持自然间隔(0.5-2秒)
3. **休息机制**: 长时间浏览后可适当暂停
4. **异常处理**: 遇到弹窗/验证时需人工介入
