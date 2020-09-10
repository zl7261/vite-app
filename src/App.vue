<template>
  <input v-model="text"/>{{ text }}
  <ul>
    <Fragment :data="[5,3,1,6,9,4,2,8]"/>
  </ul>
  <todo/>
</template>

<script>
import Fragment from './Fragment.vue'
import { useDebouncedRef } from './util'
import Todo from './Todo.vue'

export default {
  components: {Fragment,Todo},
  setup() {
    return {
      text: useDebouncedRef('hello')
    }
  }
}
</script>
