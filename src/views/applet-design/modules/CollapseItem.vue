<template>
  <div :class="prefixCls">
    <draggable
      tag="ul"
      :model-value="list"
      v-bind="{
        group: { name: 'form-draggable', pull: 'clone', put: false },
        sort: false,
        clone: cloneItem,
        animation: 180,
        ghostClass: 'moving',
      }"
      item-key="type"
      @start="handleStart($event, list)"
      @add="handleAdd"
    >
      <template #item="{ element, index }">
        <li
          class="bs-box text-ellipsis"
          @dragstart="$emit('add-attrs', list, index)"
          @click="$emit('handle-list-push', element)"
        >
          <Icon :icon="element.icon" />
          {{ element.label }}
        </li>
      </template>
    </draggable>
  </div>
</template>

<script lang="ts" setup>
  import draggable from 'vuedraggable'
  import { Icon } from '/@/components/Icon'
  import { IVAppletComponent } from '../typings/v-applet-component'

  import { useDesign } from '/@/hooks/web/useDesign'
  const { prefixCls } = useDesign('applet-item-slider')

  interface Props {
    list: IVAppletComponent[]
    handleListPush: (a: IVAppletComponent) => void
  }
  const props = defineProps<Props>()
  console.log(props.list)

  const emit = defineEmits(['start'])
  const handleStart = (e: any, list1: IVAppletComponent[]) => {
    emit('start', list1[e.oldIndex].component)
  }
  const handleAdd = (e: any) => {
    console.log(e)
  }

  const cloneItem = (one: IVAppletComponent) => {
    return props.handleListPush(one)
  }
</script>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-applet-item-slider';

  @import url('../styles/variable.less');

  .@{prefix-cls} {
    ul {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 0;
      padding: 5px;
      list-style: none;
      // background: #efefef;

      li {
        width: calc(50% - 6px);
        height: 36px;
        margin: 2.7px;
        padding: 8px 12px;
        transition: all 0.3s;
        border: 1px solid @border-color;
        border-radius: 3px;
        line-height: 20px;
        cursor: move;

        &:hover {
          position: relative;
          border: 1px solid @primary-color;
          // z-index: 1;
          box-shadow: 0 2px 6px @primary-color;
          color: @primary-color;
        }
      }
    }

    svg {
      display: inline !important;
    }
  }
</style>
