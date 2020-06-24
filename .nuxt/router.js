import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)




const scrollBehavior = function (to, from, savedPosition) {
      if (to.hash) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ selector: to.hash })
          }, 500)
        })
      }
      if (savedPosition) {
        return savedPosition
      } else {
        return {x: 0, y: 0}
      }
    }


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [

    ],
    
    
    fallback: false
  })
}
