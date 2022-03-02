import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//导入全局样式
import '@/assets/app.css'

//导入运行全局路由守卫
import '@/permisson.js'

Vue.use(Buefy);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
