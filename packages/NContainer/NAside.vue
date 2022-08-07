<template>
  <div>
    <slot>Aside</slot>
  </div>
</template>

<script>
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'NAside'
})
</script>

<script setup name="NAside">

</script>

<style lang="less" scoped>
div {
  float: left;
  height: 100%;
}
</style>