<template>
  <div class="backTop" ref="backTop" @click="handlebackTop" v-show="visibility">
    <slot>
      <font-awesome-icon icon="fa-solid fa-caret-up" />
    </slot>
  </div>
</template>

<script>
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'NBackTop'
})
</script>
<!-- 回到顶部  -->
<script setup name="NBackTop">
import { ref, onMounted, onBeforeUnmount, getCurrentInstance } from "vue";
const { proxy, ctx } = getCurrentInstance();
const emit = defineEmits(['backTop']);

const props = defineProps({
  target: {
    type: String,
    default: 'document.documentElement'
  },
  visibilityHeight: {
    type: String,
    default: '200px'
  },
  right: {
    type: String,
    default: '40px'
  },
  bottom: {
    type: String,
    default: '40px'
  }
})

const backTop = ref();
const visibility = ref(false);

onMounted(() => {
  backTop.value.style.bottom = props.bottom;
  backTop.value.style.right = props.right;
  document.documentElement.style.scrollBehavior = 'smooth';
  window.addEventListener('scroll', handleBackTopVisibility, true);
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleBackTopVisibility, true)
})

const handleBackTopVisibility = () =>{
  visibility.value = document.documentElement.scrollTop > props.visibilityHeight.split('px')[0] ? true : false;
}

const handlebackTop = () => {
  document.documentElement.scrollTop = 0;
  ctx.$emit('backTop');
}
</script>

<style lang="less" scoped>
@width: 40px;
.backTop {
  width: @width;
  height: @width;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: #ffffff;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  cursor: pointer;
  &:hover {
    background-color: #f2f6fc;
  }
  &:active {
    box-shadow: 0 1px 3px 0 rgba(32, 33, 36, 0.28);
  }
}
</style>