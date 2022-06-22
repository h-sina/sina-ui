<template>
  <div class="mySwiper">
    <div class="carousel">
      <div class="content">
        <slot></slot>
      </div>
    </div>

    <div class="indicator">
      <div
        class="indicatorItem"
        v-for="(item, index) in slideCount"
        :key="index"
        :class="{ active: index === currentIndex - 1 }"
      ></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, reactive, toRefs } from "vue";

export default defineComponent({
  name: 'NCarousel',
  props: {
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    speed: {
      type: String,
    },
  },
  setup (props, actions) {
    const myRef = ref(null);
    const data = reactive({
      slideCount: 0,
      interval: 3000,
      imgWidth: 0, //每张图片的宽度一样
      swiperStyle: {}, //利用swiper的style对象来控制着“过渡”
      currentIndex: 1, //记录当前滑动的下标
      scrolling: false, //当用手触摸和移动时,则暂停滚动
      animalDuration: 300, //切换一张图片0.3
      showIndicator: true, //当只有一张图片时，不显示小点点
      moveRatio: 0.25,
      playTimer: null, //控制着计时器的开始与暂停
    })
    onMounted(() => {
      if (props.width || props.height) {
        let dom = document.getElementsByClassName("mySwiper")[0];
        props.width ? dom.style.width = props.width : '';
        props.height ? dom.style.height = props.height : '';
      }
      if (props.speed) {
        data.interval = props.speed * 1000;
      }
      setTimeout(() => {
        handleDom();
        startTimer();
      }, 200);
    })

    const handleDom = function () {
      let swiperEle = document.querySelector(".content");
      let slideEles = document.getElementsByClassName("slide");
      data.slideCount = slideEles.length;
      if (data.slideCount > 1) {
        let cloneFirst = slideEles[0].cloneNode(true);
        let cloneLast = slideEles[data.slideCount - 1].cloneNode(true);
        swiperEle.insertBefore(cloneLast, slideEles[0]);
        swiperEle.appendChild(cloneFirst);
        data.imgWidth = swiperEle.offsetWidth;
        data.swiperStyle = swiperEle.style;
      }
      //显示第一张图片（不是刚刚从最后面添加到前面的那张）
      setTransform(-data.imgWidth);
    }

    const setTransform = function (movePosition) {
      //控制着轮播图向左右移动
      data.swiperStyle.transform = `translateX(${movePosition}px)`;
      data.swiperStyle["-webkit-transform"] = `translateX(${movePosition}px)`;
      data.swiperStyle["-ms-transform"] = `translateX(${movePosition}px)`;
    }

    const startTimer = function () {
      data.playTimer = setInterval(function () {
        data.currentIndex++;
        scrollContent(-data.currentIndex * data.imgWidth); //使用过渡实现移动轮播图，效果更舒适
      }, data.interval);
    }

    const scrollContent = function (position) {
      data.scrolling = true; //滚动时不能用手滑动图片
      data.swiperStyle.transition = `transform ${data.animalDuration}ms ease`;
      setTransform(position);
      checkPosition();
      data.scrolling = false;
    }

    const checkPosition = function () {
      //在确保“过渡”结束后再检查下标是否合理
      setTimeout(function () {
        data.swiperStyle.transition = "0ms";
        if (data.currentIndex >= data.slideCount + 1) {
          data.currentIndex = 1;
          setTransform(-data.currentIndex * data.imgWidth); //当移动到最后一张，直接移动到第一张，不用过渡
        } else if (data.currentIndex <= 0) {
          data.currentIndex = data.slideCount;
          setTransform(-data.currentIndex * data.imgWidth);
        }
      }, data.animalDuration);
    }

    return {
      ...toRefs(data),
      myRef,
      handleDom,
      startTimer,
      setTransform,
    }
  }
})
</script>

<style scoped>
.carousel {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #364d79;
  color: #fff;
}
.content {
  display: flex;
}

.mySwiper {
  position: relative;
  width: 500px;
  height: 200px;
}

.indicator {
  display: flex;
  position: absolute;
  justify-content: center;
  bottom: 12px;
  width: 100%;
}
.indicatorItem {
  width: 8px;
  height: 8px;
  margin: 5px 3px;
  border-radius: 50%;
  background-color: #fff;
}
.active {
  background-color: rgba(212, 62, 46, 1);
}
</style>