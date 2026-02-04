// src/directives/resize.js
export default {
  mounted(el, binding) {
    // binding.value 包含：target(要缩放的窗口选择器), direction(方向：n, s, w, e, nw, ne, sw, se)
    const { targetSelector, direction } = binding.value
    const target = document.querySelector(targetSelector)

    el.onmousedown = (e) => {
      e.stopPropagation() // 防止触发标题栏的拖拽

      const startX = e.clientX
      const startY = e.clientY
      const startWidth = target.offsetWidth
      const startHeight = target.offsetHeight
      const startLeft = target.offsetLeft
      const startTop = target.offsetTop

      document.onmousemove = (moveEvent) => {
        window.requestAnimationFrame(() => {
          const deltaX = moveEvent.clientX - startX
          const deltaY = moveEvent.clientY - startY

          // 核心矩阵逻辑
          if (direction.includes('e')) {
            target.style.width = Math.max(200, startWidth + deltaX) + 'px'
          }
          if (direction.includes('s')) {
            target.style.height = Math.max(150, startHeight + deltaY) + 'px'
          }
          if (direction.includes('w')) {
            const newWidth = Math.max(200, startWidth - deltaX)
            if (newWidth > 200) {
              target.style.width = newWidth + 'px'
              target.style.left = startLeft + deltaX + 'px'
            }
          }
          if (direction.includes('n')) {
            const newHeight = Math.max(150, startHeight - deltaY)
            if (newHeight > 150) {
              target.style.height = newHeight + 'px'
              target.style.top = startTop + deltaY + 'px'
            }
          }
        })
      }

      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  },
}
