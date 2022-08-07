<template>
  <div>
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'NCollapse'
})
</script>
<!-- 折叠面板 带手风琴样式  -->
<script setup name="NCollapse">
import { current } from './eventBus';
import { eventEmitter, user } from './eventBus';
eventEmitter.on('article', user);
const props = defineProps({
  accordion: {
    type: Boolean,
    default: false
  }
})
if (props.accordion) {
  current.index = 0;
  current.ifAccordion = props.accordion;
}
current.index = 0;
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
@width: 820px;
@height: 200px;
ul {
  width: @width;
  min-height: @height;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  list-style: none;
  border-radius: 10px;
  padding: 24px;
  font-size: 13px;
  margin: 5px;
}
</style>