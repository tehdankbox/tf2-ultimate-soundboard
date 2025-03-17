const routes = [
  {
    path: '/index/:activeScreen',
    component: () => import('layouts/MainLayout.vue'),
    props: true,
    children: [
      { path: '', component: () => import('src/pages/IndexPage.vue'), props: true }
    ],
  },
  {
    path: '/config',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ConfigPage.vue'), }
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
