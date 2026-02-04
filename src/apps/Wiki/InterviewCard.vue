<script setup>
    import { ref, watch } from 'vue';

    const props = defineProps({
        data: {
            type: Object,
            required: true
        }
    });

    const emit = defineEmits(['next']);

    // 状态控制：是否显示关键词，是否显示完整答案
    const showKeywords = ref(false);
    const showFullAnswer = ref(false);

    // 当题目切换时，重置所有状态
    watch(() => props.data.id, () => {
        showKeywords.value = false;
        showFullAnswer.value = false;
    });

    const handleReveal = () => {
        if (!showKeywords.value) {
            showKeywords.value = true;
        } else {
            showFullAnswer.value = true;
        }
    };
</script>

<template>
    <div class="interview-card">
        <div class="category-tag">{{ data.category }}</div>

        <h2 class="question-text">{{ data.question }}</h2>

        <div class="answer-section">
            <div v-if="!showKeywords" class="placeholder">
                <p>💡 请先在脑中构思或口头陈述你的答案...</p>
                <button class="action-btn primary" @click="handleReveal">显示关键词提纲</button>
            </div>

            <div v-if="showKeywords" class="keywords-box">
                <p class="label">🎯 口语核心词汇（请尝试串联这些词）：</p>
                <div class="tags">
                    <span v-for="key in data.keywords" :key="key" class="keyword-tag">{{ key }}</span>
                </div>

                <div v-if="showFullAnswer" class="full-answer fade-in">
                    <p class="label">📖 标准参考口径：</p>
                    <p class="answer-text">{{ data.answer }}</p>
                </div>

                <button v-if="!showFullAnswer" class="action-btn secondary" @click="handleReveal">对齐最终答案</button>
            </div>
        </div>

        <div class="footer-actions">
            <button class="next-btn" @click="$emit('next')">下一题 →</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .interview-card {
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 30px;
        background: #fff;
        position: relative;

        .category-tag {
            align-self: flex-start;
            padding: 4px 12px;
            background: #e1f5fe;
            color: #0288d1;
            border-radius: 12px;
            font-size: 12px;
            margin-bottom: 20px;
        }

        .question-text {
            font-size: 24px;
            color: #1a1a1a;
            line-height: 1.4;
            margin-bottom: 40px;
            font-weight: 600;
        }

        .answer-section {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-top: 1px solid #eee;
            padding-top: 20px;
        }

        .placeholder {
            text-align: center;
            color: #666;

            p {
                margin-bottom: 20px;
            }
        }

        .keywords-box {
            width: 100%;

            .label {
                font-size: 13px;
                color: #999;
                margin-bottom: 12px;
            }

            .tags {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-bottom: 30px;
            }

            .keyword-tag {
                background: #f0f2f5;
                padding: 6px 14px;
                border-radius: 4px;
                color: #333;
                font-weight: 500;
                border: 1px solid #dcdfe6;
            }
        }

        .full-answer {
            margin-top: 20px;
            padding: 15px;
            background: #f6ffed;
            border: 1px solid #b7eb8f;
            border-radius: 4px;

            .answer-text {
                color: #389e0d;
                line-height: 1.6;
                font-size: 15px;
            }
        }

        .action-btn {
            padding: 10px 24px;
            border-radius: 4px;
            border: none;
            cursor: pointer;
            font-weight: bold;

            &.primary {
                background: var(--win-theme-primary);
                color: #fff;
            }

            &.secondary {
                background: #fff;
                border: 1px solid #ddd;
                color: #666;
                margin-top: 10px;
            }
        }

        .footer-actions {
            margin-top: 30px;
            display: flex;
            justify-content: flex-end;

            .next-btn {
                background: none;
                border: none;
                color: var(--win-theme-primary);
                cursor: pointer;
                font-size: 16px;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    .fade-in {
        animation: fadeIn 0.4s ease-in;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>