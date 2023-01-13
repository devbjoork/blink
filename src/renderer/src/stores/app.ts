import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('app', () => {
  const orientation = ref('horizontal');

  function setOrientation(o: string): void {
    orientation.value = o;
  }

  return {
    orientation,
    setOrientation
  };
});
