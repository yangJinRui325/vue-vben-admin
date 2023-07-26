<template>
  <PageWrapper title="小程序设计" content="拖拽左侧控件到中间部位配置展示">
    <Layout>
      <LayoutSider
        :class="`left ${prefixCls}-sider`"
        collapsible
        collapsedWidth="0"
        width="270"
        :zeroWidthTriggerStyle="{
          'margin-top': '-70px',
          'background-color': 'gray',
        }"
        breakpoint="md"
      >
        <CollapseContainer title="基础控件">
          <CollapseItem
            :list="baseComponents"
            :handleListPush="handleListPushDrag"
            @add-attrs="handleAddAttrs"
            @handle-list-push="handleListPush"
          />
        </CollapseContainer>
      </LayoutSider>
      <LayoutContent>
        <AppletComponentPanel :data="appletConfig" @handle-set-select-item="handleSetSelectItem" />
      </LayoutContent>
      <LayoutSider
        :class="`right ${prefixCls}-sider`"
        collapsible
        collapsedWidth="0"
        width="450"
        :zeroWidthTriggerStyle="{
          'margin-top': '-70px',
          'background-color': 'gray',
        }"
        breakpoint="md"
      >
        自定义配置模板
      </LayoutSider>
    </Layout>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { ref, provide, Ref } from 'vue'
  import { cloneDeep } from 'lodash-es'

  import { PageWrapper } from '/@/components/Page'
  import { CollapseContainer } from '/@/components/Container/index'
  import { useDesign } from '/@/hooks/web/useDesign'
  import { Layout, LayoutSider, LayoutContent } from 'ant-design-vue'

  import CollapseItem from './modules/CollapseItem.vue'
  import AppletComponentPanel from './modules/AppletComponentPanel.vue'

  import { baseComponents } from './core/itemDesignConfig'

  import { generateKey } from './utils'

  import { IVAppletComponent, IVAppletConfig, PropsTabKey } from './typings/v-applet-component'

  const { prefixCls } = useDesign('applet')

  const appletConfig = ref<IVAppletConfig>({
    schemas: [],
    currentItem: {
      component: '',
      componentProps: {},
    },
    activeKey: 1,
  })

  // 把表单配置项注入到子组件中，子组件可通过inject获取，获取到的数据为响应式
  provide<Ref<IVAppletConfig>>('appletConfig', appletConfig)

  /**
   * 添加属性
   * @param schemas
   * @param index
   */
  const handleAddAttrs = (_formItems: IVAppletComponent[], _index: number) => {}

  // 添加唯一key
  const handleListPushDrag = (item: IVAppletComponent) => {
    const formItem = cloneDeep(item)
    generateKey(formItem)
    return formItem
  }

  /**
   * 单击控件时添加到面板中
   * @param item {IVAppletComponent} 当前点击的组件
   */
  const handleListPush = (item: IVAppletComponent) => {
    console.log('handleListPush', item)
    const formItem = cloneDeep(item)
    generateKey(formItem)
    if (!appletConfig.value.currentItem?.key) {
      handleSetSelectItem(formItem)
      appletConfig.value.schemas && appletConfig.value.schemas.push(formItem)

      return
    }
  }

  /**
   * 选中表单项
   * @param schema 当前选中的表单项
   */
  const handleSetSelectItem = (schema: IVAppletComponent) => {
    appletConfig.value.currentItem = schema
    handleChangePropsTabs(
      schema.key ? (appletConfig.value.activeKey! === 1 ? 2 : appletConfig.value.activeKey!) : 1,
    )
  }

  /**
   * 切换属性面板
   * @param key
   */
  const handleChangePropsTabs = (key: PropsTabKey) => {
    appletConfig.value.activeKey = key
  }
</script>

<style lang="less">
  .fenxiang-page-wrapper-content {
    height: 100%;
  }
  .ant-layout-sider {
    background: transparent;
  }
</style>
