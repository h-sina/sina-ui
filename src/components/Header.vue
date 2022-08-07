<template>
  <n-header class="header">
    <n-avatar class="avatar" :size="60" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></n-avatar>

    <div style="width: 200px;display: inherit; justify-content: space-around; align-items: center;">
      <n-button @click="handleClick" shape="square" size="medium">注册</n-button>
      <n-button @click="handleClick" shape="square" size="medium">登录</n-button>
      <a target="_blank" href="http://github.com/h-sina">
        <font-awesome-icon class="icon" icon="fa-brands fa-github" style="width: 50px;height: 30px;color: #eee;" />
      </a>
    </div>
  </n-header>
</template>

<script setup name="menu">
import NHeader from '../../packages/NContainer/NHeader';
import NAvatar from '../../packages/NAvatar/index';
import NButton from '../../packages/NButton/index';

</script>

<style lang="less" scoped>
.header {
  background-color: #183153;
  height: 80px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.avatar {
  margin: 0 8px;
}
</style>

