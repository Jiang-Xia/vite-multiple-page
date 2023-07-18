<template>
  <h3>首页 {{ appStore.app }}</h3>
</template>

<script setup lang="ts" >
  import {useAppStore} from '@/store'
  const appStore = useAppStore();
  console.log(appStore.app)
</script>
<script  lang="ts">
export default {
  name: 'pageIndex'
}
</script>
<style lang="less" scoped></style>
