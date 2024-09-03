
const routes = [
  {
    name: 'Index',
    path: '/',
    redirect: { path: "/index/scout" },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/index/:activeScreen', component: () => import('pages/Index.vue'), props: true },
      { path: '/config', component: () => import('pages/Config.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
