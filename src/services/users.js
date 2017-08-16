import axios from 'axios'
import { getToken } from './auth';

// ***** [[[[ USERS API ]]]] *****
//[[* GET ALL USERS *]]
// /api/users
export function getAllUsers() {
   return axios.get('/api/users', {
      headers: {
         Authorization: `Bearer ${getToken()}`
      }
   })
}
//[[* CREATE USER *]]
// /api/users
export function createNewUser(data) {
   return axios.post('/api/users', {
         user: data
      })
}
//[[* LOGIN USER *]]
// /api/users/login
export function loginUser(data) {
   return axios.post('/api/users/login', {
         user: data
      })
}
// [[* GET ONE USER *]]
// /api/users/:id
export function getUserById(userId) {
   return axios.get(`/api/users/${userId}`, {
      headers: {
         Authorization: `Bearer ${getToken()}`
      }
   })
}
// [[* REMOVE SINGLE USER *]]
// /api/users/remove/:id
export function removeUser(userId) {
   return axios.delete(`/api/users/${userId}`, {
      headers: {
         Authorization: `Bearer ${getToken()}`
      }
   })
}
//[[ * EDIT SINGLE USER * ]]
// api/users/:id
export function editUser(userId, data){
   return axios.put(`api/users/${userId}`,{
      headers: {
         Authorization: `Bearer ${getToken()}`
      }
      },
      {
         user: data
      })
}

//// **** [[[ END USERS ]]] ****
