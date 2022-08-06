<template>
  <n-menu router=true style="height: 100%" @open="handleOpen" @close="handleClose" default-active="1-1">
    <n-sub-menu index="1">
      <template v-slot:title>
        <font-awesome-icon icon="fa-solid fa-location-dot" />
        <span>导航一</span>
      </template>
      <n-menu-group>
        <template v-slot:title>分组一</template>
        <n-menu-item index="nCollapse">选项1</n-menu-item>
        <n-menu-item index="1-2">选项2</n-menu-item>
      </n-menu-group>
    </n-sub-menu>
    <n-sub-menu index="2">
      <template v-slot:title>
        <font-awesome-icon icon="fa-solid fa-location-dot" />
        <span>导航二</span>
      </template>
      <n-menu-group>
        <template v-slot:title>分组一</template>
        <n-menu-item index="2-1">选项1</n-menu-item>
        <n-menu-item index="2-2">选项2</n-menu-item>
      </n-menu-group>
    </n-sub-menu>

    <n-menu-item index="3">
      <font-awesome-icon icon="fa-solid fa-bars" />
      <span slot="title">菜单二</span>
    </n-menu-item>
    <n-menu-item index="4">
      <font-awesome-icon icon="fa-solid fa-file-lines" />
      <span slot="title">菜单三</span>
    </n-menu-item>
    <n-menu-item index="5">
      <font-awesome-icon icon="fa-solid fa-gear" />
      <span slot="title">菜单四</span>
    </n-menu-item>
  </n-menu>
</template>

<script setup name="menu">
import NMenu from '../../packages/NMenu/index';
import NMenuItem from '../../packages/NMenu/NMenuItem';
import NMenuGroup from '../../packages/NMenu/NMenuGroup';
import NSubMenu from '../../packages/NMenu/NSubMenu';
</script>

