import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/produtos',
    name: 'produtos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProdutosView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    component: () => import(/* webpackChunkName: "about" */ '../views/CarrinhoView.vue')
  },
  {
    path: '/produto/:id',
    name: 'produto',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProdutoView.vue')
  },
  {
    path: '/produtos/',
    name: 'produtos',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProdutosView.vue')
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroView.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserView.vue')
  },
  {
    path: '/finalizar_compra',
    name: 'finalizar_compra',
    component: () => import(/* webpackChunkName: "about" */ '../views/FinalizarCompraView.vue')
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: () => import(/* webpackChunkName: "about" */ '../views/PedidosView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
