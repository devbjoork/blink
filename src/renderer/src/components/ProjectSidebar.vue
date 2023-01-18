<script setup lang="ts"></script>

<template>
  <div class="side">
    <div class="side-title">Your Projects</div>
    <section class="section-header">
      <span>Projects (1)</span>
      <button>+</button>
    </section>
    <section class="section-content section-active">General</section>
  </div>
</template>

<style scoped lang="scss">
.side {
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: #1d2021;
  font-size: smaller;

  .side-title {
    padding: 0.5rem 0.7rem;
    border-bottom: 1px solid #3c3836;
    font-weight: lighter;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    font-weight: lighter;
    padding: 0.3rem 0.7rem;

    button {
      background: none;
      border: none;
      color: inherit;
    }
  }

  .section-content {
    font-weight: lighter;
    padding: 0.3rem 0.7rem;
  }

  .section-active {
    background-color: #282828;
  }
}
</style>
