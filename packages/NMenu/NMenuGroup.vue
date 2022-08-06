<template>
  <div>
    <header>
      <slot name="title"></slot>
    </header>
    <slot></slot>
  </div>
</template>
<script setup>

</script>

<style scoped name="NMenuGroup">
div {
  font-weight: 300;
}
header {
  text-align: center;
}
</style>