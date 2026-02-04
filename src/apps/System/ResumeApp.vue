<script>
    export const config = {
        id: 'resume-app',
        index: 1,
        title: '个人履历 / 简历',
        icon: '📄',
        category: 'System',
        width: 900,
        height: 650
    }
    export default { config }
</script>

<script setup>
    import { ref } from 'vue';

    const activeSection = ref('experience');

    // 1. 基于你的简历优化的项目 Mock 数据
    const projects = ref([
        {
            name: '南网电网网级运行系统',
            role: '核心开发',
            tech: ['Vite', 'Vue3', 'TypeScript', 'WebSocket', 'Pinia'],
            desc: '负责网级电力监控系统的实时交互模块，实现 SVG 电路拓扑图动态渲染与高频告警推送。',
            highlights: '利用 WebSocket 支撑每秒 100+ 条数据推送，首屏加载由 4s 缩短至 1.2s，Lighthouse 评分达 90。' // [cite: 58, 62, 64]
        },
        {
            name: '南方电网云景数字化运营平台',
            role: '核心开发',
            tech: ['Vue2', 'ECharts', '南网智勘', 'GIS'],
            desc: '参与 BI 低代码平台开发，独立负责超高压场景下的五级地图穿透与 15+ 业务组件封装。',
            highlights: '通过瓦片地图预加载解决 10 万+点位卡顿，地图穿透响应时间压测至 0.5s 以内。' // [cite: 20, 24, 26, 28]
        },
        {
            name: 'i国网-人员安全管理系统',
            role: '独立开发',
            tech: ['Vue2', 'Vant', 'GIS地图', '媒体查询'],
            desc: '负责移动端全流程开发，实现施工现场人员位置监控、脱岗红名预警及报表导出。',
            highlights: '采用可视区域数据过滤优化 500+ 人员散点性能，使脱岗率较上线前下降了 35%。' // [cite: 41, 44, 48, 49, 54]
        }
    ]);

    // 2. 职业经历 Mock 数据
    const experience = ref([
        {
            time: '2022.09 - 2025.06',
            company: '华大天元(北京)科技股份有限公司',
            role: '前端开发工程师',
            content: '负责南方电网云景平台及国网基建管理系统的研发与迭代，推动内部组件库标准化建设。' // [cite: 13, 16, 17]
        }
    ]);

    // 3. 个人联系方式 Mock 数据
    const contactInfo = {
        name: '周振君', // [cite: 1]
        phone: '17633855242', // [cite: 2]
        email: '2935706852@qq.com', // [cite: 5]
        location: '河南 · 郑州', // [cite: 69]
        wechat: 'ZhenJun_Wechat'
    };
</script>

<template>
    <div class="resume-container">
        <aside class="resume-sidebar">
            <div class="nav-item" :class="{ active: activeSection === 'experience' }"
                @click="activeSection = 'experience'">职业经历</div>
            <div class="nav-item" :class="{ active: activeSection === 'projects' }" @click="activeSection = 'projects'">
                项目深挖</div>
            <div class="nav-item" :class="{ active: activeSection === 'contact' }" @click="activeSection = 'contact'">
                联系我</div>
        </aside>

        <main class="resume-main">
            <section v-if="activeSection === 'experience'" class="section fade-in">
                <h2 class="section-title">职业时间轴</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="time">2022 - 至今</div>
                        <div class="content">
                            <h4>某某科技有限公司 | 前端开发工程师</h4>
                            <p>负责公司核心管理系统与大屏业务的架构与开发，推动 Vue2 向 Vue3 的平滑迁移。</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="time">2020 - 2022</div>
                        <div class="content">
                            <h4>某某初创团队 | 前端开发</h4>
                            <p>从 0 到 1 搭建微信小程序，独立负责多个管理后台的开发与上线。</p>
                        </div>
                    </div>
                </div>
            </section>

            <section v-if="activeSection === 'projects'" class="section fade-in">
                <h2 class="section-title">核心项目拆解</h2>
                <div class="project-grid">
                    <div v-for="p in projects" :key="p.name" class="project-card">
                        <div class="card-header">
                            <h3>{{ p.name }}</h3>
                            <div class="tags">
                                <span v-for="t in p.tech" :key="t">{{ t }}</span>
                            </div>
                        </div>
                        <p class="desc">{{ p.desc }}</p>
                        <div class="highlight-box">
                            <strong>💡 难点攻克：</strong>{{ p.highlights }}
                        </div>
                    </div>
                </div>
            </section>

            <section v-if="activeSection === 'contact'" class="section fade-in contact-page">
                <div class="contact-card">
                    <h2>Let's Talk!</h2>
                    <p>📧 Email: yourname@example.com</p>
                    <p>📱 WeChat: your_wechat_id</p>
                    <p>📍 Location: 湖北 · 武汉</p>
                    <div class="qr-placeholder">微信二维码占位</div>
                </div>
            </section>
        </main>
    </div>
</template>

<style lang="scss" scoped>
    .resume-container {
        display: flex;
        height: 100%;
        background: #fdfdfd;
    }

    .resume-sidebar {
        width: 200px;
        background: #f3f3f3;
        border-right: 1px solid #e0e0e0;
        padding: 20px 0;

        .nav-item {
            padding: 12px 25px;
            cursor: pointer;
            font-size: 14px;
            color: #555;
            transition: all 0.2s;

            &:hover {
                background: rgba(0, 0, 0, 0.05);
            }

            &.active {
                color: var(--win-theme-primary);
                background: #fff;
                font-weight: bold;
                border-left: 4px solid var(--win-theme-primary);
            }
        }
    }

    .resume-main {
        flex: 1;
        padding: 30px;
        overflow-y: auto;
    }

    .section-title {
        font-size: 22px;
        margin-bottom: 25px;
        color: #333;
        border-bottom: 2px solid #eee;
        padding-bottom: 10px;
    }

    /* 时间轴样式 */
    .timeline {
        border-left: 2px solid #eee;
        margin-left: 10px;

        .timeline-item {
            position: relative;
            padding-left: 30px;
            margin-bottom: 30px;

            &::before {
                content: '';
                position: absolute;
                left: -7px;
                top: 5px;
                width: 12px;
                height: 12px;
                background: var(--win-theme-primary);
                border-radius: 50%;
            }

            .time {
                font-size: 12px;
                color: #999;
                margin-bottom: 5px;
            }

            h4 {
                margin-bottom: 8px;
                color: #444;
            }

            p {
                font-size: 13px;
                color: #666;
                line-height: 1.6;
            }
        }
    }

    /* 项目卡片样式 */
    .project-card {
        background: #fff;
        border: 1px solid #eee;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 20px;
        transition: transform 0.2s;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 15px;

            h3 {
                font-size: 18px;
                color: var(--win-theme-primary);
            }

            .tags span {
                font-size: 10px;
                background: #f0f0f0;
                padding: 2px 8px;
                border-radius: 4px;
                margin-left: 5px;
                color: #777;
            }
        }

        .desc {
            font-size: 13px;
            color: #666;
            margin-bottom: 15px;
        }

        .highlight-box {
            font-size: 13px;
            background: #fffbe6;
            border: 1px solid #ffe58f;
            padding: 10px;
            border-radius: 4px;
            color: #856404;
        }
    }

    .fade-in {
        animation: fadeIn 0.4s ease-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>