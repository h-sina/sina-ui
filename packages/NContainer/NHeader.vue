<template>
  <div>
    <slot>Header</slot>
  </div>
</template>

<script>
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'NHeader'
})
</script>

<script setup name="NHeader">

</script>

<style lang="less" scoped>
div {
  padding: 0 20px;
}
</style>