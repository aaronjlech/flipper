import axios from 'axios'

// ***** [[[[ USERS API ]]]] *****

//[[* GET ALL USERS *]]
// /api/users
export function getAllUsers() {
   return axios.get('/api/users')
      .then((res) => console.log(res))
      .catch(err => err)
}
//[[* CREATE USER *]]
// /api/users
export function createNewUser(data) {
   return axios.post('/api/users', {
         user: data
      })
   .then(res => res.data)
   .catch(err => err)
}
//[[* LOGIN USER *]]
// /api/users/login
export function loginUser(data) {
   return axios.post('/api/users/login', {
         user: data
      })
      .then(res => {
         localStorage.setItem('userData', JSON.stringify(res.data));
         localStorage.setItem('isLoggedIn', true);
      })
      .catch(err => err)
}
// [[* GET ONE USER *]]
// /api/users/:id
export function getUserById(userId) {
   return axios.get(`/api/users/${userId}`)
      .then((res) => res.data)
      .catch(err => err)
}
// [[* REMOVE SINGLE USER *]]
// /api/users/remove/:id
export function removeUser(userId) {
   return axios.delete(`/api/users/${userId}`)
      .then(res => res.data)
      .catch(err => err)
}
//[[ * EDIT SINGLE USER * ]]
// api/users/:id
export function editUser(userId, data){
   return axios.put(`api/users/${userId}`, {
         user: data
      })
      .then(res => res.data)
      .catch(err => err)
}

//// **** [[[ END USERS ]]] ****
