import { defineStore } from 'pinia';
const useAppStore = defineStore('app', {
  state: () => ({ app:'new module' }),

  getters: {
  },
  actions: {
  },
});

export default useAppStore;
