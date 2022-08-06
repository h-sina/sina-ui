<template>
  <n-header
    style="background-color: #f7fbfd; height: 80px; padding: 5px; display: flex; justify-content: space-between;"
  >
    <n-avatar
      :size="60"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    ></n-avatar>

    <div>
      <n-button @click="handleClick" shape="square" size="medium">注册</n-button>
      <n-button @click="handleClick" shape="square" size="medium">登录</n-button>
    </div>
  </n-header>
</template>

<script setup name="menu">
import NHeader from '../../packages/NContainer/NHeader';
import NAvatar from '../../packages/NAvatar/index';
import NButton from '../../packages/NButton/index';
import NColorPicker from '../../packages/NColorPicker/index';

</script>

