<template>
  <div>
    <header>
      <slot name="title"></slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'NMenuGroup'
})
</script>

<script setup name="NMenuGroup">

</script>

<style scoped>
div {
  font-weight: 300;
}
header {
  text-align: center;
}
</style>