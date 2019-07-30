import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => import('@/pages/root/index'),
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
    }
  ],
})

// 判断是否是根页面
// router.beforeEach((to, from, next)=>{
  
//   next((vm)=> {
//     console.log(to, from);
    
//     vm.isRoot=(from.fullPath==='/')
//   })
// })



export default router;



