

<template>
  <div>
    <n-table :data="tableData">
      <n-table-item>
        <span>日期</span>
      </n-table-item>
      <n-table-item>
        <span>姓名</span>
      </n-table-item>
      <n-table-item>
        <span>地址</span>
      </n-table-item>
    </n-table>
  </div>
</template>

<script setup>

import NTable from '../../packages/NTable/index';

const tableData = [{
  date: '2016-05-02',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1518 弄'
}, {
  date: '2016-05-04',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1517 弄'
}, {
  date: '2016-05-01',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1519 弄'
}, {
  date: '2016-05-03',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1516 弄'
}]
</script>

