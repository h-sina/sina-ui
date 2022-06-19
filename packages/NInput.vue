<template>
  <div>
    <input class="bt" />
  </div>
</template>

<script>
export default {
  name: 'NInput'
}
</script>

<style scoped>
.bt {
  display: inline-block;
  width: 200px;
  height: 20px;
  margin: 5px;
  padding: 4px 0 4px 10px;
  font-family: Comic Sans MS, Tahoma, Arial, "黑体";
  border: 1px solid #000000;
}
.bt:hover {
  box-shadow: 0px 0px 2px 0px #000000;
}
</style>