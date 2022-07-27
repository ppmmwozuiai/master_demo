# 环境
* windows10
* umi@3.x
* umi-plugin-qiankun@latest
* qiankun@latest

# config/config.ts配置

```
...
  qiankun: {
    master: {
      sandbox: true,
      apps: [
        {
          name: 'app1',
          entry: '//localhost:17001',
        },
        {
          name: 'app2',
          entry: '//localhost:17002',
        },
      ],
    },
  },
...
```

# config/routes.ts配置
```
export default [
  { path: '/welcome', name: 'welcome', icon: 'smile', component: './Welcome' },
  { path: '/app1', name: 'app1', microApp: 'app1', microAppProps: { errorBoundary: () => '错啦' } },
  { path: '/app2', name: 'app2', microApp: 'app2', microAppProps: { errorBoundary: () => '错啦' } },
  { path: '/', redirect: '/app1' },
  {
    component: './404',
  },
];

```
