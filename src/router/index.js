import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import { modeRouter } from './mode'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => import('@/pages/root'),
      beforeEnter: (to, from, next) => {
        // console.log('beforeEnter root: ', to);

        // next((vm) => {
        //   console.log(vm);
        //   vm.isRoot = to.fullPath==='/'
        // })

        next()
      },
    },
    {
      path: '/css/loading',
      name: 'loading',
      component: () => import('@/pages/css/loading')
    },
    {
      path: '/css/bubble/bottom-left',
      name: 'bubble',
      component: () => import('@/pages/css/bubble/bottom-left')
    },
    {
      path: "/css/icon",
      component: () => import("@/pages/css/icon/index"),
      children: require('./icon').default,
    },
    ...modeRouter,
    {
      path: "*",
      name: "404",
      component: () => import('@/pages/404')
    }
  ],
})

console.log('* ', require('./icon').default)

// 判断是否是根页面
// router.beforeEach((to, from, next)=>{
  
//   next((vm)=> {
//     console.log(to, from);
    
//     vm.isRoot=(from.fullPath==='/')
//   })
// })



export default router;



