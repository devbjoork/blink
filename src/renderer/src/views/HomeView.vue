<script setup lang="ts">
import ProjectSidebar from '@renderer/components/ProjectSidebar.vue';
import ProjectHeader from '@renderer/components/ProjectHeader.vue';
import ProjectIntroSection from '@renderer/components/ProjectIntroSection.vue';
</script>

<template>
  <div class="home">
    <ProjectSidebar />
    <div class="content-section">
      <ProjectHeader />
      <ProjectIntroSection />
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  .content-section {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>
