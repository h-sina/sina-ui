<template>
  <button>123</button>
  <n-button></n-button>
  <n-input></n-input>
  <H></H>
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
