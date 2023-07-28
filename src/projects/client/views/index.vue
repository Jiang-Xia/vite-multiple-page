<template>
  <van-nav-bar title="首页" left-text="返回" right-text="按钮" left-arrow />
  <van-form>
    <van-field name="rate" label="评分">
      <template #input>
        <van-rate v-model="rate" />
      </template>
    </van-field>
    <van-field name="slider" label="滑块">
      <template #input>
        <van-slider v-model="slider" />
      </template>
    </van-field>
    <div class="pxtovw">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
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
const slider = ref(40)
const rate = ref(4)
</script>
<style lang="less" scoped>
.pxtovw {
  margin: 16px auto 0px;
  width: 200px;
  text-align: center;
}
</style>
