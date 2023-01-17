<script setup lang="ts"></script>

<template>
  <div class="panel">
    <select id="method" name="">
      <option value="GET">GET</option>
      <option value="POST">POST</option>
    </select>
    <input type="text" name="" placeholder="https://example.com" />
    <button class="left">Send</button>
    <button class="right">></button>
  </div>
</template>

<style scoped lang="scss">
.panel {
  display: flex;
  width: 100%;
  height: 2.5rem;
  border-bottom: 1px solid #3c3836;
  box-sizing: border-box;

  select {
    background: none;
    border: none;
    color: #b8bb26;
    padding-left: 0.3rem;
    width: 6rem;
  }

  select:focus {
    outline: none;
  }

  input {
    flex: 1;
    background: none;
    border: none;
    padding-left: 0.5rem;
    color: #fbf1c7;
    font-size: 0.85rem;
  }

  input:focus {
    outline: none;
  }

  button {
    margin-top: 6px;
    margin-bottom: 6px;
    background-color: #fe8019;
    color: #1d2021;
    border: none;
    // padding: 0 0.5rem;
    border-left: 1px solid #3c3836;
    box-shadow: inset 0 0 5px #a7520d;
    font-size: 0.85rem;
  }

  .left {
    border-top-left-radius: 0.75rem;
    border-bottom-left-radius: 0.75rem;
    padding-left: 1rem;
    padding-right: 0.5rem;
  }

  .right {
    margin-right: 0.5rem;
    border-top-right-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
    padding-right: 1rem;
    padding-left: 0.5rem;
  }
}
</style>
