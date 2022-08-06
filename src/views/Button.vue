<template>
  <div>
    <n-button color="#5fadff" shape="square" size="small" disabled="true">登录</n-button>
    <n-button @click="handleClick" shape="square" size="medium">注册</n-button>
    <n-button @click="handleClick" shape="square" size="medium">登录</n-button>
    <n-button shape="square" size="large">默认按钮</n-button>
  </div>
</template>

<script setup>
import NButton from '../../packages/NButton/index';
</script>
