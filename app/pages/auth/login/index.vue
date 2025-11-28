<template>
  <div class="login-container">
    <div class="login-card">
      <h1 class="login-title">Silahkan Login</h1>
      <form @submit.prevent="Login" class="login-form">
        <div class="input-group">
          <i class="fa fa-user input-icon" aria-hidden="true"></i>
          <input
            type="text"
            placeholder="Nama Pengguna"
            v-model="username"
            required
          />
        </div>
        <div class="input-group">
          <i class="fa fa-lock input-icon" aria-hidden="true"></i>
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            required
          />
        </div>
        <button :disabled="loading" type="submit" class="login-button">
          <i v-if="loading" class="fa fa-spinner fa-spin" style="margin-right:8px;" aria-hidden="true"></i> Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
// using Font Awesome CSS classes instead of vue-icons components
import Swal from 'sweetalert2'
import type { User } from '~/types/user'

const { checkAuth } = useAuth()
const { token } = useToken()
const { setUser } = useUserStore()

if (token.value) {
  navigateTo('/')
}

// Reactive state
const username = ref('')
const password = ref('')
const loading = ref(false)

// Check authentication on mounted
onMounted(async () => {
  const isAuthenticated = await checkAuth();
  if (isAuthenticated) {
    navigateTo('/auth/login')
  }
})

// Login function
const Login = async (e?: Event) => {
  if (e) {
    e.preventDefault()
  }

  try {
    loading.value = true

    interface ApiResponse {
      user:User,
      token:string,
    }
    
    const { data,error } = await useFetch<ApiResponse>(`${url}/api/login`, {
      method: 'POST',
      body: {
        username: username.value,
        password: password.value
      }
    })

    if (error.value) {
      loading.value = false;
      if (error.value.statusCode===500) {
        Swal.fire({
          icon:"error",
          title:"Error Server"
        });

        return;
      } else {
        Swal.fire({
          icon:"error",
          title:"Username atau Password Salah"
        });

        return;
      }
    }

    token.value = data.value?data.value.token:null;
    setUser(data.value?data.value.user:null);

    // const token = data.token
    // localStorage.setItem('token', token)
    // loading.value = false

    // router.push('/')
    loading.value = false;
    navigateTo('/')
  } catch (error: any) {
    loading.value = false
  }
}
</script>

<style scoped>
    @import '~/assets/styles/auth/LoginPage.css';
</style>