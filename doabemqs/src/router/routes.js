
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'casos', component: () => import('pages/Casos.vue') },
      { path: 'cadpfisica', component: () => import('pages/CadPfisica.vue') },
      { path: 'cadjuridica', component: () => import('pages/CadJuridica.vue') },
      { path: 'cadbeneficiario', component: () => import('pages/CadBeneficiario.vue') }
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
