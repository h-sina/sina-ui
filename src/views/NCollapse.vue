

<template>
  <div>
    <n-collapse accordion>
      <n-collapse-item name="1">
        <template v-slot:title>
          一致性 Consistency
          <font-awesome-icon icon="fa-solid fa-bars" />
        </template>
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </n-collapse-item>
      <n-collapse-item title="hello2" name="2">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </n-collapse-item>
      <n-collapse-item title="hello2" name="3">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<script setup >

import NCollapse from '../../packages/NCollapse/index';
import NCollapseItem from '../../packages/NCollapse/NCollapseItem';
</script>

