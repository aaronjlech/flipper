export function getToken() {
   let token = localStorage.getItem("token");
      return token;

}

export function setToken(token) {
      localStorage.setItem("token", token);
}
export function removeToken() {
   localStorage.removeItem("token");
}
