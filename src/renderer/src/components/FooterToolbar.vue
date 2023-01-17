<script setup lang="ts">
import { useAppStore } from '@renderer/stores/app';
import { useRouter } from 'vue-router';

const store = useAppStore();
const router = useRouter();

function changeOrientation(): void {
  store.orientation === 'horizontal'
    ? store.setOrientation('vertical')
    : store.setOrientation('horizontal');
  console.log(store.orientation);
}

/** temp */
function navMain(): void {
  router.push({ path: '/home' });
}

function navProject(): void {
  router.push({ path: '/project' });
}
</script>

<template>
  <footer>
    <button @click="changeOrientation()"></button>
    <button @click="navMain()"></button>
    <button @click="navProject()"></button>
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
