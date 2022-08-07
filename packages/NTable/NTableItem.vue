<template>
  <td>
    <slot></slot>
  </td>
</template>

<script>
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'NTableItem'
})
</script>


<script setup name="NTableItem">
</script>
<style lang="less" scoped>
td {
  border-bottom: 1px solid #ebeef5;
  color: #909399;
  font-size: 14px;
  font-weight: 700;
}
</style>