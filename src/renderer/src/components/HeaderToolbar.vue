<script setup lang="ts"></script>

<template>
  <header>
    <div class="item">File</div>
    <div class="item">Edit</div>
    <div class="item">View</div>
    <div class="item">Help</div>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding-left: 1rem;
  line-height: 22px;
  font-size: 13px;
  height: 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #3c3836;
}
</style>
