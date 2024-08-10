export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: '@/pages/Home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: '@/pages/Access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: '@/pages/Table',
  },
  // 子路由嵌套写法
  {
    name: ' 创作者中心',
    path: '/creator',
    routes: [
      {
        path: '/creator/content',
        component: '@/pages/Creator/Content',
        name: '我的创作',
      },
      {
        path: '/creator/article',
        component: '@/pages/Creator/Article',
        name: '文章管理',
      },
      {
        path: '/creator/column',
        component: '@/pages/Creator/Column',
        name: '专栏管理',
      },
    ],
  },
  {
    path: '/editor',
    layout: false,
    component: '@/pages/Editor',
  },
  {
    path: '/upload',
    name: '上传文件',
    component: '@/pages/Upload',
  },
];
