import { defineStore } from 'pinia';
const useAppStore = defineStore('app', {
  state: () => ({app:'base store'  }),

  getters: {
  },
  actions: {
  },
});

export default useAppStore;
