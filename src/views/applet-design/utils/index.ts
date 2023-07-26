import { uniqueId } from 'lodash-es'
import { IVAppletComponent } from '../typings/v-applet-component'

/**
 * 生成key
 * @param [formItem] 需要生成 key 的控件，可选，如果不传，默认返回一个唯一 key
 * @returns {string|boolean} 返回一个唯一 id 或者 false
 */
export function generateKey(formItem?: IVAppletComponent): string | boolean {
  if (formItem && formItem.component) {
    const key = uniqueId(`${toLine(formItem.component)}_`)
    formItem.key = key

    return true
  }
  return uniqueId('key_')
}

/**
 * 驼峰转下划线
 * @param str
 */
export function toLine(str: string) {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase()
}
