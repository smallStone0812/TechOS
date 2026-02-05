import { defineStore } from 'pinia'
import { markRaw } from 'vue'

export const useWindowManager = defineStore('windowManager', {
  state: () => ({
    // 所有从文件夹扫描到的 App 元数据
    allApps: [],
    // 当前打开的窗口
    openedApps: [],
    activeAppId: null,
    isStartMenuOpen: false,
  }),

  actions: {
    /**
     * ✨ 自动化核心：扫描 src/apps 文件夹
     */
    async loadApps() {
      // 1. 扫描所有 .vue 文件
      // eager: true 表示立即引入，这样我们可以读取里面的 config
      const modules = import.meta.glob('../apps/**/*.vue', { eager: true })

      const apps = []
      for (const path in modules) {
        const component = modules[path].default
        // 2. 约定：每个 App 必须导出 config 对象
        if (component.config) {
          apps.push({
            ...component.config,
            // 使用 markRaw 避免 Vue 对组件定义进行响应式代理（性能优化）
            component: markRaw(component),
          })
        }
      }
      // 3. 根据 index 排序
      this.allApps = apps.sort((a, b) => a.index - b.index)
    },
    /**
     * 打开应用窗口
     * @param {*} app
     */
    openApp(app) {
      if (!this.openedApps.find((a) => a.id === app.id)) {
        this.openedApps.push({ ...app, isMinimized: false, zIndex: 100 })
      }
      this.activeAppId = app.id
    },
    /**
     * 关闭应用窗口
     * @param {*} appId
     */
    closeApp(appId) {
      this.openedApps = this.openedApps.filter((a) => a.id !== appId)
    },

    /**
     * 获取当前最大的 z-index
     * @returns
     */
    getMaxZIndex() {
      return this.openedApps.reduce((max, app) => Math.max(max, app.zIndex), 0)
    },
    // ... 其他 close, minimize 逻辑保持不变

    toggleStartMenu() {
      this.isStartMenuOpen = !this.isStartMenuOpen
    },
    closeStartMenu() {
      this.isStartMenuOpen = false
    },
  },
})
