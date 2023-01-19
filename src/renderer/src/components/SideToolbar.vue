<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';

const router = useRouter();

function navTo(path: string): void {
  router.push(path);
}
</script>

<template>
  <div class="sidebar">
    <div class="group-top">
      <button @click="navTo('/home')">
        <Icon icon="uil:home-alt" height="24" />
      </button>
      <button @click="navTo('/project')">
        <Icon icon="uil:columns" height="24" />
      </button>
      <button>
        <Icon icon="uil:tachometer-fast" height="24" />
      </button>
    </div>
    <div class="group-bottom">
      <button><Icon icon="uil:setting" height="24" /></button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50px;
  box-sizing: border-box;
  border-right: 1px solid #3c3836;
  button {
    height: 50px;
    width: 49px;
    background: none;
    border: none;
    color: #665c54;
  }

  button:hover {
    color: #fbf1c7;
  }

  button:active {
    background-color: #3c3836;
  }
}
</style>
