// src/directives/drag.js

export default {
  mounted(el, binding) {
    // 约定：指令通常挂载在标题栏，但移动的是整个窗口容器
    // binding.value 传入的是需要移动的那个 DOM 的选择器
    const target = binding.value ? document.querySelector(binding.value) : el

    el.onmousedown = (e) => {
      // 如果点击的不是标题栏本身（比如点了标题栏里的关闭按钮），不触发拖拽
      if (e.target !== el && !el.contains(e.target)) return

      // 记录按下时鼠标相对于窗口左上角的偏移
      const disX = e.clientX - target.offsetLeft
      const disY = e.clientY - target.offsetTop

      // 只有在按下后，才监听全局的 mousemove，防止鼠标滑出窗口后失效
      document.onmousemove = (moveEvent) => {
        // 使用 requestAnimationFrame 保证 60fps 的流畅度
        window.requestAnimationFrame(() => {
          let left = moveEvent.clientX - disX
          let top = moveEvent.clientY - disY

          // 简单的边界处理：防止窗口完全拖出屏幕上方
          if (top < 0) top = 0

          target.style.left = left + 'px'
          target.style.top = top + 'px'
        })
      }

      // 鼠标抬起，清除监听
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }

      // 阻止默认行为（如文本选中）
      e.preventDefault()
    }
  },
}
