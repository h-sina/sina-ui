

<template>
  <div>
    <h2>滚动鼠标 看中间</h2>
    <NBackTop bottom="300px" right="500px" visibility-height="0" @backTop="backTop"></NBackTop>
  </div>
</template>

<script setup >
import NBackTop from '../../packages/NBackTop/index';
</script>

