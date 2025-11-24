<template>
  <div class="login-container">
    <div class="login-card">
      <h1 class="login-title">Silahkan Login</h1>
      <form @submit.prevent="Login" class="login-form">
        <div class="input-group">
          <FaUser class="input-icon" />
          <input
            type="text"
            placeholder="Nama Pengguna"
            v-model="username"
            required
          />
        </div>
        <div class="input-group">
          <FaLock class="input-icon" />
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            required
          />
        </div>
        <button :disabled="loading" type="submit" class="login-button">
          <CgSpinner v-if="loading" :size="20" /> Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { FaUser, FaLock } from 'vue-icons/fa'
// import { CgSpinner } from 'vue-icons/cg'
import Swal from 'sweetalert2'

// Reactive state
const username = ref('')
const password = ref('')
const loading = ref(false)

// Router
const router = useRouter()

// Auth check function
const checkAuth = async (): Promise<boolean> => {
  try {
    const token = localStorage.getItem('token')
    if (!token) return false

    // Implement your auth validation logic here
    // This should call your backend to validate the token
    const { data } = await $fetch<any>('/api/auth/validate', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    
    return data?.valid || false
  } catch (error) {
    console.error('Auth check error:', error)
    return false
  }
}

// Check authentication on mounted
onMounted(async () => {
  const isAuthenticated = await checkAuth()
  if (isAuthenticated) {
    router.push('/')
  }
})

// Login function
const Login = async (e?: Event) => {
  if (e) {
    e.preventDefault()
  }

  try {
    loading.value = true
    
    const { data } = await $fetch<any>('/api/login', {
      method: 'POST',
      body: {
        username: username.value,
        password: password.value
      }
    })

    // const token = data.token
    // localStorage.setItem('token', token)
    // loading.value = false

    // router.push('/')
  } catch (error: any) {
    loading.value = false
    
    if (error.response) {
      if (error.response.status === 404) {
        await Swal.fire({
          icon: 'error',
          title: 'Nama pengguna atau password salah'
        })
      } else if (error.response.status === 500) {
        await Swal.fire({
          icon: 'error',
          title: 'Error Server'
        })
      } else {
        console.error('error', error)
        await Swal.fire({
          icon: 'error',
          title: 'Error'
        })
      }
    } else {
      console.error('error', error)
      await Swal.fire({
        icon: 'error',
        title: 'Terjadi kesalahan'
      })
    }
  }
}
</script>

<style scoped>
    @import '~/assets/styles/auth/LoginPage.css';
</style>