<template>
  <div>
    <!-- <NCarousel width="600px" height="400px" speed="1">
      <Index v-for="(item,index) in arr" :key="index">
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </Index>
    </NCarousel> -->
    <!-- <drag-wrap class="wrap" :data="list" @watchData="watchData">
      <drag-item class="item" v-for="(item, index) in list" :key="index">
        <template #drag>
          <div>拖拽Dom</div>
        </template>
        <div>{{item}}</div>
      </drag-item>
    </drag-wrap>-->

    <n-container>
      <Header></Header>
      <n-container>
        <n-aside>
          <Menu></Menu>
        </n-aside>
        <n-main >
          <router-view style="margin: 10px;"></router-view>
        </n-main>
      </n-container>
      <Footer></Footer>
      <NBackTop bottom="60px" right="60px" @backTop="backTop"></NBackTop>
    </n-container>
  </div>
</template>

<script>
import NContainer from '../packages/NContainer/NContainer';
import NMain from '../packages/NContainer/NMain';
import NAside from '../packages/NContainer/NAside';
import NBackTop from '../packages/NBackTop/index';

import Menu from './components/Menu';
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';

// 引入组件的命名 要按开头小写字母之后驼峰命名法

export default {
  name: 'App',
  components: {
    Menu,
    Main,
    Footer,
    Header,

    NAside,
    NMain,
    NContainer,
    NBackTop,
  },
  data: function () {
    return {
      list: [111, 222, 333, 444, 555, 666, 777, 888, 999],
      msg: '按钮',
      arr: [
        { "link": '', 'image': require('../src/static/pexels-photo-1366919.jpg') },
        { "link": '', 'image': require('../src/static/pexels-photo-1656579.jpg') },
        { "link": '', 'image': require('../src/static/pexels-photo-1743165.jpg') },
        { "link": '', 'image': require('../src/static/pexels-photo-2078126.jpg') },
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]

    }
  },
  mounted () {
    console.log('mounted')
  },
  methods: {
    handleClick () {
      console.log('按钮被点击了');
    },
    handleClick1 () {
      console.log('按钮');
    },
    watchData (newList) {
      console.log("newList", newList);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
span {
  margin-left: 5px;
}

</style>
