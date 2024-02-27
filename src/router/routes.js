
const routes = [
  {
    path: '/',
    component: () => import('layouts/main.vue'),
    children: [
      { path: '', component: () => import('pages/landingPage.vue') }
    ]
  },

  
]

export default routes
