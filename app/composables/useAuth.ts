import type { User } from "~/types/user";

export const useAuth = () => {
  const { token } = useToken()

  const { setUser } = useUserStore()
  // Auth check function
  const checkAuth = async (): Promise<boolean> => {
    try {
      if (!token.value) return false

      // Implement your auth validation logic here
      // This should call your backend to validate the token
      const { error,data } = await useFetch<{data:User}>('/api/auth/', {
        headers: {
          'Authorization': `Bearer ${token.value}`
        }
      })
      
      if (error.value) {
        token.value = null;
        console.error("error checkAuth",error.value);
        setUser(null)
        return false;
      }

      setUser(data.value?.data|| null);
      return true;
    } catch (error) {
      console.error('Auth check error:', error)
      token.value=null;
      return false
    }
  }

  const logout = () => {
    token.value = null;
    navigateTo('/login');
  };

  return {
    checkAuth,
    logout
  };
};