const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'typography', component: () => import('pages/Typograpy.vue') },
      { path: 'colors', component: () => import('pages/Colors.vue') },
      { path: 'spacing', component: () => import('pages/Spacing.vue') },
      { path: 'breakpoints', component: () => import('pages/Breakpoints.vue') },
      {
        path: 'classes-variables',
        component: () => import('pages/ClassesVariables.vue'),
      },
      { path: 'flex-grid-1', component: () => import('pages/FlexGrid1.vue') },
      {
        path: 'profile',
        component: () => import('pages/profile/ProfilePage.vue'),
        children: [
          {
            path: '',
            component: () => import('pages/profile/ProfilePosts.vue'),
          },
          {
            path: 'saved',
            component: () => import('pages/profile/ProfileSaved.vue'),
          },
          {
            path: 'tagged',
            component: () => import('pages/profile/ProfileTagged.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/sub',
    component: () => import('layouts/SubLayout.vue'),
    children: [
      { path: '', component: () => import('pages/sub/IndexPage.vue') },
      { path: 'sub-page-1', component: () => import('pages/sub/SubPage1.vue') },
      { path: 'sub-page-2', component: () => import('pages/sub/SubPage2.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
