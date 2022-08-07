<template>
  <div>
    <slot>Footer</slot>
  </div>
</template>

<script>
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'NFooter'
})
</script>

<script setup name="NFooter">

</script>

<style lang="less" scoped>
div {
  padding: 0 20px;
}
</style>
