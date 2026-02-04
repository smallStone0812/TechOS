# TechOS (Windows Edition) 个人技术矩阵系统

![Vue3](https://img.shields.io/badge/Vue-3.x-42b883?style=flat-square&logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-5.x-646cff?style=flat-square&logo=vite)
![Pinia](https://img.shields.io/badge/Pinia-Store-ffe162?style=flat-square&logo=pinia)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

## 🌟 项目愿景与目标

本系统是一个模拟 Windows 11 交互体验的 Web 个人技术实验室。

- **核心目标**：将零散的前端练习点（JS、CSS、Vue、组件封装）转化为一个高工程化、具备 OS 级交互体验的综合性作品集。
- **核心价值**：通过复杂的窗口管理逻辑和自动化组件注册，体现开发者（3.5年经验）对 Vue3 深度应用、工程化设计及浏览器底层原理的掌控。

---

## 🚀 核心特性

### 1. 系统壳层 (The Shell)

- **桌面 (Desktop)**：具备动态网格系统，图标随窗口大小自动排列，支持双击启动应用及右键菜单功能。
- **任务栏 (Taskbar)**：
  - **开始菜单**：集成个人简历、技能雷达图及系统设置。
  - **运行队列**：实时展示已打开应用，支持蓝线活跃提示及最小化/还原切换。
  - **系统托盘**：显示时间、天气及 FPS/内存性能监控。
- **壁纸层**：支持持久化存储壁纸设置至 LocalStorage。

### 2. 窗口管理系统 (The Kernel)

- **交互控制**：支持窗口自由拖拽与 8 个方向的边缘缩放 (Resize)，光标随位置动态切换样式。
- **层级管理**：点击窗口自动实现 Z-Index 置顶。
- **动画效果**：使用 Vue `<Transition>` 模拟细腻的窗口缩放及淡入淡出效果。

### 3. 应用生态 (App Ecosystem)

- **自动化注册**：利用 Vite 的 `import.meta.glob` 机制，在 `src/apps/` 下创建文件即可自动注册。
- **三位一体展示**：每个应用均包含 Demo 演示、Shiki 渲染的源码视图以及 Markdown 格式的避坑指南。

---

## 🛠️ 技术栈选型

- **核心框架**：Vue 3.x (Composition API)
- **构建工具**：Vite 5.x (利用 Glob Import 动态加载)
- **状态管理**：Pinia (控制窗口状态机、层级、激活态)
- **样式处理**：SCSS + CSS Variables (实现一键深色模式)
- **部署方案**：GitHub Actions + Vercel

---

## 📂 典型练习案例

| 分类目录       | 练习性质    | 典型案例                                            |
| :------------- | :---------- | :-------------------------------------------------- |
| **JS_Lab**     | 原生JS/算法 | 手写 Promise A+、深拷贝对比、防抖节流观察器         |
| **CSS_Magic**  | 布局/特效   | 圣杯/双飞翼布局、BFC 实验场、CSS 瀑布流             |
| **Vue_Lab**    | 框架原理    | ref vs reactive 响应式丢失实验、自定义指令 (v-copy) |
| **Components** | 复杂组件    | **JSON驱动的动态表单**、ECharts 大屏容器            |
| **Wiki**       | 面试题库    | 分类存放 JS/Vue/工程化面试题，支持代码一键复制      |

---

## 📈 开发实施路线图 (Roadmap)

- [x] **第一阶段：基础设施**：Vite 初始化，编写 `windowManager` Store。
- [x] **第二阶段：窗口与指令**：实现 `v-drag` 与 `v-resize` 指令，封装 `WinWindow` 组件。
- [ ] **第三阶段：功能填充**：开发 Desktop 与 Taskbar，迁移“动态表单”应用。
- [ ] **第四阶段：细节打磨**：接入 `shiki` 高亮，实现任务管理器监控。

---

## 🛠️ 本地开发环境

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 项目打包
npm run build

# 运行单元测试
npm run test:unit
```

🧑‍💻 关于作者
3.5 年经验的前端开发工程师

专注于 Vue 生态、工程化设计与复杂交互逻辑。

本项目作为个人简历的加分项，旨在展示对 Web 技术底层的深入理解。
