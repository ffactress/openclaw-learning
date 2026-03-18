# OpenClaw 学习指南

这是一个关于 OpenClaw 的学习网站，包含安装、配置、安全和使用场景等内容。

## 功能特点

- 响应式设计，支持移动端和桌面端
- 左侧导航栏，移动端自动折叠
- 图片点击放大查看
- 平滑滚动导航
- 深色主题

## 技术栈

- Next.js 14
- React
- TypeScript
- Tailwind CSS

## 本地运行

```bash
npm install
npm run dev
```

访问 http://localhost:3000

## 部署到 Vercel

### 方法1：通过 Vercel 网页界面（推荐）

1. 访问 https://vercel.com
2. 注册/登录账号
3. 点击 "New Project"
4. 导入你的 GitHub 仓库或上传项目文件夹
5. Vercel 会自动检测 Next.js 项目并部署

### 方法2：通过 Git 推送

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <你的GitHub仓库地址>
git push -u origin main
```

然后在 Vercel 中导入你的 GitHub 仓库。

## 更新网站

每次修改代码后：

```bash
git add .
git commit -m "更新内容"
git push
```

Vercel 会自动检测到推送并重新部署，2-3分钟后生效。
