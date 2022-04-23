//main.js 程序入口文件，是初始化vue实例并使用需要的插件,加载各种公共组件


/* 
**1.import...from...的from命令后面可以跟很多路径格式，若只给出vue，axios这样的包名，
则会自动到node_modules中加载；若给出相对路径及文件前缀，则到指定位置寻找。
2.可以加载各种各样的文件：.js、.vue、.less等等。

作者：趁你还年轻233
链接：https://www.jianshu.com/p/c0be35475e54
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
//import Vue from "../node_modules/vue/dist/vue.js";
import Vue from 'vue'
//import App from './App.vue';都是从node_modules中加载相应名称的模块。
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})