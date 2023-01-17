<script setup lang="ts">
import HeaderToolbar from './components/HeaderToolbar.vue';
import SideToolbar from './components/SideToolbar.vue';
import FooterToolbar from './components/FooterToolbar.vue';
</script>

<template>
  <div class="container">
    <HeaderToolbar />
    <div class="main">
      <SideToolbar />
      <router-view></router-view>
    </div>
    <FooterToolbar />
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  color: #fbf1c7;
  font-family: 'Segoe WPC', 'Segoe UI', sans-serif;
  background-color: #1d2021;

  .main {
    display: flex;
    flex: 1;
  }
}
</style>
