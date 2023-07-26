<!--
 * @Description: 中间表单布局面板
 * https://github.com/SortableJS/vue.draggable.next/issues/138
-->
<template>
  <div class="applet-design-container">
    <div class="draggable-box">
      <draggable
        class="list-main ant-row"
        group="form-draggable"
        :component-data="{ name: 'list', tag: 'div', type: 'transition-group' }"
        ghostClass="moving"
        :animation="180"
        handle=".drag-move"
        v-model="appletConfig.schemas"
        item-key="key"
        @add="addItem"
        @start="handleDragStart"
      >
        <template #item="{ element }">
          <div>{{ element }}</div>
        </template>
      </draggable>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { cloneDeep } from 'lodash-es'
  import draggable from 'vuedraggable'

  import { useAppletDesignState } from '../hooks/useAppletDesignState'
  const { appletConfig } = useAppletDesignState()

  const emit = defineEmits(['handleSetSelectItem'])

  /**
   * 拖拽完成事件
   * @param newIndex
   */
  const addItem = ({ newIndex }: any) => {
    appletConfig.value.schemas = appletConfig.value.schemas || []

    const schemas = appletConfig.value.schemas
    schemas[newIndex] = cloneDeep(schemas[newIndex])
    emit('handleSetSelectItem', schemas[newIndex])
  }

  /**
   * 拖拽开始事件
   * @param e {Object} 事件对象
   */
  const handleDragStart = (e: any) => {
    emit('handleSetSelectItem', appletConfig.value.schemas[e.oldIndex])
  }
</script>

<style lang="less" scoped>
  @import url('../styles/variable.less');
  @import url('../styles/drag.less');

  .applet-design-container {
    position: relative;
    width: 377px;
    min-height: 669px;
    border: 1px solid #ccc;
    margin: 0 auto;
  }
</style>
