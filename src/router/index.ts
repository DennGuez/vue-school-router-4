import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import sourceData from '../data.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // linkActiveClass: 'vue-school-active-link',
  routes: [
    { 
      path: '/', 
      name: 'home', 
      component: HomeView 
    },
    {
      path: '/protected',
      name: 'protected',
      component: ()=> import('../views/ProtectedView.vue'),
      meta: {
      /* we can name this propertie wherever we want */
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: () => import('../views/InvoicesView.vue'),
      meta: { requiresAuth: true}
    },
    { 
      path: '/destination/:id/:slug', 
      name: 'destination.show', 
      component: () => import('../views/DestinationView.vue'),
      props: route => ({...route.params, id: +route.params.id}),
      /* sometimes the router matches the parameters of the route but of page that does not exist
        that's why we check if the id we received exists */
      beforeEnter(to, /*from*/){
        const exists = sourceData.destinations.find(
          destination=> destination.id === +to.params.id
        )
        if(!exists) return {
          name: 'NotFound',
          // allows keeping the URL  while rendering a different page
          params: { pathMatch: to.path.split('/').slice(1)},
          query: to.query,
          hash: to.hash
        }
      },
      children: [
        { 
          path: ':experienceSlug', 
          name: 'experience.show', 
          component: () => import('../views/ExperienceShow.vue'),
          props: route=> ({...route.params, id: +route.params.id})
        },
      ]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') }
  ],

  scrollBehavior(to, from, savedPosition) {
    // return {top:null, left:null, behavior:null}
    // This allways show the page start on the top
    // return savedPosition || { top:0}
    // Solve the problem it generates with <transition> 0.3s on app.vue
    return savedPosition || new Promise((resolve)=>{
      setTimeout(() => resolve({top:0, behavior: 'smooth'}), 300);
    })
  }
})

/* Every time route change this function is fire (global guard) */
router.beforeEach((to, /*from*/) => {
  if(to.meta.requiresAuth && !window.user) {
    /* we where user wanna go, thats why save the path and redirect as query */
    return { name: 'login', query:{ redirect: to.fullPath}}
  }
})

export default router