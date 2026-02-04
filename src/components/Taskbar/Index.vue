<script setup>
    import { useWindowManager } from '../../stores/windowManager'

    const store = useWindowManager()
</script>

<template>
    <footer class="taskbar">
        <div class="taskbar-container">
            <div class="task-item start-btn" @click.stop="store.toggleStartMenu()">
                <img src="../../assets/icons/windows.svg" alt="start" v-if="false" />
                <span v-else>🪟</span>
            </div>

            <div class="running-apps">
                <div v-for="app in store.openedApps" :key="app.id" class="task-item app-item"
                    :class="{ active: store.activeAppId === app.id }" @click="store.openApp(app)">
                    <span class="app-icon">{{ app.icon }}</span>
                    <div class="indicator"></div>
                </div>
            </div>

            <div class="system-tray">
                <div class="tray-item time">
                    {{ new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    .taskbar {
        height: 48px;
        width: 100%;
        background: rgba(255, 255, 255, 0.75);
        backdrop-filter: blur(20px) saturate(180%);
        border-top: 1px solid rgba(255, 255, 255, 0.3);
        display: flex;
        justify-content: center;
        position: relative;
        z-index: var(--z-index-taskbar);
    }

    .taskbar-container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center; // 核心：居中布局
        padding: 0 10px;
    }

    .task-item {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 2px;
        border-radius: 4px;
        transition: all 0.2s;
        position: relative;
        cursor: pointer;

        &:hover {
            background: rgba(255, 255, 255, 0.5);
        }

        &.active {
            background: rgba(255, 255, 255, 0.8);

            .indicator {
                width: 12px;
            }
        }

        .app-icon {
            font-size: 24px;
        }

        .indicator {
            position: absolute;
            bottom: 2px;
            width: 6px;
            height: 3px;
            background: var(--win-theme-primary);
            border-radius: 2px;
            transition: width 0.3s;
        }
    }

    .running-apps {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .system-tray {
        position: absolute;
        right: 10px;
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #333;
    }
</style>