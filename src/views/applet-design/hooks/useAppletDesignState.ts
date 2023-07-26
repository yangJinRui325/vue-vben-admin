import { inject, Ref } from 'vue'
import { IVAppletConfig } from '../typings/v-applet-component'

/**
 * 获取apletDesign状态
 */
export function useAppletDesignState() {
  const appletConfig = inject('appletConfig') as Ref<IVAppletConfig>
  // const formDesignMethods = inject('formDesignMethods') as IFormDesignMethods
  // return { formConfig, formDesignMethods }
  return { appletConfig }
}
