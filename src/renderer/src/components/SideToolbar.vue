<script setup lang="ts"></script>

<template>
  <div class="sidebar">
    <button>1</button>
    <button>2</button>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  width: 50px;
  box-sizing: border-box;
  border-right: 1px solid #3c3836;
  button {
    height: 50px;
    background: none;
    border: none;
    color: inherit;
  }
}
</style>
