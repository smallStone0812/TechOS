<script setup>
    import { ref } from 'vue'

    const props = defineProps({
        app: {
            type: Object,
            required: true
        }
    })

    const emit = defineEmits(['open'])

    // 处理双击打开
    const handleDblClick = () => {
        emit('open', props.app)
    }
</script>

<template>
    <div class="app-icon" @dblclick="handleDblClick" tabindex="0">
        <div class="icon-wrapper">
            <span class="icon-img">{{ app.icon }}</span>
        </div>
        <span class="app-title">{{ app.title }}</span>
    </div>
</template>

<style lang="scss" scoped>
    .app-icon {
        width: 80px;
        height: 90px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5px;
        margin: 10px;
        border: 1px solid transparent;
        transition: all 0.2s;
        cursor: default;
        outline: none;

        &:hover {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
        }

        &:focus {
            background: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 4px;
        }

        .icon-wrapper {
            font-size: 40px;
            margin-bottom: 5px;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }

        .app-title {
            color: #fff;
            font-size: 12px;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
            text-align: center;
            word-break: break-all;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    }
</style>