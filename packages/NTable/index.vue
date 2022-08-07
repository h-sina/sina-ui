<template>
  <table ref="table">
    <tr>
      <slot></slot>
    </tr>
  </table>
</template>

<script>
import {
  defineComponent
} from 'vue'

export default defineComponent({
  name: 'NTable'
})
</script>

<script setup name="NTable">
import { ref, onMounted } from 'vue';
const table = ref();
const props = defineProps({
  data: {
    type: Object
  }
})

onMounted(() => {
  handleTablData();
})

const handleTablData = () => {
  const fragment = document.createDocumentFragment();
  props.data.forEach(element => {
    var tr = document.createElement("tr");
    tr.style.width = "820px";
    tr.style.height = "48px";
    for (let i in element) {
      var td = document.createElement("td");
      td.style.borderBottom = "1px solid #ebeef5";
      /** innerHTML html() text() val() prop() */
      td.innerHTML = element[i];
      tr.appendChild(td);
    };
    fragment.appendChild(tr);
  });
  table.value.appendChild(fragment);
}
</script>

<style lang="less" scoped>
@width: 820px;
@height: 48px;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

table {
  font-size: 13px;
  width: @width;
  padding: 24px;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  tr {
    width: @width;
    height: @height;
    border-bottom: 1px solid #ebeef5;
  }
}
</style>