<template>
  <van-config-provider :theme="theme">
    <router-view></router-view>
  </van-config-provider>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type {ConfigProviderTheme } from 'vant'
const theme = ref<ConfigProviderTheme>('light');

setTimeout(() => {
  theme.value = 'dark';
}, 3000);

</script>
<style lang="less"></style>
