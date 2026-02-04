<script setup>
    import { onMounted } from 'vue'
    import { useWindowManager } from '../stores/windowManager'
    import AppIcon from '../components/Desktop/AppIcon.vue'
    import Taskbar from '../components/Taskbar/Index.vue'
    import StartMenu from '../components/Taskbar/StartMenu.vue'
    // 这里未来会引入我们的系统级组件
    // import DesktopIcons from '../components/Desktop/Icons.vue'

    // import WindowLayer from '../components/Window/WindowLayer.vue'
    import WinWindow from '../components/Window/WinWindow.vue'

    const store = useWindowManager()

    onMounted(() => {
        // 启动自动化 App 扫描引擎
        store.loadApps()
    })
    const handleOpenApp = (app) => {
        store.openApp(app)
        console.log('正在打开应用:', app.title)
    }
</script>
<template>
    <div class="windows-11-container">
        <main class="desktop" @mousedown.self="store.activeAppId = null" @click="store.closeStartMenu()">
            <div class="icon-grid">
                <AppIcon v-for="app in store.allApps" :key="app.id" :app="app" @open="handleOpenApp" />
            </div>

            <div class="window-layer">
                <WinWindow v-for="app in store.openedApps" :key="app.id" :app="app" />
            </div>
        </main>
        <StartMenu />
        <Taskbar />
    </div>
</template>

<style lang="scss" scoped>
    .windows-11-container {
        width: 100vw;
        height: 100vh;
        // 使用一个更具 Win11 质感的渐变或高清图
        background: url('@/assets/Wallpaper/img14.jpg') no-repeat center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        position: relative;
    }

    .desktop {
        flex: 1;
        position: relative;
        padding: 10px;

        .icon-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, 100px);
            grid-template-rows: repeat(auto-fill, 110px);
            grid-auto-flow: column;
            height: 100%;
            // 确保图标层在窗口层之下
            z-index: var(--z-index-desktop);
        }

        .window-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            /* 初始无内容时不遮挡桌面点击 */
            z-index: var(--z-index-window-base);

            // 内部的窗口需要恢复点击
            :deep(.win-window) {
                pointer-events: auto;
            }
        }
    }
</style>