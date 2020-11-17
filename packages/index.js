import wxButton from './button'

// 存储组件列表
const components = [
  wxButton
]

// 定义install方法，接收vue 作为参数，如果使用use注册插件，则所有的组件都会被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return

  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否成功引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出对象必须具有install方法，才能使用
  install,
  // 组件
  wxButton
}
