export default [
  { path: '/welcome', name: 'welcome', icon: 'smile', component: './Welcome' },
  { path: '/app1', name: 'app1', microApp: 'app1', microAppProps: { errorBoundary: () => '错啦' } },
  { path: '/app2', name: 'app2', microApp: 'app2', microAppProps: { errorBoundary: () => '错啦' } },
  { path: '/', redirect: '/app1' },
  {
    component: './404',
  },
];
