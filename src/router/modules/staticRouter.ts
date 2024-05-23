import type { RouteRecordRaw } from 'vue-router'

export const staticRouter: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/layouts/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          icon: 'HomeOutlined',
        },
      },
    ],
  },

  // {
  //   path: '/screen',
  //   name: 'Screen',
  //   component: () => import('@/views/screen/index.vue'),
  //   meta: {
  //     title: '数据大屏',
  //     icon: 'FundProjectionScreenOutlined',
  //   },
  // },
  // {
  //   path: '/acl',
  //   name: 'Acl',
  //   component: () => import('@/layouts/index.vue'),
  //   redirect: '/user',
  //   meta: {
  //     title: '权限管理',
  //     icon: 'LockOutlined',
  //   },
  //   children: [
  //     {
  //       path: '/user',
  //       name: 'User',
  //       component: () => import('@/views/acl/user/index.vue'),
  //       meta: {
  //         title: '用户管理',
  //         icon: 'UserOutlined',
  //       },
  //     },
  //     {
  //       path: '/role',
  //       name: 'Role',
  //       component: () => import('@/views/acl/role/index.vue'),
  //       meta: {
  //         title: '角色管理',
  //         icon: 'UsergroupAddOutlined',
  //       },
  //     },
  //     {
  //       path: '/menu',
  //       name: 'Menu',
  //       component: () => import('@/views/acl/menu/index.vue'),
  //       meta: {
  //         title: '菜单管理',
  //         icon: 'AppstoreAddOutlined',
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/form',
  //   name: 'Form',
  //   component: () => import('@/layouts/index.vue'),
  //   redirect: '/basic-form',
  //   meta: {
  //     title: '表单页',
  //     icon: 'FormOutlined',
  //   },
  //   children: [
  //     {
  //       path: '/basic-form',
  //       name: 'BasicForm',
  //       component: () => import('@/views/form/basic/index.vue'),
  //       meta: {
  //         title: '基础表单',
  //         icon: 'FormOutlined',
  //       },
  //     },
  //     {
  //       path: '/dynamicRouter-form',
  //       name: 'DynamicForm',
  //       component: () => import('@/views/form/dynamic/index.vue'),
  //       meta: {
  //         title: '动态表单',
  //         icon: 'FormOutlined',
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/table',
  //   name: 'Table',
  //   component: () => import('@/layouts/index.vue'),
  //   redirect: '/basic-table',
  //   meta: {
  //     title: '表格页',
  //     icon: 'TableOutlined',
  //   },
  //   children: [
  //     {
  //       path: '/basic-table',
  //       name: 'BasicTable',
  //       component: () => import('@/views/table/basic/index.vue'),
  //       meta: {
  //         title: '基础表格',
  //         icon: 'TableOutlined',
  //       },
  //     },
  //     {
  //       path: '/tree-table',
  //       name: 'TreeTable',
  //       component: () => import('@/views/table/tree/index.vue'),
  //       meta: {
  //         title: '树形表格',
  //         icon: 'TableOutlined',
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/instruction',
  //   name: 'Instruction',
  //   component: () => import('@/layouts/index.vue'),
  //   redirect: '/antiShake',
  //   meta: {
  //     title: '自定义指令',
  //     icon: 'CodeOutlined',
  //   },
  //   children: [
  //     {
  //       path: '/antiShake',
  //       name: 'AntiShake',
  //       component: () => import('@/views/instruction/antiShake/index.vue'),
  //       meta: {
  //         title: '防抖指令',
  //         icon: 'CodeOutlined',
  //       },
  //     },
  //     {
  //       path: '/throttle',
  //       name: 'Throttle',
  //       component: () => import('@/views/instruction/throttle/index.vue'),
  //       meta: {
  //         title: '节流指令',
  //         icon: 'CodeOutlined',
  //       },
  //     },
  //     {
  //       path: '/drag',
  //       name: 'Drag',
  //       component: () => import('@/views/instruction/drag/index.vue'),
  //       meta: {
  //         title: '拖拽指令',
  //         icon: 'CodeOutlined',
  //       },
  //     },
  //     {
  //       path: '/copy',
  //       name: 'Copy',
  //       component: () => import('@/views/instruction/copy/index.vue'),
  //       meta: {
  //         title: '复制指令',
  //         icon: 'CodeOutlined',
  //       },
  //     },
  //     {
  //       path: '/watermark',
  //       name: 'Watermark',
  //       component: () => import('@/views/instruction/watermark/index.vue'),
  //       meta: {
  //         title: '水印指令',
  //         icon: 'CodeOutlined',
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: '/assembly',
  //   name: 'Assembly',
  //   component: () => import('@/layouts/index.vue'),
  //   redirect: '/wangEditor',
  //   meta: {
  //     title: '常用组件',
  //     icon: 'AppstoreOutlined',
  //   },

  //   children: [
  //     {
  //       path: '/richText',
  //       name: 'RichText',
  //       component: () => import('@/views/assembly/richText/index.vue'),
  //       meta: {
  //         title: '富文本编辑器',
  //         icon: 'CodeOutlined',
  //       },
  //     },
  //     {
  //       path: '/draggable',
  //       name: 'Draggable',
  //       component: () => import('@/views/assembly/draggable/index.vue'),
  //       meta: {
  //         title: '可拖拽组件',
  //         icon: 'CodeOutlined',
  //       },
  //     },
  //     {
  //       path: '/guide',

  //       name: 'Guide',
  //       component: () => import('@/views/assembly/guide/index.vue'),
  //       meta: {
  //         title: '引导页',
  //         icon: 'CodeOutlined',
  //       },
  //     },
  //     {
  //       path: '/uploadFile',

  //       name: 'UploadFile',
  //       component: () => import('@/views/assembly/uploadFile/index.vue'),
  //       meta: {
  //         title: '文件上传',
  //         icon: 'UploadOutlined',
  //       },
  //     },
  // {
  //   path: '/svgIcon',
  //   name: 'SvgIcon',
  //   component: () => import('@/views/assembly/svgIcon/index.vue'),
  //   meta: {
  //     title: 'SVG图标',
  //     icon: 'CodeOutlined',
  //   },
  // },
  //   ],
  // },
  // {
  //   path: '/nested',
  //   name: 'Nested',
  //   component: () => import('@/layouts/index.vue'),
  //   redirect: '/menu1',
  //   meta: {
  //     title: '菜单嵌套',
  //     icon: 'AppstoreOutlined',
  //   },
  //   children: [
  //     {
  //       path: '/menu1',
  //       name: 'Menu1',
  //       component: () => import('@/views/nested/menu-1/index.vue'),
  //       meta: {
  //         title: '菜单1',
  //         icon: 'AppstoreOutlined',
  //       },
  //     },
  //     {
  //       path: '/menu2',
  //       name: 'Menu2',
  //       redirect: '/menu2-1',
  //       meta: {
  //         title: '菜单2',
  //         icon: 'AppstoreOutlined',
  //       },
  //       children: [
  //         {
  //           path: '/menu2-1',
  //           name: 'Menu2-1',
  //           component: () => import('@/views/nested/menu-2/menu-2-1/index.vue'),
  //           meta: {
  //             title: '菜单2-1',
  //             icon: 'AppstoreOutlined',
  //           },
  //         },
  //         {
  //           path: '/menu2-2',
  //           name: 'Menu2-2',
  //           redirect: '/menu2-2-1',
  //           meta: {
  //             title: '菜单2-2',
  //             icon: 'AppstoreOutlined',
  //           },
  //           children: [
  //             {
  //               path: '/menu2-2-1',
  //               name: 'Menu2-2-1',
  //               component: () =>
  //                 import('@/views/nested/menu-2/menu-2-2/menu-2-2-1/index.vue'),
  //               meta: {
  //                 title: '菜单2-2-1',
  //                 icon: 'AppstoreOutlined',
  //               },
  //             },
  //             {
  //               path: '/menu2-2-2',
  //               name: 'Menu2-2-2',
  //               component: () =>
  //                 import('@/views/nested/menu-2/menu-2-2/menu-2-2-2/index.vue'),
  //               meta: {
  //                 title: '菜单2-2-2',
  //                 icon: 'AppstoreOutlined',
  //               },
  //             },
  //             {
  //               path: '/menu2-2-3',
  //               name: 'Menu2-2-3',
  //               component: () =>
  //                 import('@/views/nested/menu-2/menu-2-2/menu-2-2-3/index.vue'),
  //               meta: {
  //                 title: '菜单2-2-3',
  //                 icon: 'AppstoreOutlined',
  //               },
  //             },
  //           ],
  //         },
  //         {
  //           path: '/menu2-3',
  //           name: 'Menu2-3',
  //           component: () => import('@/views/nested/menu-2/menu-2-3/index.vue'),
  //           meta: {
  //             title: '菜单2-3',
  //             icon: 'AppstoreOutlined',
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       path: '/menu3',
  //       name: 'Menu3',
  //       component: () => import('@/views/nested/menu-3/index.vue'),
  //       meta: {
  //         title: '菜单3',
  //         icon: 'AppstoreOutlined',
  //       },
  //     },
  //   ],
  // },
]

export const errorRouter: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    name: 'Any',
    redirect: '/404',
    meta: {
      hidden: true,
      title: '任意路由',
      icon: 'QuestionCircleOutlined',
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      hidden: true,
      title: '404',
      icon: 'QuestionCircleOutlined',
    },
  },
]
