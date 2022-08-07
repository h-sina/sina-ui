<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'NContainer'
})
</script>

<script setup name="NContainer">

</script>

<style lang="less" scoped>
@width: 820px;
@height: 60px;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
div {
  // min-width: @width;
  // height: @height;
  // padding: 0 20px;
  overflow: hidden;
}
</style>