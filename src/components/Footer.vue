<template>
  <n-footer style="background-color: #ecf5ff; height: 300px; padding: 40px 150px 40px 150px">
    <div
      style="display: flex;justify-content: center; align-items: center;display: flex;justify-content: space-between;"
    >
      <ul style="list-style: none;">
        <h4>链接</h4>
        <li>代码仓库</li>
        <li>更新日志</li>
        <li>常见问题</li>
        <li>脚手架</li>
        <li>在线主题生成器</li>
        <li>SinaUI-React</li>
        <li>SinaUI-Angular</li>
      </ul>

      <ul style="list-style: none;">
        <h4>社区</h4>
        <li>在线讨论</li>
        <li>反馈建议</li>
        <li>贡献指南</li>
        <li>SegmentFault</li>
        <li>Awesome Element</li>
      </ul>

      <div>
        <h4>SinaUI 1.0.0 To be continued</h4>
        <a target="_blank" href="http://github.com/h-sina">
          <font-awesome-icon class="icon" icon="fa-brands fa-github" />
        </a>
        <a target="_blank" href="http://github.com/h-sina">
          <font-awesome-icon class="icon" icon="fa-brands fa-github-alt" />
        </a>
      </div>
    </div>
  </n-footer>
</template>

<script setup name="menu">
import NFooter from '../../packages/NContainer/NFooter';

</script>
<style lang="less" scoped>
ul li {
  padding-bottom: 5px;
  font-size: 14px;
  color: #666666;
}
.icon {
  width: 50px;
  height: 50px;
  color: #c8d6e8;
  cursor: pointer;
  padding: 0 5px;
  &:hover {
    transform: scale(1.2);
    color: #8d99ab;
  }
}
</style>

