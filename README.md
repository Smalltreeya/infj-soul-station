# INFJ心灵驿站 🌱

一个温暖的INFJ群体社区，让每一个INFJ都能找到归属感，寻找世另我，分享内心世界。

## 项目简介

INFJ心灵驿站是一个为INFJ人格类型人群打造的心灵社区平台。在这里，你可以：

- 🌿 **种植心灵花园** - 用每一次分享和成长浇灌属于你的植物
- 🌊 **深海倾诉室** - 一个安全的匿名空间，倾诉你的内心
- 💫 **寻找世另我** - 通过灵魂档案，找到与你振动频率相同的人
- ⭐ **灵感星图** - 记录你的灵感和梦想，在星空中留下属于你的光芒
- 📖 **INFJ启示录** - 阅读、分享INFJ视角的生活思考和精神食粮
- 🔮 **心灵占卜** - 每日INFJ能量指引，探索未知的自己

## 技术栈

- **前端框架**: Next.js 16 (React 19)
- **样式**: Tailwind CSS 4
- **UI图标**: Lucide React
- **后端服务**: Supabase (PostgreSQL + 认证 + 存储)
- **部署**: Vercel (前端) + Supabase (后端)

## 项目结构

```
infj-soul-station/
├── src/
│   ├── app/              # Next.js App Router页面
│   │   ├── layout.js     # 根布局
│   │   ├── page.js       # 首页
│   │   └── globals.css   # 全局样式
│   ├── components/       # React组件
│   └── lib/              # 工具函数和配置
│       └── supabase.js   # Supabase客户端配置
├── public/               # 静态资源
├── .env.local.example    # 环境变量示例
├── next.config.js        # Next.js配置
├── tailwind.config.js    # Tailwind CSS配置
└── package.json          # 项目依赖
```

## 快速开始

### 1. 克隆项目

```bash
cd /home/gem/.openclaw/workspace/infj-soul-station
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置Supabase

#### 创建Supabase项目

1. 访问 [Supabase](https://supabase.com) 并注册/登录
2. 创建新项目
3. 在项目设置中找到：
   - Project URL
   - Anon/Public Key

#### 配置环境变量

```bash
# 复制环境变量示例文件
cp .env.local.example .env.local

# 编辑.env.local文件，填入你的Supabase信息
# NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. 运行开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

## Supabase数据库设置

在Supabase控制台中创建以下表：

### 用户表 (profiles)

```sql
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE,
  email TEXT UNIQUE,
  nickname TEXT,
  avatar TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (id)
);
```

### 深海倾诉表 (confessions)

```sql
CREATE TABLE confessions (
  id UUID DEFAULT UUIDV4() PRIMARY KEY,
  content TEXT NOT NULL,
  is_anonymous BOOLEAN DEFAULT true,
  candles INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID REFERENCES auth.users
);
```

### 心灵花园表 (gardens)

```sql
CREATE TABLE gardens (
  id UUID DEFAULT UUIDV4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users,
  plant_name TEXT,
  plant_stage INTEGER DEFAULT 0,
  experience INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 灵感星图表 (inspirations)

```sql
CREATE TABLE inspirations (
  id UUID DEFAULT UUIDV4() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  stars INTEGER DEFAULT 0,
  user_id UUID REFERENCES auth.users,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 部署到Vercel

### 1. 安装Vercel CLI

```bash
npm install -g vercel
```

### 2. 部署

```bash
vercel
```

### 3. 配置环境变量

在Vercel项目设置中添加环境变量：
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 开发指南

### 代码风格

- 使用2空格缩进
- 函数组件使用 `export default`
- 优先使用 Tailwind CSS 类名
- 使用 lucide-react 图标库

### Git提交规范

- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 重构
- `test`: 测试相关
- `chore`: 构建/工具相关

## 许可证

ISC

## 联系方式

如有问题或建议，欢迎联系INFJ心灵驿站团队。

---

用爱构建的温暖社区 🌱
