<template>
  <ul class="good-list-box">
    <li :class="`good-item list-style-${listStyle}`">
      <img src="https://fakeimg.pl/350x200/?text=World&font=lobster" />
    </li>
  </ul>
</template>
<!-- 'index' -->
<script lang="ts" setup>
  import { goodsConfig } from './configs'

  const { listStyle } = goodsConfig.cardProps
</script>
<style lang="less" scoped></style>
