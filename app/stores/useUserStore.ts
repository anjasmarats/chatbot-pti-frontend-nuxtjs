import { defineStore } from 'pinia'
import type { User } from '~/types/user'

// stores/user.ts
export const useUserStore = defineStore('user', {
  state: () => ({
    user:null as User | null,
    // username: "" as String,
    // email:"" as String,
    // password:"" as String,
    // isLoggedIn: false,
    // loading: false
  }),

  actions: {
    setUser(userData: User | null) {
        if (userData) {
            this.user = userData
        }
      // this.username = userData.username
      // this.email = userData.email,
      // this.password = userData.password
    },

    clearUser() {
      this.user = null;
    },

    // async verifyToken(token: string) {
    //   this.loading = true
    //   try {
    //     // Gunakan type assertion atau generic type
    //     const response = await $fetch<AuthResponse>('/api/auth/google/verify', {
    //       method: 'POST',
    //       body: { token }
    //     })
        
    //     this.setUser(response.user)
    //     return response
    //   } catch (error) {
    //     this.clearUser()
    //     throw error
    //   } finally {
    //     this.loading = false
    //   }
    // }
  }
})