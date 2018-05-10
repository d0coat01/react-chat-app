const saveUser = (username) => {
  if(!username) return null;
  sessionStorage.setItem('username', username);
  return username;
}

export default saveUser;
