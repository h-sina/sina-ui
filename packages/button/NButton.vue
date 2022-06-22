<template>
  <div>
    <button v-bind:disabled="disabled" class="bt" @click="ck" ref="myRef">{{msg}}</button>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: 'NButton',
  props: {
    msg: {
      type: String,
    },
    shape: {
      shape: String,
    },
    color: {
      type: String,
    },
    disabled: {
      disabled: String,
      default: false,
    },
    size: {
      disabled: String,
      default: 'medium',
    }
  },
  emits: ['click'],
  setup (props, actions) {
    const myRef = ref(null);
    const msg = ref(props.msg);
    const disabled = ref(props.disabled);
    const ck = () => {
      actions.emit('click')
    }
    onMounted(() => {
      if (props.shape) {
        if (props.shape === 'circle') {
          myRef.value.style.height = myRef.value.offsetWidth + 'px';
          myRef.value.style.borderRadius = '50%';
        } else if (props.shape === 'round') {
          myRef.value.style.borderRadius = '20px';
        } else {
          console.log(`error:`, 'shape值错误');
        }
      }
      if (props.color) {
        myRef.value.style.color = props.color;
      }
      if (props.size === 'small') {
        myRef.value.style.width = myRef.value.offsetWidth / 5 * 4 + 'px';
        myRef.value.style.height = myRef.value.offsetHeight / 5 * 4 + 'px';
        console.log(myRef.value.style.fontSize)
        // myRef.value.style.fontSize = (myRef.value.style.fontSize * 2) + 'px';
      } else if (props.size === 'medium') {

      } else if (props.size === 'large') {

      }
    })
    return {
      msg,
      myRef,
      ck,
      disabled,
    }
  }
})
</script>

<style scoped>
.bt {
  padding: 5px 10px;
  margin: 5px;
  background-color: black;
  color: white;
  font-family: Comic Sans MS, Tahoma, Arial, "黑体";
  cursor: pointer;
  border: 0;
  font-size: 12px;
}
.bt:hover {
  background-color: #353232;
}
</style>