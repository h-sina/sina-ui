<template>
  <div class="main" ref="globalStyle">
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
  name: 'NMenu'
})
</script>


<!-- 菜单 竖状  -->
<script setup name="NMenu">
import { current } from './eventBus';
import { eventEmitter, user } from './eventBus';
import { ref, onMounted, getCurrentInstance } from 'vue';
const { proxy, ctx } = getCurrentInstance();
const emit = defineEmits(['open', 'close']);

const globalStyle = ref();
const props = defineProps({
  defaultActive: {
    type: Number
  },
  backgroundColor: {
    type: String
  },
  textColor: {
    type: String
  },
  activeTextColor: {
    type: String
  },
  router: {
    type: String
  }
})
onMounted(() => {
  globalStyle.value.style.backgroundColor = props.backgroundColor;
  globalStyle.value.style.textColor = props.textColor;
})
/** 第一次订阅 添加高亮默认值*/
eventEmitter.on('article', user);
current.index = props.defaultActive;
current.router = props.router ?  props.router : false;

</script>
<style lang="less" scoped>
@bgcolor: #ffffff;
@color: #fbfbfb;

* {
  margin: 0;
  padding: 0;
  // color: @color;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 400;
}

.main {
  width: 240px;
  min-height: 400px;
  background-color: @bgcolor;
  transition: background-color 0.5s;
  border-right: 1px solid #e6e6e6;
  margin-right: 5px;
}

ul {
  list-style: none;
  width: 100%;
}

span {
  margin-left: 20px;
}
</style>