const routes = [
  {
    path: '/',
    redirect: { path: "/index/scout" },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/index/:activeScreen', component: () => import('src/pages/IndexPage.vue'), props: true },
      { path: '/config', component: () => import('pages/ConfigPage.vue') },
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
