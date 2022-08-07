<template>
  <div>
    <slot>Main</slot>
  </div>
</template>

<script>
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'NMain'
})
</script>

<script setup name="NMain">

</script>

<style lang="less" scoped>
div {
  width: 80%;
  display: flex;
  flex-direction: column;
}
</style>