<script>
    // 1. 系统配置协议
    export const config = {
        id: 'deep-clone-lab',
        index: 4,
        title: '深拷贝可视化',
        icon: '🧬',
        category: 'JS_Lab',
        width: 700,
        height: 500
    }
    export default { config }
</script>

<script setup>
    import LabContainer from '../../components/Window/LabContainer.vue';
    import { reactive, ref } from 'vue';

    // --- 核心 JS 逻辑区域 ---
    const sourceObj = {
        name: 'Gemini',
        info: { age: 1, city: 'Wuhan' },
        hobbies: ['Coding', 'Thinking']
    };

    const resultObj = ref(null);
    const runTime = ref(0);

    // 手写深拷贝简易版（用于演示）
    function deepClone(obj) {
        if (typeof obj !== 'object' || obj === null) return obj;
        const result = Array.isArray(obj) ? [] : {};
        for (let key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                result[key] = deepClone(obj[key]);
            }
        }
        return result;
    }

    const handleClone = () => {
        const start = performance.now();
        resultObj.value = deepClone(sourceObj);
        runTime.value = (performance.now() - start).toFixed(4);
    };

    // 用于展示的代码字符串
    const codeString = `function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;
  const result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    result[key] = deepClone(obj[key]);
  }
  return result;
}`;

    const interviewNotes = `
  <h3>面试必考：深拷贝</h3>
  <ul>
    <li><b>浅拷贝：</b>只拷贝一层，深层引用指向同一内存地址。</li>
    <li><b>深拷贝：</b>递归拷贝所有层级，完全隔离。</li>
    <li><b>常见坑点：</b>循环引用（需使用 WeakMap）、Date/RegExp 对象丢失、函数丢失。</li>
  </ul>
`;
</script>

<template>
    <LabContainer :title="config.title" :code="codeString" :notes="interviewNotes">
        <template #demo>
            <div class="demo-box">
                <div class="obj-view">
                    <h4>原始对象 (Source)</h4>
                    <pre>{{ JSON.stringify(sourceObj, null, 2) }}</pre>
                </div>
                <div class="actions">
                    <button @click="handleClone" class="run-btn">开始深拷贝 ▶</button>
                    <p v-if="runTime > 0">执行耗时: {{ runTime }}ms</p>
                </div>
                <div class="obj-view">
                    <h4>拷贝结果 (Result)</h4>
                    <pre v-if="resultObj">{{ JSON.stringify(resultObj, null, 2) }}</pre>
                    <p v-else style="color: #999">等待执行...</p>
                </div>
            </div>
        </template>
    </LabContainer>
</template>

<style scoped>
    .demo-box {
        display: flex;
        gap: 20px;
        align-items: flex-start;
    }

    .obj-view {
        flex: 1;
        background: #f9f9f9;
        padding: 10px;
        border: 1px dashed #ccc;

        pre {
            font-size: 12px;
        }
    }

    .run-btn {
        background: var(--win-theme-primary);
        color: #fff;
        border: none;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
        white-space: nowrap;
    }
</style>