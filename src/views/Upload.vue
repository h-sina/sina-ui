

<template>
  <div>
    <n-upload @submit="handleClick1">
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </n-upload>
  </div>
</template>

<script setup >

import NUpload from '../../packages/NUpload/index'
</script>

