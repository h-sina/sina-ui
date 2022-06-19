<template>
  <n-button msg="buttonbuttonbutton" disabled="true" @click="ck" color="white" shape="round"></n-button>
  <!-- <n-input></n-input> -->
  <!-- <H></H> -->

  <n-button msg="buttonbuttonbutton" @click="ck" color="white"></n-button>

  <n-button msg="按钮按钮按钮" @click="ck" color="white" shape="circle"></n-button>
</template>

<script>
import nButton from '../packages/NButton.vue';
import nInput from '../packages/NInput.vue';
import H from '../packages/H.vue';

export default {
  name: 'App',
  components: {
    nButton,
    nInput,
    H
  },
  data: function () {
    return {
      msg: '按钮',
    }
  },
  methods: {
    ck () {
      console.log('按钮被点击了');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
