<template>
  <div>
    <!-- <n-button msg="buttonbuttonbutton" disabled="true" @click="ck" color="white" shape="round"></n-button> -->
    <!-- <n-input></n-input> -->
    <!-- <n-button msg="buttonbuttonbutton" @click="ck" color="white"></n-button> -->
    <!-- <n-button msg="按钮按钮按钮" @click="ck" color="white" shape="circle"></n-button> -->
    <!-- <Demo1>
      <Demo v-for="(item,index) in arr" :key="index">
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </Demo>
    </Demo1>-->
    <NCarousel width="600px" height="400px" speed="1">
      <Index v-for="(item,index) in arr" :key="index">
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </Index>
    </NCarousel>
  </div>
</template>

<script>
import nButton from '../packages/button/NButton';
import nInput from '../packages/input/NInput';
import NCarousel from '../packages/NCarousel/NCarousel';
import Index from '../packages/NCarousel/NCarouselItem';

export default {
  name: 'App',
  components: {
    nButton,
    nInput,
    NCarousel,
    Index,
  },
  data: function () {
    return {
      msg: '按钮',
      arr: [
        { "link": '', 'image': require('../src/static/pexels-photo-1366919.jpg') },
        { "link": '', 'image': require('../src/static/pexels-photo-1656579.jpg') },
        { "link": '', 'image': require('../src/static/pexels-photo-1743165.jpg') },
        { "link": '', 'image': require('../src/static/pexels-photo-2078126.jpg') },
      ]
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
