<template>
  <li @click="clickMenu" :class="{'active': props.index==currentIndex}">
    <slot></slot>
  </li>
</template>

<script>
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'NMenuItem'
})
</script>

<script setup name="NMenuItem">
import {ref} from 'vue';
import {current} from './eventBus';
import { eventEmitter } from './eventBus';
import { useRouter } from "vue-router";
const router = useRouter();

/** 指定高亮键值变换时的操作 */
const user1 = (content) => {
  currentIndex.value = content;
};
/** 订阅 */
eventEmitter.on('article', user1);
/** 定义vue的数据 因其具有双向绑定 会触发视图更新 借助于此*/
const currentIndex = ref(current.index);
const props = defineProps({
  index: {
    type: Number
  },
})
/** 菜单被点击 修改默认高亮键值 通过事件总线沟通 触发了setter 修改-> 发布出去*/
const clickMenu = () => {
  current.index = props.index;
  if(current.router == "true") router.push(`/${props.index}`)
}
</script>

<style lang="less" scoped>
@hoverBgColor: #ecf5ff;
li {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  padding: 0 20px;
}
li:hover {
  /* background-color: #434a50; */
  background-color: @hoverBgColor;
  transition: background-color 0.5s;
  cursor: pointer;
}
.active {
  color: #ffd04b;
  transition: color 0.5s;
}
span {
  margin-left: 20px;
}
</style>