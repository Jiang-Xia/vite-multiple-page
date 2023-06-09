<template>
    <div class="content">
      <div class="result"> </div>
      <div class="operation-row">
        <button @click="back"> back </button>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
    import { useRouter } from 'vue-router';
  
    const router = useRouter();
    const back = () => {
      console.log(router.replace)
      router.replace('/');
    };
  </script>
  
  <style scoped lang="less">
    .content {
      // padding-top: 100px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -95px;
      margin-top: -121px;
      text-align: center;
    }
  </style>
  