<script setup lang="ts">
defineProps({
  msg: {
    type: String,
    default: 'hello'
  }
})
</script>
<template>
  <div>{{ msg }}</div>
</template>
<style lang="less" scoped></style>
