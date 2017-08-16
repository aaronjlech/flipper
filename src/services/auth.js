export function getToken() {
   let token = localStorage.getItem('token');
   if(token) {
      return token
   } else {
      return false
   }
}

export function setToken(token) {
      localStorage.setItem('token', token)
}
export function removeToken() {
   localStorage.removeItem('token')
}
