//main.js 程序入口文件，是初始化vue实例并使用需要的插件,加载各种公共组件

import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})