# 目标内容关键词库

## 健身/运动 (fitness)

### 核心关键词
```javascript
const fitnessCore = [
  'workout', 'gym', 'fitness', 'exercise', 'training',
  'fit', 'fitlife', 'fitfam', 'healthy'
];
```

### 肌肉部位
```javascript
const muscleGroups = [
  'muscle', 'bicep', 'tricep', 'abs', 'core',
  'glute', 'glutes', 'quads', 'hamstring',
  'chest', 'back', 'shoulder', 'deltoid',
  'calf', 'forearm', 'lats'
];
```

### 具体动作
```javascript
const exercises = [
  'squat', 'deadlift', 'bench', 'press',
  'rdl', 'hipthrust', 'hip thrust',
  'pullup', 'pull up', 'pushup', 'push up',
  'lunge', 'curl', 'row', 'plank',
  'crunch', 'dip', 'fly', 'raise'
];
```

### 训练类型
```javascript
const workoutTypes = [
  'legday', 'leg day', 'armday', 'arm day',
  'backday', 'back day', 'chestday', 'chest day',
  'hiit', 'cardio', 'crossfit', 'yoga', 'pilates',
  'stretching', 'warmup', 'cooldown',
  'bodybuilding', 'powerlifting', 'calisthenics'
];
```

### 运动项目
```javascript
const sports = [
  'basketball', 'football', 'soccer', 'tennis',
  'swimming', 'running', 'boxing', 'mma',
  'wrestling', 'volleyball', 'baseball',
  'golf', 'cycling', 'hiking', 'climbing'
];
```

### TikTok标签
```javascript
const fitnessTags = [
  'gymtok', 'gymgirl', 'gymrat', 'gymbro',
  'homeworkout', 'fitnessmotivation', 'workoutmotivation',
  'fitnessjourney', 'transformationtuesday',
  'gains', 'bulking', 'cutting', 'shredded',
  'personaltrainer', 'fitcheck'
];
```

### 完整健身关键词数组
```javascript
const fitnessKeywords = [
  // 核心
  'workout', 'gym', 'fitness', 'exercise', 'training', 'fit',
  
  // 肌肉
  'muscle', 'bicep', 'tricep', 'abs', 'glute', 'quads', 'chest', 'back',
  
  // 动作
  'squat', 'deadlift', 'bench', 'rdl', 'hipthrust', 'pullup', 'pushup', 'lunge',
  
  // 类型
  'legday', 'armday', 'hiit', 'cardio', 'crossfit', 'yoga', 'pilates',
  'bodybuilding', 'calisthenics',
  
  // 运动
  'basketball', 'football', 'soccer', 'tennis', 'swimming', 'running', 'boxing',
  
  // 标签
  'gymtok', 'gymgirl', 'gymrat', 'homeworkout', 'fitnessmotivation',
  'fitnessjourney', 'gains', 'personaltrainer',
  
  // 中文
  '健身', '运动', '锻炼', '增肌', '减脂', '跑步', '篮球', '足球', '瑜伽'
];
```

---

## 美妆/护肤 (beauty)

```javascript
const beautyKeywords = [
  // 核心
  'makeup', 'beauty', 'skincare', 'cosmetics',
  
  // 产品
  'foundation', 'concealer', 'mascara', 'lipstick', 'eyeshadow',
  'blush', 'bronzer', 'highlighter', 'primer', 'serum',
  
  // 类型
  'tutorial', 'grwm', 'transformation', 'routine',
  
  // 标签
  'beautytok', 'makeuptok', 'skincaretok', 'beautyhack',
  'makeupartist', 'mua', 'beautytips',
  
  // 品牌关键词
  'sephora', 'ulta', 'charlotte tilbury', 'nars', 'mac',
  
  // 中文
  '化妆', '美妆', '护肤', '彩妆', '口红', '粉底'
];
```

---

## 美食/烹饪 (food)

```javascript
const foodKeywords = [
  // 核心
  'recipe', 'cooking', 'food', 'foodie', 'chef',
  
  // 类型
  'baking', 'grilling', 'frying', 'roasting',
  
  // 餐食
  'breakfast', 'lunch', 'dinner', 'dessert', 'snack',
  'appetizer', 'meal prep',
  
  // 标签
  'foodtok', 'cookingtiktok', 'recipetok',
  'whatieatinaday', 'easyrecipe', 'quickrecipe',
  
  // 中文
  '美食', '烹饪', '食谱', '做饭', '甜点', '烘焙'
];
```

---

## 科技/数码 (tech)

```javascript
const techKeywords = [
  // 核心
  'tech', 'technology', 'gadget', 'device',
  
  // 产品
  'iphone', 'android', 'laptop', 'tablet', 'smartwatch',
  'airpods', 'headphones', 'camera',
  
  // 类型
  'review', 'unboxing', 'setup', 'tutorial',
  
  // 标签
  'techtok', 'techreview', 'techhack', 'techsetup',
  
  // 中文
  '科技', '数码', '开箱', '测评', '手机', '电脑'
];
```

---

## 游戏 (gaming)

```javascript
const gamingKeywords = [
  // 核心
  'gaming', 'gamer', 'game', 'esports',
  
  // 游戏名
  'fortnite', 'minecraft', 'valorant', 'lol', 'apex',
  'cod', 'gta', 'roblox', 'pokemon',
  
  // 平台
  'pc', 'playstation', 'xbox', 'nintendo', 'switch',
  
  // 类型
  'gameplay', 'stream', 'clip', 'highlight', 'montage',
  
  // 标签
  'gamingtok', 'gamertok', 'gamingclips',
  
  // 中文
  '游戏', '电竞', '直播', '主播'
];
```

---

## 关键词检测函数

```javascript
/**
 * 检测视频是否为目标内容
 * @param {Object} videoInfo - 视频信息（包含标签、描述、用户名等）
 * @param {Array} targetKeywords - 目标关键词数组
 * @returns {boolean} 是否为目标内容
 */
function isTargetContent(videoInfo, targetKeywords) {
  // 合并所有文本信息
  const allText = [
    videoInfo.description || '',
    videoInfo.username || '',
    ...(videoInfo.tags || []),
    ...(videoInfo.mentions || [])
  ].join(' ').toLowerCase();
  
  // 检查是否包含任一关键词
  return targetKeywords.some(keyword => 
    allText.includes(keyword.toLowerCase())
  );
}

/**
 * 从页面快照中提取视频信息
 * @param {Object} snapshot - 页面快照
 * @returns {Object} 视频信息
 */
function extractVideoInfo(snapshot) {
  // 提取所有文本内容
  const allText = snapshot.innerText || '';
  
  // 提取标签（#开头的词）
  const tags = allText.match(/#\w+/g) || [];
  
  // 提取@提及
  const mentions = allText.match(/@\w+/g) || [];
  
  return {
    allText: allText.toLowerCase(),
    tags: tags.map(t => t.slice(1).toLowerCase()),
    mentions: mentions.map(m => m.slice(1).toLowerCase())
  };
}
```

---

## 关键词优先级

对于健身类，按相关性排序：

| 优先级 | 关键词类型 | 示例 |
|-------|-----------|------|
| 高 | TikTok专用标签 | gymtok, fitnessmotivation, homeworkout |
| 高 | 具体动作名 | squat, deadlift, hipthrust, rdl |
| 中 | 肌肉部位 | glute, quads, abs, bicep |
| 中 | 训练类型 | legday, hiit, cardio |
| 低 | 通用词 | workout, gym, fitness |

优先级高的关键词匹配后，可以更确信这是目标内容。

---

## 排除关键词

某些关键词可能导致误判，需要排除：

```javascript
const excludeKeywords = [
  // 广告/促销
  'ad', 'sponsored', 'promo', 'discount', 'sale',
  
  // 非相关内容
  'makeup', 'beauty', 'fashion' // 如果目标是健身
];

function isTargetContent(videoInfo, targetKeywords, excludeKeywords = []) {
  const allText = videoInfo.allText;
  
  // 先检查排除词
  if (excludeKeywords.some(kw => allText.includes(kw))) {
    return false;
  }
  
  // 再检查目标词
  return targetKeywords.some(kw => allText.includes(kw));
}
```
