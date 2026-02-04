<script>
    // 导出配置，供系统引擎读取
    export const config = {
        id: 'promise-lab',      // 唯一ID
        index: 3,
        title: '手写 Promise',   // 桌面显示的名称
        icon: '🧪',             // 图标（可以用 Emoji 或图片路径）
        category: 'JS_Lab',     // 分类
        width: 600,             // 初始宽度
        height: 400             // 初始高度
    }

    export default {
        name: 'PromiseLab',
        config // 必须导出这个 config
    }
</script>

<script setup>
    // 你的练习代码写在这里
    const testPromise = () => {
        console.log('测试 Promise 逻辑...')
    }
</script>

<template>
    <div class="app-content">
        <h3>Promise 实验室</h3>
        <button @click="testPromise">运行测试</button>
    </div>
</template>

<style scoped>
    .app-content {
        padding: 20px;
        color: #333;
    }
</style>