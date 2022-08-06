<template>
  <img ref="pic" :src="PicURL" />
</template>

<script setup name="NAvatar">
import { ref, onMounted } from "vue";
const props = defineProps({
  src: {
    type: String,
  },
  shape: {
    type: String,
    default: 'circle',
  },
  size: {
    type: [String, Number],
    default: 'medium'
  },
  alt: {
    type: String,
    default: '未找到图片'
  },
  fit: {
    type: String,
    default: 'fill'
  }
})
const PicURL = ref('https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png');
const pic = ref();
const PicAlt = ref();

onMounted(() => {
  handleShape();
  handleSize();
  handleUrl();
  handleAlt();
  handleFit();
})
/**
 * fill - 默认值。调整替换后的内容大小，以填充元素的内容框。如有必要，将拉伸或挤压物体以适应该对象。
  contain - 缩放替换后的内容以保持其纵横比，同时将其放入元素的内容框。
  cover - 调整替换内容的大小，以在填充元素的整个内容框时保持其长宽比。该对象将被裁剪以适应。
  none - 不对替换的内容调整大小。
  scale-down - 调整内容大小就像没有指定内容或包含内容一样（将导致较小的具体对象尺寸）
 */
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down'];
const fitsMap = new Set(fits);

const sizeToPX = {
  'small': '28px',
  'medium': '36px',
  'large': '40px',
}

const shapeToPX = {
  'circle': '50%',
  'square': '0'
}

const handleSize = () => {
  if (props.size) {
    if (typeof props.size == 'number') {
      pic.value.style.width = props.size + 'px';
      pic.value.style.height = props.size + 'px';
    } else {
      const sizeNumber = sizeToPX[props.size];
      pic.value.style.width = sizeNumber;
      pic.value.style.height = sizeNumber;
    }
  }
}

const handleShape = () => {
  if (props.shape) {
    const sizeNumber = shapeToPX[props.shape];
    pic.value.style.borderRadius = sizeNumber;
    pic.value.style.borderRadius = sizeNumber;
  }
}

const handleUrl = () => {
  if (props.src) {
    PicURL.value = props.src;
  }
}

const handleAlt = () => {
  if (props.alt) {
    PicAlt.value = props.alt;
  }
}

const handleFit = () => {
  if (props.fit && fitsMap.has(props.fit)) {
    pic.value.style.objectFit = props.fit;
  }
}

</script>

<style lang="less" scoped>
@small: 20px;
@medium: 30px;
@large: 40px;
img {
  width: @medium;
  height: @medium;
  border-radius: 50%;
}
</style>