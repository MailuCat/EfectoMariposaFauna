import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Buscar from '../views/Buscar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buscar',
    name: 'Buscar',
    component: Buscar
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import(/* webpackChunkName: "about" */ '../components/Menu.vue')
  },
  {
    path: '/aves',
    name: 'PortadaAves',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Portadas/PortadaAves.vue')
  },
  {
    path: '/queltehue',
    name: 'Queltehue',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Aves/Queltehue.vue')
    },
  {
  path: '/picaflordearica',
  name: 'PicaflorArica',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/Aves/PicaflorArica.vue')
  },
  {
    path: '/aguiluchojuanfernandez',
    name: 'AguiluchoJF',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Aves/AguiluchoJF.vue')
    },
    {
      path: '/rayaditimasafuera',
      name: 'RayaditoJF',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Aves/RayaditoJF.vue')
      },
      {
        path: '/condor',
        name: 'Condor',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Aves/Condor.vue')
        },
  {
    path: '/mamiferos',
    name: 'PortadaMamiferos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Portadas/PortadaMamiferos.vue')
  },
  {
    path: '/jorobada',
    name: 'Ballenajorobada',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mamiferos/BallenaJorobada.vue')
  },
  {
    path: '/degu',
    name: 'Degu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mamiferos/Degu.vue')
  },
  {
    path: '/delfinnarizbotella',
    name: 'DelfinNariz',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mamiferos/DelfinNariz.vue')
  },
  {
    path: '/guina',
    name: 'Guina',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mamiferos/Guina.vue')
  },
  {
    path: '/zorrochilote',
    name: 'ZorroChilote',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mamiferos/ZorroChilote.vue')
  },
  {
    path: '/puma',
    name: 'Puma',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mamiferos/Puma.vue')
  },
  {
    path: '/colocolo',
    name: 'Colocolo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mamiferos/Colocolo.vue')
  },
  {
    path: '/gatoandino',
    name: 'Gatoandino',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mamiferos/Gatoandino.vue')
  },
  {
    path: '/huemul',
    name: 'Huemul',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mamiferos/Huemul.vue')
  },
  {
    path: '/llama',
    name: 'Llama',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mamiferos/Llama.vue')
  },
  {
    path: '/vicuna',
    name: 'Vicuña',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Mamiferos/Vicuña.vue')
  },
  {
    path: '/insectos',
    name: 'PortadaInsectos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Portadas/PortadaInsectos.vue')
  },
  {
  path: '/abejorronaranja',
  name: 'AbejorroNaranja',
  component: () => import(/* webpackChunkName: "about" */ '../views/Insectos/AbejorroNaranja.vue')
  },
  {
  path: '/manuelia',
  name: 'Manuelia',
  component: () => import(/* webpackChunkName: "about" */ '../views/Insectos/Manuelia.vue')
  },
  {
  path: '/sierradeorocoipo',
  name: 'SierraOrocoipo',
  component: () => import(/* webpackChunkName: "about" */ '../views/Insectos/SierraOrocoipo.vue')
  },
  {
  path: '/cnemalobuspegnai',
  name: 'CnemalobusPegnai',
  component: () => import(/* webpackChunkName: "about" */ '../views/Insectos/CnemalobusPegnai.vue')
      },
   {
  path: '/anfibios',
  name: 'PortadaAnfibios',
  component: () => import(/* webpackChunkName: "about" */ '../views/Portadas/PortadaAnfibios.vue')
  },
  {
  path: '/sapobarrio',
  name: 'SapoBarrio',
  component: () => import(/* webpackChunkName: "about" */ '../views/Anfibios/SapoBarrio.vue')
  },
  {
    path: '/ranitadarwin',
    name: 'RanitaDarwin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Anfibios/RanitaDarwin.vue')
    },
    {
      path: '/ranitadarwinsur',
      name: 'RanitaDarwinSur',
      component: () => import(/* webpackChunkName: "about" */ '../views/Anfibios/RanitaDarwinSur.vue')
      },
      {
        path: '/sapohermoso',
        name: 'SapoHermoso',
        component: () => import(/* webpackChunkName: "about" */ '../views/Anfibios/SapoHermoso.vue')
        },
      {
  path: '/reptiles',
  name: 'PortadaReptiles',
  component: () => import(/* webpackChunkName: "about" */ '../views/Portadas/PortadaReptiles.vue')
  },
  {
  path: '/salamanqueja',
  name: 'Salamanqueja',
  component: () => import(/* webpackChunkName: "about" */ '../views/Reptiles/Salamanqueja.vue')
  },
  {
    path: '/iguanachilena',
    name: 'IguanaChilena',
    component: () => import(/* webpackChunkName: "about" */ '../views/Reptiles/Iguana_chilena.vue')
  },
  {
    path: '/lagartijatenue',
    name: 'LagartijaTenue',
    component: () => import(/* webpackChunkName: "about" */ '../views/Reptiles/Lagartija_tenue.vue')
    },
  {
      path: '/lagartijalolol',
      name: 'LagartijaLolol',
      component: () => import(/* webpackChunkName: "about" */ '../views/Reptiles/LagartijaLolol.vue')
      },
  
    {
      path: '/acerca_de_efectomariposa',
      name: 'nosotros',
      component: () => import(/* webpackChunkName: "about" */ '../views/Nosotros.vue')
      },
      {
        path: 'contacto',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
        },

    {
      path: '*',
      name: 'NotFound',
      component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
      },
    
  ]

const router = new VueRouter({
  mode: 'history',

  base: process.env.BASE_URL,
  routes
})

export default router
