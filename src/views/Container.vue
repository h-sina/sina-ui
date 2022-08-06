<template>
  <div>
    <n-container style="text-align: center; margin: 20px;">
      <n-header style="height: 70px;background-color: #f7fbfd;"></n-header>
      <n-container>
        <n-aside style="width: 20%;height: 300px;background-color: #f7f7f7;">
        </n-aside>
        <n-main style="width: 80%;height: 300px;background-color: #b3c0d1;">
        </n-main>
      </n-container>
      <n-footer style="height: 100px;background-color: #f7fbfd;"></n-footer>
    </n-container>
    <NBackTop bottom="60px" right="60px" @backTop="backTop"></NBackTop>
  </div>
</template>

<script setup>
import NContainer from '../../packages/NContainer/NContainer';
import NMain from '../../packages/NContainer/NMain';
import NAside from '../../packages/NContainer/NAside';
import NFooter from '../../packages/NContainer/NFooter';
import NHeader from '../../packages/NContainer/NHeader';

import NBackTop from '../../packages/NBackTop/index';
</script>

<style lang="scss" scoped>
</style>