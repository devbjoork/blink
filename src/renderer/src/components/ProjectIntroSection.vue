<script setup lang="ts"></script>

<template>
  <div class="intro">
    <div class="message">This project is empty. Create a resource to get started:</div>
    <div class="btn-group">
      <button>New Collection</button>
      <button>New API Spec</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin: 0 auto;

  .message {
    margin-bottom: 2rem;
  }

  .btn-group {
    display: flex;
    justify-content: space-evenly;

    button {
      background: none;
      color: inherit;
      border: 1px solid #3c3836;
      padding: 0.5rem 1rem;
    }
  }
}
</style>
