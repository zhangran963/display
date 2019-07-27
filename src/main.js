// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from '@/common/router'
Vue.config.productionTip = false


// 中央事件总线
import VueBus from "@/common/modules/vue-bus";
Vue.use(VueBus);

// 公共样式
import '@/common/style/index.scss'

import app from '@/app';
// 实例化
new Vue({
  el: '#app',
  components: { app },
  template: '<app/>',
  router
})
