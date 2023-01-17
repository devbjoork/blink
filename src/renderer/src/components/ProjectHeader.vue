<script setup lang="ts"></script>

<template>
  <div class="header">
    <div class="left">
      <div>Items:</div>
    </div>
    <div class="right">
      <input type="text" name="" id="">
      <button>Sort</button>
      <button>Create</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  .left {}
  .right {
    input {
      background: none;
      border: 1px solid #3c3836;
      padding: 0.5rem 1rem;
      color: #fbf1c7;
      font-size: 0.85rem;
    }

    button {
      margin-left: 1rem;
      background: none;
      color: inherit;
      border: 1px solid #3c3836;
      padding: 0.5rem 1rem;
    }
  }
}
</style>
