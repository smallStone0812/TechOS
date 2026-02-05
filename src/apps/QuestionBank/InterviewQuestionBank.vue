<script>
    // 1. 系统配置协议
    export const config = {
        id: 'interview-question-bank',
        index: 2,
        title: '面试题库',
        icon: '📝',
        category: 'QuestionBank',
        width: 1400,
        height: 900
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
                    content: `javaScript 有八种基本数据类型，分为原始类型和引用类型。
                    原始类型包括：Number、String、Boolean、null、undefined、Symbol、BigInt。
                    引用类型包括：Object（数组、函数、普通对象等）      
                    区别：
                    1.原始类型存储在栈内存中，引用类型存储在堆内存中。       
                    `
                },
                {
                    title: '如何判断 JavaScript 变量是数组？',
                    content: '1、ES6中的Array.isArray()方法；2、使用'
                },

            ]
        },
        { label: 'Vue3', items: [] }
    ]);
</script>
<template>
    <WikiContainer :categories="categories">
        <template #default="{ data }">
            {{ data.content }}
        </template>
    </WikiContainer>
</template>
<style lang="scss" scoped></style>