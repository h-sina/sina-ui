<template>
  <div>
    <button class="bt" @click="ck" ref="myRef">{{msg}}</button>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: 'NButton',
  props: {
    msg: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    }
  },
  emits: ['click'],
  setup (props, actions) {
    const myRef = ref(null);
    const msg = ref(props.msg);
    const ck = () => {
      actions.emit('click')
    }
    onMounted(() => {
      console.log(`msg`, props.msg);
      if (props.type) {
        myRef.value.style.borderRadius = '20px';
      }
      if (props.color) {
        myRef.value.style.color = props.color;
      }
    })
    return {
      msg,
      myRef,
      ck,
    }
  }
})
</script>

<style scoped>
.bt {
  width: 80px;
  height: 30px;
  background-color: black;
  color: white;
  /* border-radius: 3px; */
  font-family: Comic Sans MS, Tahoma, Arial, "Heiti SC", "Microsoft YaHei",
    "WenQuanYi Micro Hei";
}
</style>