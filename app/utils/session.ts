export const useToken =()=>{
  const token = useCookie<string | null>('token', {
    secure: true,
    sameSite: 'strict',
    maxAge: 1800 // 30 minutes
  });

  return {
    token
  };
}