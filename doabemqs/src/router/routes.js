const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'casos', component: () => import('pages/Casos.vue') },
      { path: 'sobre', component: () => import('pages/Sobre.vue') },
      { path: 'cadpessoa', component: () => import('pages/CadPessoa.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/Controle.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
