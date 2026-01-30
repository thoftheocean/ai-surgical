---
name: daily
description: Facebook账号日常培育，模拟真实用户浏览行为。浏览Feed、观看Reels/视频、浏览群组，执行点赞、评论浏览、保存等互动。触发关键词：FB培育、Facebook养号、FB浏览、模拟真人、账号预热、Facebook培育。
---

# Facebook 账号日常培育

模拟真实用户的Facebook浏览行为，通过智能识别目标内容并执行差异化互动，培养账号的兴趣标签和社交信任度。

## 触发关键词

- FB培育、Facebook养号、Facebook培育
- FB浏览、模拟浏览
- 真人行为、模拟真人
- 账号预热、兴趣培养

## 快速开始

### 1. 确认账号阶段（重要！）

**必须先询问账号状态**，根据阶段自动调整互动策略：

| 阶段 | 时间 | Reaction | 评论 | 分享 | 保存 | 加好友 | 说明 |
|-----|------|----------|------|------|------|--------|------|
| **new** | 0-3天 | ❌ | ❌ | ❌ | ❌ | ❌ | 只浏览，建立浏览记录 |
| **warmup** | 4-10天 | ⚠️低频 | ❌ | ❌ | ⚠️低频 | ❌ | 开始少量Reaction |
| **active** | 10天+ | ✅ | ⚠️低频 | ⚠️低频 | ✅ | ⚠️低频 | 正常互动 |

> ⚠️ **Facebook比TikTok更敏感**：新账号互动过于频繁容易触发安全验证

### 2. 确认培育目标

询问用户培育方向，常见类型：
- 健身/运动 (fitness)
- 电商/购物 (ecommerce)
- 科技/数码 (tech)
- 本地生活 (local)
- 新闻/资讯 (news)
- 宠物 (pets)
- 旅行 (travel)

### 3. 浏览模块选择

Facebook有多个浏览入口，建议组合使用：

| 模块 | 权重 | URL | 说明 |
|------|------|-----|------|
| News Feed | 40% | facebook.com | 主页信息流 |
| Reels | 25% | facebook.com/reel | 短视频（类似TikTok） |
| Watch | 15% | facebook.com/watch | 长视频 |
| Groups | 15% | facebook.com/groups/feed | 群组内容 |
| Marketplace | 5% | facebook.com/marketplace | 商品浏览 |

### 4. 加载配置

根据账号阶段和培育目标加载配置，详见 [browsing-config.md](browsing-config.md)

### 5. 执行浏览

使用Chrome DevTools MCP执行自动化浏览

## 核心行为逻辑

```
每个内容到达时:
│
├─ 检测内容类型（帖子/视频/Reels/链接/图片）
│   │
│   ├─ Reels ──→ 类似TikTok逻辑（上下滑动）
│   │             ├─ 目标内容 → 长时间观看 + 概率互动
│   │             └─ 非目标 → 快速划过
│   │
│   ├─ 普通视频 ──→ 停留观看 + 概率互动
│   │
│   ├─ 图片帖子 ──→ 停留浏览 + 概率点赞
│   │
│   └─ 文字/链接 ──→ 快速浏览或停留阅读
│
├─ 检测是否为目标内容
│   │
│   ├─ 是目标内容 ──┬─ 80%概率 → 长时间停留
│   │               │             ├─ [根据阶段] Reaction
│   │               │             ├─ [根据阶段] 看评论
│   │               │             ├─ [根据阶段] 保存
│   │               │             └─ [极低概率] 查看主页
│   │               │
│   │               └─ 20%概率 → 短暂停留后滚动
│   │
│   └─ 非目标内容 ──┬─ 8%概率 → 被吸引（停留）
│                   │
│                   └─ 92%概率 → 快速滚动过
│
├─ 检查连续非目标计数
│   └─ >= 15个 → 切换浏览模块
│
└─ 继续滚动

阶段互动限制:
┌─────────┬──────────┬────────┬────────┬────────┬──────────┐
│ 阶段    │ Reaction │ 评论   │ 分享   │ 保存   │ 加好友   │
├─────────┼──────────┼────────┼────────┼────────┼──────────┤
│ new     │ 0%       │ 0%     │ 0%     │ 0%     │ 0%       │
│ warmup  │ 12%      │ 0%     │ 0%     │ 8%     │ 0%       │
│ active  │ 35%      │ 5%     │ 3%     │ 20%    │ 2%       │
└─────────┴──────────┴────────┴────────┴────────┴──────────┘
```

## 执行流程

### 阶段1: 初始化

```javascript
// 设置账号阶段（重要！）
const accountStage = 'new';  // 'new' | 'warmup' | 'active'

// 加载配置
const config = loadConfig('fitness'); // 或其他目标类型

// 阶段互动限制
const stageModifiers = {
  new:    { reaction: 0, viewComments: 0.15, savePost: 0, sharePost: 0, followCreator: 0 },
  warmup: { reaction: 0.12, viewComments: 0.20, savePost: 0.08, sharePost: 0, followCreator: 0 },
  active: { reaction: 0.35, viewComments: 0.25, savePost: 0.20, sharePost: 0.03, followCreator: 0.05 }
};
const modifier = stageModifiers[accountStage];

// 初始化状态
const state = {
  noTargetCount: 0,       // 连续非目标计数
  totalViewed: 0,         // 总浏览数
  targetViewed: 0,        // 目标内容浏览数
  reactionsGiven: 0,      // Reaction数
  savedPosts: 0,          // 保存数
  modulesVisited: [],     // 访问的模块
  currentModule: 'feed'   // 当前模块
};
```

### 阶段2: 模块选择

```javascript
const moduleWeights = {
  feed: 0.40,
  reels: 0.25,
  watch: 0.15,
  groups: 0.15,
  marketplace: 0.05
};

// 根据权重随机选择模块
function selectModule() {
  const rand = Math.random();
  let cumulative = 0;
  for (const [module, weight] of Object.entries(moduleWeights)) {
    cumulative += weight;
    if (rand < cumulative) return module;
  }
  return 'feed';
}
```

### 阶段3: 主循环

```javascript
while (继续浏览) {
  const module = selectModule();
  
  switch(module) {
    case 'feed':
      await navigateTo('https://www.facebook.com');
      await browseFeed(config, randomInt(8, 15));
      break;
    case 'reels':
      await navigateTo('https://www.facebook.com/reel');
      await browseReels(config, randomInt(6, 12));
      break;
    case 'watch':
      await navigateTo('https://www.facebook.com/watch');
      await browseWatch(config, randomInt(2, 5));
      break;
    case 'groups':
      await navigateTo('https://www.facebook.com/groups/feed');
      await browseGroups(config, randomInt(5, 10));
      break;
  }
  
  // 模块切换间隔
  await randomDelay(30000, 90000);
}
```

### 阶段4: Feed浏览

```javascript
async function browseFeed(config, count) {
  for (let i = 0; i < count; i++) {
    // 1. 获取当前可见帖子信息
    const postInfo = await getVisiblePostInfo();
    
    // 2. 判断是否为目标内容
    const isTarget = checkIsTarget(postInfo, config.keywords);
    
    // 3. 根据类型执行行为
    if (isTarget) {
      state.noTargetCount = 0;
      state.targetViewed++;
      await handleTargetPost(postInfo, config, modifier);
    } else {
      state.noTargetCount++;
      await handleNonTargetPost(postInfo, config);
    }
    
    state.totalViewed++;
    
    // 4. 滚动到下一个内容
    await scrollFeed();
  }
}
```

### 阶段5: Reels浏览（类似TikTok）

```javascript
async function browseReels(config, count) {
  for (let i = 0; i < count; i++) {
    // 获取视频信息
    const reelInfo = await getReelInfo();
    
    // 判断是否为目标
    const isTarget = checkIsTarget(reelInfo, config.keywords);
    
    if (isTarget) {
      // 长时间观看
      const watchTime = calculateWatchTime(reelInfo.duration);
      await wait(watchTime);
      
      // 概率互动
      if (Math.random() < modifier.reaction) {
        await clickReaction();
        state.reactionsGiven++;
      }
    } else {
      // 快速划过
      await wait(randomInt(1000, 3000));
    }
    
    // 下一个Reel（按向下键）
    await pressArrowDown();
    await randomDelay(500, 1500);
  }
}
```

### 阶段6: 统计报告

```javascript
console.log('=== Facebook培育报告 ===');
console.log(`总浏览: ${state.totalViewed}`);
console.log(`目标内容: ${state.targetViewed}`);
console.log(`Reaction: ${state.reactionsGiven}`);
console.log(`保存: ${state.savedPosts}`);
console.log(`访问模块: ${state.modulesVisited.join(', ')}`);
```

## Chrome DevTools MCP 工具

执行时使用以下工具：

| 工具 | 用途 |
|-----|------|
| `navigate_page` | 导航到Facebook各模块 |
| `take_snapshot` | 获取页面快照，分析内容信息 |
| `press_key` | 按键操作（ArrowDown滑Reels） |
| `click` | 点击元素（Reaction、保存等） |
| `evaluate_script` | 执行JS（滚动、等待、检测） |
| `scroll` | 滚动Feed |

## Feed滚动代码

```javascript
// evaluate_script 中使用
async () => {
  // 随机滚动距离
  const scrollAmount = Math.floor(Math.random() * 300) + 300;
  window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
  
  // 等待内容加载
  await new Promise(r => setTimeout(r, 1500));
  
  return 'scrolled ' + scrollAmount + 'px';
}
```

## Reaction点击代码

```javascript
// 长按点赞按钮显示Reaction面板，然后选择
async () => {
  // 找到点赞按钮
  const likeBtn = document.querySelector('[aria-label="Like"]') 
                || document.querySelector('[aria-label="赞"]');
  
  if (likeBtn) {
    // 模拟悬停显示Reaction面板
    likeBtn.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    await new Promise(r => setTimeout(r, 500));
    
    // 点击Like
    likeBtn.click();
    return 'liked';
  }
  return 'not found';
}
```

## 详细配置

- 完整配置参数见 [browsing-config.md](browsing-config.md)
- 关键词库见 [keywords.md](keywords.md)

## 注意事项

1. **账号阶段**: 新账号(0-3天)禁用所有互动，只做浏览
2. **限速更严格**: Facebook对异常行为检测更敏感，前10天保守操作
3. **避免连续互动**: 互动之间保持较长间隔（2-5分钟内最多1-2次）
4. **模块切换**: 定期切换浏览模块，不要一直停留在同一处
5. **登录状态**: 保持Cookies有效，避免频繁登录
6. **设备指纹**: 使用固定设备/浏览器指纹
7. **时区匹配**: 浏览时间应匹配账号注册时区
8. **群组谨慎**: 新账号不要主动加入群组
9. **加好友**: active阶段才可极低频率加好友
10. **异常处理**: 遇到验证/弹窗需人工介入

## 培育报告

每次培育完成后，保存报告到 `logs/facebook/daily/`：

### 日志目录结构
```
logs/
└── facebook/
    └── daily/             # 对应 skills/facebook/daily
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
2. **浏览统计**: 总浏览、目标/非目标、命中率、互动数
3. **模块分布**: 各模块浏览时间和内容数
4. **目标内容列表**: 发帖人、内容类型、停留时长
5. **算法反馈**: 推荐变化、效果评估
6. **下次建议**: 后续培育建议
