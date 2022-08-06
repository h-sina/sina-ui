import NAvater from './NAvatar/index.vue';
// 
import NBackTop from './NBackTop/index.vue';
// 
import NButton from './NButton/index.vue';
// 
import NCarousel from './NCarousel/NCarousel.vue';
import NCarouselItem from './NCarousel/NCarouselItem.vue';
// 
import NCollapse from './NCollapse/index.vue';
import NCollapseItem from './NCollapse/NCollapseItem.vue';
// 
import NColorPicker from './NColorPicker/index.vue';
// 
import NAside from './NContainer/NAside.vue';
import NContainer from './NContainer/NContainer.vue';
import NFooter from './NContainer/NFooter.vue';
import NHeader from './NContainer/NHeader.vue';
import NMain from './NContainer/NMain.vue';
// 
import NInput from './NInput/index.vue';
// 
import NMenu from './NMenu/index.vue';
import NMenuGroup from './NMenu/NMenuGroup.vue';
import NMenuItem from './NMenu/NMenuItem.vue';
import NSubMenu from './NMenu/NSubMenu.vue';
// 
import NTable from './NTable/index.vue';
import NTableItem from './NTable/NTableItem.vue';
// 
import NUpload from './NUpload/index.vue';

const components = [
  NButton,
  NInput,
  NCarousel,
  NCarouselItem,
  NAvater,
  NBackTop,
  NCollapse,
  NCollapseItem,
  NColorPicker,
  NContainer,
  NAside,
  NHeader,
  NFooter,
  NMain,
  NMenu,
  NMenuItem,
  NSubMenu,
  NMenuGroup,
  NTable,
  NTableItem,
  NUpload
]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  // 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
  }

}

// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
export default {
  install
}