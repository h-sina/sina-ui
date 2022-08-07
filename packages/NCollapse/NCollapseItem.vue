<template>
  <div>
    <li @click="open">
      <header>
        <div>
          <slot name="title">{{props.title}}</slot>
        </div>
        <font-awesome-icon icon="fa-solid fa-angle-right" class="more" v-show="visibility" />
        <font-awesome-icon icon="fa-solid fa-angle-down" class="more" v-show="!visibility" />
      </header>
      <main v-show="!visibility">
        <slot></slot>
      </main>
    </li>
  </div>
</template>

<script>
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'NCollapseItem'
})
</script>
<script setup name="NCollapseItem">
import { parse } from 'path';
import { ref } from 'vue';
import { current } from './eventBus';
import { eventEmitter } from './eventBus';
/** 指定展开时的操作 */
const user = (content) => {
  if (content.ifAccordion) {  // 1. 是手风琴
    visibility.value = content.index == props.name ? !visibility.value : true;
  } else {  // 2. 不是手风琴
    if (props.name === content.index) {
      visibility.value = !visibility.value;
    }
  }
};
eventEmitter.on('article', user);

const props = defineProps({
  title: {
    type: String
  },
  name: {
    type: Number,
  }
})
/** true表示不展开 */
const visibility = ref(true);

const open = () => {
  current.index = props.name;
}


</script>

<style lang="less" scoped>
@width: 820px;
@height: 48px;
li {
  width: @width;
  min-height: @height;
  border-top: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
  cursor: pointer;
}
header {
  width: @width;
  min-height: @height;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
main {
  padding: 0 0 25px 0;
}
</style>