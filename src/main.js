import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n=new VueI18n({
  locale: localStorage.getItem('locale') || 'zh',
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh': require('./lang/zh'),   // 中文语言包
    'en': require('./lang/en'),    // 英文语言包
    'ja': require('./lang/ja'),    // 日文语言包
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
