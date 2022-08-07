<template>
  <button v-bind:disabled="disabled" @click="handleClick" ref="bt">
    <slot></slot>
  </button>
</template>

<script>
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'NButton'
})
</script>

<script setup name="NButton">
import { ref, onMounted, getCurrentInstance } from "vue";
const { proxy, ctx } = getCurrentInstance();
/** 写错了名称会执行两次不知道为什么 */
const emit = defineEmits(['click']);
const props = defineProps({
  shape: {
    type: String,
    default: 'square',
  },
  size: {
    type: [String, Number],
    default: 'medium'
  },
  color: {
    type: String,
  },
  disabled: {
    disabled: String,
    default: false,
  },
})
const bt = ref();
const disabled = ref(props.disabled);
const handleClick = () => {
  ctx.$emit('click');
}

onMounted(() => {
  handleShape();
  handleSize();
  handleColor();
  handleDisabled();
})

const sizeToPX = {
  'small': {
    base: '12px',
    fontSize: '12px',
    padding: '9px 15px'
  },
  'medium': {
    base: '14px',
    fontSize: '14px',
    padding: '10px 20px'
  },
  'large': {
    base: '16px',
    fontSize: '14px',
    padding: '12px 20px'
  },
}

const shapeToPX = {
  'circle': '20px',
  'square': '4px'
}

const handleSize = () => {
  if (props.size) {
    if (typeof props.size == 'number') {
      bt.value.style.width = props.size * 4 + 'px';
      bt.value.style.height = props.size + 'px';
    } else {
      const sizeNumber = sizeToPX[props.size];
      bt.value.style.minWidth = sizeNumber.base * 4;
      bt.value.style.minHeight = sizeNumber.base;
      bt.value.style.fontSize = sizeNumber.fontSize;
      bt.value.style.padding = sizeNumber.padding;
    }
  }
}

const handleShape = () => {
  if (props.shape) {
    const sizeNumber = shapeToPX[props.shape];
    bt.value.style.borderRadius = sizeNumber;
    bt.value.style.borderRadius = sizeNumber;
  }
}

const handleColor = () => {
  if (props.color) {
    bt.value.style.backgroundColor = props.color;
    bt.value.style.color = '#ffffff';
  }
}

const handleDisabled = () => {
  if (props.disabled) {
    // bt.value.style.cursor = 'not-allowed';
    // bt.value.style.color = '#c0c4cc';
    // document.getElementsByTagName('button')[0].disabled = true;
  }
}
</script>

<style lang="less" scoped>
button {
  background-color: #ffffff;
  border: 1px solid #dcdfe6;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 18px;
  cursor: pointer;
  &:hover {
    background-color: #ecf5ff;
    border-color: #c6e2ff;
  }
}
</style>