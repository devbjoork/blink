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
    <span>Footer here</span>
    <button @click="changeOrientation()">O</button>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  height: 26px;
  background-color: coral;
}
</style>
