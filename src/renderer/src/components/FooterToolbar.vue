<script setup lang="ts">
import { useAppStore } from '@renderer/stores/app';

const store = useAppStore();

function changeOrientation(): void {
  store.orientation === 'horizontal'
    ? store.setOrientation('vertical')
    : store.setOrientation('horizontal');
  console.log(store.orientation);
}
</script>

<template>
  <footer>
    <span></span>
    <button @click="changeOrientation()"></button>
  </footer>
</template>

<style scoped lang="scss">
footer {
  display: flex;
  height: 26px;
  box-sizing: border-box;
  border-top: 1px solid #3c3836;
}
</style>
