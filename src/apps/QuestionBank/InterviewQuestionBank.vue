<script>
    // 1. 系统配置协议
    export const config = {
        id: 'interview-question-bank',
        index: 2,
        title: '面试题库',
        icon: '📝',
        category: 'QuestionBank',
        width: 900,
        height: 500
    }
    export default { config }
</script>
<script setup>
    import WikiContainer from '../../components/Window/WikiContainer.vue';
    import { ref } from 'vue'

    const categories = ref([
        {
            label: 'JS 面试题', items: [
                {
                    title: 'JavaScript 有哪些数据类型？它们的区别是什么？',
                    content: `
                    <p>JavaScript 有八种基本数据类型，分为原始类型和引用类型。</p>
                    <p>原始类型包括：Number、String、Boolean、null、undefined、Symbol、BigInt。</p>
                    <p>引用类型包括：Object（数组、函数、普通对象等）</p>
                    <p>区别：</p>
                    <p>1.原始类型存储在栈内存中，引用类型存储在堆内存中。 </p>

                    `
                },
                {
                    title: '如何判断 JavaScript 变量是数组？',
                    content: `
                    <p>1.可以使用 Array.isArray() 方法来判断一个变量是否为数组。</p>
                    <pre><code>Array.isArray(variable); // 返回 true 或 false</code></pre>
                    <p>2.可以Object.prototype.toString.call()</p>
                    <pre><code>// 这是一个通用的类型判断，通常会返回一个[object Array]的字符串，使用slice来判断是否是你想要判断的类型</code></pre>
                    <pre><code>例如：Object.prototype.toString.call([1,2,3]).slice(8,-1) === 'Array' )</code></pre>
                    `
                },
                {
                    title: "JavaScript 中 null 和 undefined 的区别是什么？",
                    content: `
                            <p>undefined 是JavaScript的一种内置数据类型，表示变量声明了但未赋值。null同样是一种内置数据类型，表示一个空对象引用。</p>
                            <p>区别：</p>
                            <pre><code> typeof undefined === 'undefined'</code></pre>
                            <pre><code> typeof null === 'object' //历史遗留问题</code></pre>
                            <p>双等号相等，三等号不相等</p>
                        `
                },
                {
                    title: "typeof null 的结果是什么？为什么？",
                    content: `
                            <pre><code> typeof null === 'object' //历史遗留问题</code></pre>
                    `
                },
                {
                    title: "typeof 和 instanceof 有什么区别？",
                    content: `
                        
                    `
                }

            ]
        },
        { label: 'Vue3', items: [] }
    ]);
</script>
<template>
    <WikiContainer :categories="categories">
        <template #default="{ data }">
            <div class="WikiContainer-content-body" v-html="data.content"></div>
        </template>
    </WikiContainer>
</template>
<style lang="scss" scoped>
    .WikiContainer-content-body {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>