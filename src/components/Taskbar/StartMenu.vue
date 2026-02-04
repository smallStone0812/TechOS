<script setup>
    import { useWindowManager } from '../../stores/windowManager';

    const store = useWindowManager();

    // 模拟简历数据
    const skills = ['Vue3', 'JavaScript', 'ECharts', 'WebSocket', 'Node.js', 'SCSS'];

    const openResume = () => {
        // 查找扫描引擎已经识别到的简历 App 配置
        const resumeApp = store.allApps.find(app => app.id === 'resume-app');
        if (resumeApp) {
            store.openApp(resumeApp);
            store.closeStartMenu(); // 打开 App 后自动关闭菜单，体验更好
        }
    };
</script>

<template>
    <Transition name="start-menu-anim">
        <div v-if="store.isStartMenuOpen" class="start-menu" @click.stop>
            <div class="search-bar">
                <input type="text" placeholder="搜索应用、设置和简历内容..." />
            </div>

            <div class="menu-content">
                <div class="resume-section">
                    <div class="user-info">
                        <div class="avatar">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
                        </div>
                        <div class="text">
                            <h3>你的名字</h3>
                            <p>高级前端工程师 | 3.5年经验</p>
                        </div>
                    </div>

                    <div class="resume-stats">
                        <div class="stat-item">
                            <span class="label">坐标</span>
                            <span class="value">武汉</span>
                        </div>
                        <div class="stat-item">
                            <span class="label">状态</span>
                            <span class="value">正在求职</span>
                        </div>
                    </div>

                    <div class="quick-links">
                        <h4>快速链接</h4>
                        <a href="https://github.com" target="_blank">🔗 GitHub 源码</a>
                        <a href="#" @click.prevent>📂 在线作品集 (当前)</a>
                    </div>
                </div>

                <div class="skills-section">
                    <h4>技术栈 (Skill Stack)</h4>
                    <div class="skill-tags">
                        <span v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</span>
                    </div>
                    <div class="resume-button-box">
                        <!-- <button class="download-btn">📄 下载完整 PDF 简历</button> -->
                        <button class="download-btn" @click="openResume">查看完整简历应用</button>
                    </div>
                </div>
            </div>

            <div class="menu-footer">
                <div class="footer-user">
                    <span class="dot active"></span>
                    系统状态：运行中
                </div>
                <div class="power-btn">🔒 锁定系统</div>
            </div>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
    .start-menu {
        position: absolute;
        bottom: 60px; // 任务栏高度 48px + 12px 间距
        left: 50%;
        transform: translateX(-50%);
        width: 600px;
        height: 500px;
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(25px) saturate(150%);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.4);
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        z-index: var(--z-index-taskbar);
    }

    // 动画
    .start-menu-anim-enter-active,
    .start-menu-anim-leave-active {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .start-menu-anim-enter-from,
    .start-menu-anim-leave-to {
        opacity: 0;
        transform: translate(-50%, 30px) scale(0.95);
    }

    .search-bar {
        padding: 30px 40px 10px;

        input {
            width: 100%;
            padding: 8px 15px;
            border-radius: 20px;
            border: 1px solid #ddd;
            background: #fff;
            outline: none;
            font-size: 13px;
            border-bottom: 2px solid var(--win-theme-primary);
        }
    }

    .menu-content {
        flex: 1;
        display: flex;
        padding: 20px 40px;
        gap: 30px;
    }

    .resume-section {
        flex: 1.2;

        .user-info {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 25px;

            .avatar img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: #eee;
            }

            h3 {
                font-size: 18px;
                color: #333;
            }

            p {
                font-size: 12px;
                color: #666;
            }
        }

        .resume-stats {
            display: flex;
            gap: 20px;
            margin-bottom: 25px;

            .stat-item {
                .label {
                    display: block;
                    font-size: 11px;
                    color: #999;
                }

                .value {
                    font-weight: bold;
                    font-size: 14px;
                    color: #444;
                }
            }
        }
    }

    .skills-section {
        flex: 1;
        border-left: 1px solid rgba(0, 0, 0, 0.05);
        padding-left: 30px;

        h4 {
            font-size: 14px;
            margin-bottom: 15px;
            color: #333;
        }

        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .skill-tag {
            padding: 4px 10px;
            background: rgba(0, 120, 212, 0.1);
            color: var(--win-theme-primary);
            font-size: 11px;
            border-radius: 4px;
        }

        .resume-button-box {
            margin-top: 30px;

            .download-btn {
                width: 100%;
                padding: 10px;
                background: var(--win-theme-primary);
                color: #fff;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 12px;

                &:hover {
                    opacity: 0.9;
                }
            }
        }
    }

    .menu-footer {
        height: 60px;
        background: rgba(0, 0, 0, 0.03);
        border-top: 1px solid rgba(0, 0, 0, 0.05);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 40px;
        font-size: 12px;
        color: #666;

        .dot {
            display: inline-block;
            width: 8px;
            height: 8px;
            background: #52c41a;
            border-radius: 50%;
            margin-right: 5px;
        }
    }
</style>