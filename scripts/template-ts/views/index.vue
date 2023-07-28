<template>
  <van-nav-bar title="首页" left-text="返回" right-text="按钮" left-arrow />
</template>

<script setup lang="ts" >
import { ref } from 'vue';
import { useAppStore } from '../store'
const appStore = useAppStore();
console.log(appStore.app)
</script>
<script  lang="ts">
export default {
  name: 'pageIndex'
}
</script>
<style lang="less" scoped>
.pxtovw {
  margin: 16px auto 0px;
  width: 200px;
  text-align: center;
}
</style>
