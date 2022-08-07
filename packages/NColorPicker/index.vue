<template>
  <input type="color" name="bgColor"/>
</template>

<script>
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'NColorPicker'
})
</script>

<script setup name="NColorPicker">
</script>
<style lang="less" scoped>
input {
  width: 50px;
  height: 50px;
  border: 1px solid #bfbcbc;
  border-radius: 6px;
}
</style>