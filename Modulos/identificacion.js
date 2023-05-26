export function authenticateUser(username, password) {
  
  if (username === 'admin' && password === 'admin123') {
    return true;
  } else {
    return false;
  }
}
