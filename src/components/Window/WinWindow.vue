<script setup>
    import { useWindowManager } from '../../stores/windowManager';

    const props = defineProps({
        app: Object
    });

    const store = useWindowManager();
</script>

<template>
    <div :id="'win-' + app.id" class="win-window"
        :style="{ zIndex: app.zIndex, width: app.width + 'px', height: app.height + 'px' }"
        @mousedown="store.activeAppId = app.id">
        <div class="resize-handle n" v-resize="{ targetSelector: '#win-' + app.id, direction: 'n' }"></div>
        <div class="resize-handle s" v-resize="{ targetSelector: '#win-' + app.id, direction: 's' }"></div>
        <div class="resize-handle w" v-resize="{ targetSelector: '#win-' + app.id, direction: 'w' }"></div>
        <div class="resize-handle e" v-resize="{ targetSelector: '#win-' + app.id, direction: 'e' }"></div>
        <div class="resize-handle nw" v-resize="{ targetSelector: '#win-' + app.id, direction: 'nw' }"></div>
        <div class="resize-handle ne" v-resize="{ targetSelector: '#win-' + app.id, direction: 'ne' }"></div>
        <div class="resize-handle sw" v-resize="{ targetSelector: '#win-' + app.id, direction: 'sw' }"></div>
        <div class="resize-handle se" v-resize="{ targetSelector: '#win-' + app.id, direction: 'se' }"></div>
        <div class="window-header" v-drag="'#win-' + app.id">
            <div class="header-info">
                <span class="icon">{{ app.icon }}</span>
                <span class="title">{{ app.title }}</span>
            </div>
            <div class="header-controls">
                <button class="ctrl-btn min" @click="store.minimizeApp(app.id)">–</button>
                <button class="ctrl-btn close" @click="store.closeApp(app.id)">×</button>
            </div>
        </div>

        <div class="window-body">
            <component :is="app.component" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .win-window {
        position: absolute;
        width: var(--win-default-width);
        /* 初始宽度，后续由 config 或 v-resize 决定 */
        height: var(--win-default-height);
        background: #fff;
        border-radius: var(--win-border-radius);
        box-shadow: var(--win-shadow);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid rgba(0, 0, 0, 0.1);
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .resize-handle {
        position: absolute;
        z-index: 10;

        // 四条边
        &.n {
            top: -2px;
            left: 0;
            right: 0;
            height: 4px;
            cursor: n-resize;
        }

        &.s {
            bottom: -2px;
            left: 0;
            right: 0;
            height: 4px;
            cursor: s-resize;
        }

        &.w {
            left: -2px;
            top: 0;
            bottom: 0;
            width: 4px;
            cursor: w-resize;
        }

        &.e {
            right: -2px;
            top: 0;
            bottom: 0;
            width: 4px;
            cursor: e-resize;
        }

        // 四个角
        &.nw {
            top: -4px;
            left: -4px;
            width: 8px;
            height: 8px;
            cursor: nw-resize;
            z-index: 11;
        }

        &.ne {
            top: -4px;
            right: -4px;
            width: 8px;
            height: 8px;
            cursor: ne-resize;
            z-index: 11;
        }

        &.sw {
            bottom: -4px;
            left: -4px;
            width: 8px;
            height: 8px;
            cursor: sw-resize;
            z-index: 11;
        }

        &.se {
            bottom: -4px;
            right: -4px;
            width: 8px;
            height: 8px;
            cursor: se-resize;
            z-index: 11;
        }
    }

    .window-header {
        height: 36px;
        background: #f3f3f3;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        cursor: default; // 默认箭头，悬停在标题栏才拖拽

        .header-info {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 12px;
        }
    }

    .header-controls {
        display: flex;

        .ctrl-btn {
            width: 45px;
            height: 36px;
            border: none;
            background: transparent;
            font-size: 16px;

            &:hover {
                background: rgba(0, 0, 0, 0.1);
            }

            &.close:hover {
                background: #e81123;
                color: #fff;
            }
        }
    }

    .window-body {
        flex: 1;
        overflow: auto;
        background: #fff;
    }
</style>