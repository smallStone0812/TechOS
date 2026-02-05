<!--   专门用于：代码演示、运行实验 -->
<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        title: String,
        code: String,    // 核心代码字符串
        notes: String    // 避坑指南/面试考点
    });

    const activeTab = ref('demo'); // 默认显示演示区
</script>

<template>
    <div class="lab-runner">
        <nav class="lab-tabs">
            <button :class="{ active: activeTab === 'demo' }" @click="activeTab = 'demo'">运行演示</button>
            <button :class="{ active: activeTab === 'code' }" @click="activeTab = 'code'">核心源码</button>
            <button :class="{ active: activeTab === 'notes' }" @click="activeTab = 'notes'">面试笔记</button>
        </nav>

        <div class="lab-content">
            <div v-if="activeTab === 'demo'" class="tab-pane demo-pane">
                <slot name="demo"></slot>
            </div>
            <div v-if="activeTab === 'code'" class="tab-pane code-pane">
                <pre><code>{{ code }}</code></pre>
            </div>
            <div v-if="activeTab === 'notes'" class="tab-pane notes-pane">
                <article v-html="notes"></article>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .lab-runner {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: #fff;
    }

    .lab-tabs {
        display: flex;
        background: #f0f0f0;
        border-bottom: 1px solid #ddd;

        button {
            padding: 8px 20px;
            border: none;
            background: transparent;
            cursor: pointer;
            font-size: 13px;

            &.active {
                background: #fff;
                border-bottom: 2px solid var(--win-theme-primary);
                font-weight: bold;
            }
        }
    }

    .lab-content {
        flex: 1;
        overflow: auto;
        padding: 15px;
    }

    .code-pane {
        background: #282c34;
        color: #abb2bf;
        padding: 15px;
        border-radius: 4px;
        font-family: 'Fira Code', monospace;
    }
</style>