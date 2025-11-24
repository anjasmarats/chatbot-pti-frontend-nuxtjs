export const useAuth = () => {
  const checkAuth = async (): Promise<boolean> => {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
      const { data } = await $fetch<{data:any}>('/api/auth/validate', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return data.valid;
    } catch (error) {
      localStorage.removeItem('token');
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigateTo('/login');
  };

  return {
    checkAuth,
    logout
  };
};