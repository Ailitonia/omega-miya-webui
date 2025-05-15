import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token', {
  state: () => ({
    globalToken: localStorage.getItem('omega_token') || '',
  }),
  actions: {
    updateToken(token: string) {
      this.globalToken = token
      localStorage.setItem('omega_token', token)
    },
  },
})
