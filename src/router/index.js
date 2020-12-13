import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
		path: '/',
		redirect: '/home'
  },
  {
		path: '/home',
		name: 'home',
		component:() => import(/* webpackChunkName: "home" */ '../views/Home/index.vue')
  },
  {
    path: '/approach',
    name: 'approach',
    redirect:'/approach/abstract',
    component:() => import(/* webpackChunkName: "approachLL" */ '../views/ApproachLL/index.vue'),
    children:[
      {
        path:'/approach/abstract',
        name:'abstract',
        component:()=>import(/* webpackChunkName: "abstract" */ '../views/ApproachLL/abstract.vue')
      },
      {
        path:'/approach/advantage',
        name:'advantage',
        component:()=>import(/* webpackChunkName: "abstract" */ '../views/ApproachLL/advantage.vue')
      },
    ]
  },
  {
    path: '/counsel',
    name: 'counsel',
    redirect:'/counsel/hydt',
    component:() => import(/* webpackChunkName: "approachLL" */ '../views/counsel/index.vue'),
    children:[
      {
        path:'/counsel/hydt',
        name:'hydt',
        component:()=>import(/* webpackChunkName: "abstract" */ '../views/counsel/hydt.vue')
      },
      {
        path:'/counsel/gyhd',
        name:'gyhd',
        component:()=>import(/* webpackChunkName: "abstract" */ '../views/counsel/gyhd.vue')
      },
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
