import { defineStore } from 'pinia';
import { ref } from 'vue';
// TODO 示例：./App.vue
export const useCounterStore = defineStore('counter', () => {
  const counter = ref(0);
  function increment() {
    counter.value++;
  }

  return { counter, increment };
});
