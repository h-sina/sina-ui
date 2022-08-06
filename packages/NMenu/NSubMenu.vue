<template>
  <div>
    <li @click="changeShow">
      <slot name="title"></slot>
      <font-awesome-icon icon="fa-solid fa-angle-down" class="more" v-show="visibility" />
      <font-awesome-icon icon="fa-solid fa-angle-up" class="more" v-show="!visibility" />
    </li>
    <transition name="topToTop">
      <div v-show="visibility">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script setup name="NSubMenu">
import { ref } from 'vue';
const props = defineProps({
  index: {
    type: Number
  },
})
const visibility = ref(true);
const changeShow = () => {
  visibility.value = !visibility.value;
}

</script>

<style lang="less" scoped>
/*设置动画*/
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
  background-color: @hoverBgColor;
  transition: background-color 0.5s;
  cursor: pointer;
}

.more {
  position: absolute;
  right: 20px;
}
</style>

