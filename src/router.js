import Vue from "vue";
import VueRouter from 'vue-router'

import inicio from './components/inicio'
import principal from './components/principal'
import home from './components/home'
import contenido from './components/contenido'
import contenido1 from './components/contenido1'
import actividad1 from './components/actividad1'
import actividad2 from './components/actividad2'
import evaluacion from './components/evaluacion'    
import creditos from './components/creditos'
    
Vue.use(VueRouter)

const routes = [
    {
      path: "/",
      name: "inicio",
      component: inicio
    },
    {
        path: "/principal",
        name: "principal",
        component: principal,

        children:[
            {
            path:'/home',
            name:'home',
            component: home,
          },
          {
            path:'/contenido',
            name:'contenido',
            component: contenido,
          },
          {
            path:'/contenido1',
            name:'contenido1',
            component: contenido1,
          },
          {
            path:'/actividad1',
            name:'actividad1',
            component: actividad1,
          },
          {
            path:'/actividad2',
            name:'actividad2',
            component: actividad2,
          },
          {
            path:'/evaluacion',
            name:'evaluacion',
            component: evaluacion,
          },    
          {
            path:'/creditos',
            name:'creditos',
            component: creditos,
          },
        ]
          },
      ];
  
  const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
  });
  
  export default router;