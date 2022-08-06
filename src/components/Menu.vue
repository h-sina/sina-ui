<template>
  <n-menu router="true" style="height: 100%" @open="handleOpen" @close="handleClose" default-active="1-1">
    <n-sub-menu index="1">
      <template v-slot:title>
        <font-awesome-icon icon="fa-solid fa-location-dot" />
        <span>布局</span>
      </template>
      <n-menu-group>
        <template v-slot:title>基础</template>
        <n-menu-item index="container">容器布局</n-menu-item>
        <n-menu-item index="navMenu">菜单栏</n-menu-item>
      </n-menu-group>
      <n-menu-group>
        <template v-slot:title>表单</template>
        <n-menu-item index="button">按钮</n-menu-item>
        <n-menu-item index="colorPicker">颜色选择器</n-menu-item>
        <n-menu-item index="upload">上传</n-menu-item>
      </n-menu-group>
    </n-sub-menu>
    <n-sub-menu index="2">
      <template v-slot:title>
        <font-awesome-icon icon="fa-solid fa-bars" />
        <span>数据</span>
      </template>
      <n-menu-group>
        <n-menu-item index="nCollapse">折叠面板</n-menu-item>
        <n-menu-item index="table">表格</n-menu-item>
        <n-menu-item index="carousel">轮播图</n-menu-item>
      </n-menu-group>
    </n-sub-menu>
    <n-sub-menu index="3">
      <template v-slot:title>
        <font-awesome-icon icon="fa-solid fa-file-lines" />
        <span>其他</span>
      </template>
      <n-menu-group>
        <n-menu-item index="backTop">回到顶部</n-menu-item>
      </n-menu-group>
    </n-sub-menu>

  
    <n-menu-item index="">
      <font-awesome-icon icon="fa-solid fa-gear" />
      <span slot="title">设置</span>
    </n-menu-item>
  </n-menu>
</template>

<script setup name="menu">
import NMenu from '../../packages/NMenu/index';
import NMenuItem from '../../packages/NMenu/NMenuItem';
import NMenuGroup from '../../packages/NMenu/NMenuGroup';
import NSubMenu from '../../packages/NMenu/NSubMenu';
</script>

