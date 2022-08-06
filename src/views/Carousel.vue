<template>
  <div>
    <NCarousel width="600px" height="400px" speed="2">
      <NCarouselItem v-for="(item, index) in arr" :key="index">
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </NCarouselItem>
    </NCarousel>
  </div>
</template>

<script setup>
import NCarousel from '../../packages/NCarousel/NCarousel';
import NCarouselItem from '../../packages/NCarousel/NCarouselItem';

const arr = [
  { "link": '', 'image': require('../../src/static/pexels-photo-1366919.jpg') },
  { "link": '', 'image': require('../../src/static/pexels-photo-1656579.jpg') },
  { "link": '', 'image': require('../../src/static/pexels-photo-1743165.jpg') },
  { "link": '', 'image': require('../../src/static/pexels-photo-2078126.jpg') },
]
</script>

