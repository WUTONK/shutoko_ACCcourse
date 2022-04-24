//main.js 程序入口文件，是初始化vue实例并使用需要的插件,加载各种公共组件


/* 
**1.import...from...的from命令后面可以跟很多路径格式，若只给出vue，axios这样的包名，
则会自动到node_modules中加载；若给出相对路径及文件前缀，则到指定位置寻找。
2.可以加载各种各样的文件：.js、.vue、.less等等。

//import Vue from "../node_modules/vue/dist/vue.js";
import Vue from 'vue'
//import App from './App.vue';都是从node_modules中加载相应名称的模块。
import App from './App'

/* eslint-disable no-new */
import Vue from 'vue';

import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
...


// 多语言切换
const i18n = new VueI18n({
	locale: 'zh', //设置默认语言
	messages:{
		'zh': require('@/assets/lang/zh_cn'),
		'en': require('@/assets/lang/en')
	}
});

...

// 在Vue实例中引用 i18n
new Vue({
	router,
	i18n,   // 引用i18n
	render: h => h(App)
}).$mount("#app");

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
