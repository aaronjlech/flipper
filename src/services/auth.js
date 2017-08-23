export function getToken() {
   let token = localStorage.getItem("token");
      return token;

}

exgport function setToken(token) {
      localStorage.setItem("token", token);
}
export function setUser(user) {
   localStorage.setItem('user', JSON.stringify(user))
}
export function getUser() {
   let user = localStorage.getItem('user')
   return JSON.parse(user);
}
export function removeToken() {
   localStorage.removeItem("token");
}
export function removeUser() {
   localStorage.removeItem('user');
}
