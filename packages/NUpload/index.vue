<template>
  <div>
    <!-- 上传栏 -->
    <div class="inputFile">
      <font-awesome-icon class="add" icon="fa-solid fa-cloud-arrow-up" />
      <span class="addTitle">将文件拖到此处，或点击上传</span>
      <input style="display: inline-block;" @change="handleUploadFile" type="file" ref="file" title />
    </div>
    <!-- 说明栏 -->
    <div class="tip">
      <slot name="tip"></slot>
      <n-button @click="handleSubmit">提交</n-button>
    </div>
    <slot></slot>
    <!-- 显示栏 -->
    <ul v-show="visibility">
      <li>
        <img ref="img" alt />
        <a>{{imgTitle}}</a>
        <label></label>
        <font-awesome-icon icon="fa-solid fa-xmark" class="no" @click="handleCancel" />
      </li>
    </ul>
  </div>
</template>

<script setup name="NUpload">
import { ref, getCurrentInstance } from "vue";
import NButton from "../NButton/index";

const emit = defineEmits(["clearFiles", "submit"]);
const { proxy, ctx } = getCurrentInstance();

const file = ref();
const img = ref();
const imgTitle = ref();
const visibility = ref(false);
var reads = new FileReader();

const handleUploadFile = () => {
  const imgfile = file.value.files[0];
  reads.readAsDataURL(imgfile);
  reads.onload = function () {
    img.value.src = this.result;
    imgTitle.value = file.value.files[0].name;
    visibility.value = true;
  }
}

const handleCancel = () => {
  img.value.src = '';
  imgTitle.value = '';
  visibility.value = false;
  ctx.$emit('clearFiles');
}

const handleSubmit = () => {
  ctx.$emit('submit');
}
</script>

<style lang="less" scoped>
@addWidth: 60px;
@addPadding: 60px;
@addBorder: 1px;
@inputWidth: (@addWidth + @addPadding*2);

* {
  font-size: 12px;
  color: #606266;
  padding: 0;
  margin: 0;
}
.inputFile {
  display: inline-block;
  position: relative;
  border-radius: 5px;
  border: @addBorder dashed #d9d9d9;
  &:hover {
    border-color: #409eff;
  }
}
.add {
  width: @addWidth;
  height: @addWidth;
  padding: @addPadding;
  position: absolute;
  top: 0;
  left: 0;
  color: #c0c4cc;
  cursor: pointer;
}

.add + .addTitle {
  position: absolute;
  bottom: 15px;
  padding: 5px;
}

input {
  opacity: 0;
  width: @inputWidth;
  padding-top: @inputWidth - 20px;
}

ul {
  border: 1px solid #c0ccda;
  border-radius: 6px;
  margin-top: 10px;
  list-style: none;
  position: relative;
  &:hover {
    a {
      color: #409eff;
    }
    label {
      display: none;
    }
    .no {
      display: inline-block;
    }
  }
  li {
    width: 258px;
    height: 70px;
    padding: 10px 10px 10px 90px;
  }
  img {
    width: 70px;
    height: 70px;
    margin-left: -80px;
    // 图片中心为基准 给图片名定位
    vertical-align: middle;
  }
  & img[src=""] & img:not([src]) {
    opacity: 0;
    width: 0;
    height: 0;
  }
  a {
    text-decoration: none;
    color: #606266;
    transition: color 0.3s;
    display: inline-block;
    width: 214px;
    height: 70px;
    padding-left: 4px;
    margin-right: 40px;
    line-height: 70px;
    margin-top: 0;
  }
  label {
    position: absolute;
    top: 0;
    right: 0;
    border: 15px solid #13ce66;
    border-left-color: transparent;
    border-bottom-color: transparent;
    border-top-right-radius: 5px;
  }
  .no {
    display: inline-block;
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 5px;
    color: #88898c;
    display: none;
    cursor: pointer;
  }
}

.tip {
  margin-top: 7px;
}
</style>