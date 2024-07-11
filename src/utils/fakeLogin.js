const fakeLogin = async (username, password) => {
  if (username === 'admin' && password === 'admin') {
      return { success: true };
  }
  return { success: false, message: 'Credenciais inválidas' };
};

export default fakeLogin;