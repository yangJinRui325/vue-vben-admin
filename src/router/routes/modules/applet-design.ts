import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'

const appletDesign: AppRouteModule = {
  path: '/applet-design',
  name: 'appletDesign',
  component: LAYOUT,
  redirect: '/applet-design/index',
  meta: {
    hideChildrenInMenu: true,
    orderNo: 100,
    icon: 'ion:build-outline',
    title: '小程序设计',
  },
  children: [
    {
      path: 'index',
      name: 'appletDesignPage',
      component: () => import('/@/views/applet-design/index.vue'),
      meta: {
        // affix: true,
        title: '小程序设计',
        hideMenu: true,
      },
    },
  ],
}

export default appletDesign
