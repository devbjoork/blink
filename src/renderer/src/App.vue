<script setup lang="ts">
import HeaderToolbar from './components/HeaderToolbar.vue';
import SideToolbar from './components/SideToolbar.vue';
import AppContainer from './components/AppContainer.vue';
import FooterToolbar from './components/FooterToolbar.vue';
</script>

<template>
  <div class="container">
    <HeaderToolbar />
    <div class="main">
      <SideToolbar />
      <AppContainer />
    </div>
    <FooterToolbar />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.main {
  display: flex;
  flex: 1;
}
</style>
