/**
 * @description：表单配置
 */
import { IVAppletComponent } from '../typings/v-applet-component'

export const baseComponents: IVAppletComponent[] = [
  {
    component: 'GoodsList',
    label: '商品列表',
    icon: 'ep:goods',
    componentProps: {},
  },
  {
    component: 'InputCountDown',
    label: '倒计时输入',
    icon: 'line-md:iconify2',
    componentProps: {},
  },
  {
    component: 'IconPicker',
    label: '图标选择器',
    icon: 'line-md:iconify2',
    componentProps: {},
  },
  {
    component: 'StrengthMeter',
    label: '密码强度',
    icon: 'wpf:password1',
    componentProps: {},
  },
  {
    component: 'AutoComplete',
    label: '自动完成',
    icon: 'wpf:password1',
    componentProps: {
      placeholder: '请输入正则表达式',
      options: [
        {
          value: '/^(?:(?:\\+|00)86)?1[3-9]\\d{9}$/',
          label: '手机号码',
        },
        {
          value: '/^((ht|f)tps?:\\/\\/)?[\\w-]+(\\.[\\w-]+)+:\\d{1,5}\\/?$/',
          label: '网址带端口号',
        },
      ],
    },
  },
  {
    component: 'Divider',
    label: '分割线',
    icon: 'radix-icons:divider-horizontal',
    componentProps: {
      orientation: 'center',
      dashed: true,
    },
  },
  {
    component: 'Checkbox',
    label: '复选框',
    icon: 'ant-design:check-circle-outlined',
  },
]
