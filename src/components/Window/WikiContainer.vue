<!-- 专门用于：分类查阅、知识库、面试题 -->
<script setup>
    import { ref, computed } from 'vue';

    const props = defineProps({
        // 数据结构：[{ label: 'JS', items: [...] }, { label: 'Vue3', items: [...] }]
        categories: {
            type: Array,
            default: () => [{ label: 'JS', items: [] }, { label: 'Vue3', items: [] }]
        }
    });

    const activeCategoryIndex = ref(0);
    const activeItemIndex = ref(0);

    // 获取当前分类下的题目列表
    const currentItems = computed(() => {
        return props.categories[activeCategoryIndex.value]?.items || [];
    });

    // 获取当前选中的题目详情
    const currentContent = computed(() => {
        return currentItems.value[activeItemIndex.value] || {};
    });
</script>

<template>
    <div class="wiki-container">
        <aside class="wiki-sidebar">
            <div v-for="(cat, index) in categories" :key="cat.label" class="cat-item"
                :class="{ active: activeCategoryIndex === index }"
                @click="activeCategoryIndex = index; activeItemIndex = 0">
                {{ cat.label }}
            </div>
        </aside>

        <section class="wiki-list">
            <div v-for="(item, index) in currentItems" :key="index" class="list-item"
                :class="{ active: activeItemIndex === index }" @click="activeItemIndex = index">
                {{ item.title }}
            </div>
        </section>

        <main class="wiki-detail">
            <div v-if="currentContent.title" class="detail-content">
                <h1>{{ currentContent.title }}</h1>
                <div class="content-body">
                    <slot :data="currentContent"></slot>
                </div>
            </div>
            <div v-else class="empty">请选择一个题目</div>
        </main>
    </div>
</template>

<style lang="scss" scoped>
    .wiki-container {
        display: flex;
        height: 100%;
        background: #fff;

        .wiki-sidebar {
            width: 120px;
            background: #f8f9fa;
            border-right: 1px solid #eee;

            .cat-item {
                padding: 12px;
                cursor: pointer;
                font-size: 13px;

                &.active {
                    background: #e6f7ff;
                    color: var(--win-theme-primary);
                    font-weight: bold;
                }
            }
        }

        .wiki-list {
            width: 200px;
            border-right: 1px solid #eee;
            overflow-y: auto;

            .list-item {
                padding: 10px 15px;
                font-size: 13px;
                cursor: pointer;
                border-bottom: 1px solid #f9f9f9;

                &:hover {
                    background: #fafafa;
                }

                &.active {
                    color: var(--win-theme-primary);
                    background: #f0f7ff;
                }
            }
        }

        .wiki-detail {
            flex: 1;
            padding: 30px;
            overflow-y: auto;
        }
    }
</style>