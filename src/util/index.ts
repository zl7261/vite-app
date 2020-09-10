import { customRef } from 'vue'

export const useDebouncedRef = (value, delay = 200) => {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}

import { ref, onMounted, onUnmounted } from 'vue'
export  function useScroll() {
  const top = ref(0)

  function update(e) {
    top.value = window.scrollY
  }

  onMounted(() => {
    window.addEventListener('scroll', update)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', update)
  })

  return { top }
}

export  function useMousePosition() {
  const x = ref(10)
  const y = ref(10)

  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return { x, y }
}