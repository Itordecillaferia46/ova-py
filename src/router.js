import Vue from "vue";
import VueRouter from "vue-router";

import inicio from "./components/inicio";
import principal from "./components/principal";
import bienvenida from "./components/bienvenida";
import home from "./components/home";
import contenido from "./components/contenido";
import contenido1 from "./components/contenido1";
import contenido2 from "./components/contenido2";
import contenido3 from "./components/contenido3";
import recursos3 from "./components/recursos3";
import recursos3a from "./components/recursos3a";
import contenido4 from "./components/contenido4";
import actividades from "./components/actividades";
import actividad1 from "./components/actividad1";
import actividad2 from "./components/actividad2";
import evaluacion from "./components/evaluacion";
import creditos from "./components/creditos";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "inicio",
    component: inicio,
  },
  {
    path: "/actividad1",
    name: "actividad1",
    component: actividad1,
  },
  {
    path: "/actividad2",
    name: "actividad2",
    component: actividad2,
  },
  {
    path: "/principal",
    name: "principal",
    component: principal,

    children: [
      {
        path: "/home",
        name: "home",
        component: home,
      },
      {
        path: "/bienvenida",
        name: "bienvenida",
        component: bienvenida,
      },
      {
        path: "/contenido",
        name: "contenido",
        component: contenido,
      },
      {
        path: "/contenido1",
        name: "contenido1",
        component: contenido1,
      },
      { path: "/contenido2",
       name: "contenido2", 
       component: contenido2
       },
      { path: "/contenido3", 
      name: "contenido3", 
      component: contenido3
     },
     { path: "/recursos3", 
      name: "recursos3", 
      component: recursos3
     },
     { path: "/recursos3a", 
     name: "recursos3a", 
     component: recursos3a
    },
    { path: "/contenido4", 
    name: "contenido4", 
    component: contenido4
   },

      {
        path: "/actividades",
        name: "actividades",
        component: actividades,
      },
      /*           {
            path:'/actividad1',
            name:'actividad1',
            component: actividad1,
          }, */
      /*   {
            path:'/actividad2',
            name:'actividad2',
            component: actividad2,
          }, */
      {
        path: "/evaluacion",
        name: "evaluacion",
        component: evaluacion,
      },
      {
        path: "/creditos",
        name: "creditos",
        component: creditos,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
