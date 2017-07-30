import axios from 'axios';

// ***** [[[[ USERS API ]]]] *****

//[[* GET ALL USERS *]]
// /api/users
export function getAllUsers() {
   axios.get('/api/users')
      .then((res) => res.data)
      .catch(err => err)
}
//[[* CREATE USER *]]
// /api/users
export function createNewUser(data) {
   axios.post('/api/users', {
         user: data
      })
   .then(res => res.data)
   .catch(err => err)
}
//[[* LOGIN USER *]]
// /api/users/login
export function loginUser(data) {
   axios.post('/api/users/login', {
         user: data
      })
      .then(res => res.data)
      .catch(err => err)
}
// [[* GET ONE USER *]]
// /api/users/:id
export function getAllUsers(userId) {
   axios.get(`/api/users/${userId}`)
      .then((res) => res.data)
      .catch(err => err)
}
// [[* REMOVE SINGLE USER *]]
// /api/users/remove/:id
export function removeUser(userId) {
   axios.delete(`/api/users/${userId}`)
      .then(res => res.data)
      .catch(err => err)
}
//[[ * EDIT SINGLE USER * ]]
// api/users/:id
export function editUser(userId, data){
   axios.put(`api/users/${userId}`, {
         user: data
      })
      .then(res => res.data)
      .catch(err => err)
}

//// **** [[[ END USERS ]]] ****



// **** [[[[ FRIENDS API ]]]] ****
// all friends routes are PUT routes
// [[* SEND REQUEST *]]
// :userId is the user sending the request, friendId is the user receiving the request

// /api/friends/send/:userId/friend/:friendId

export function sendFriendRequest(userId, friendId) {
   axios.put(`api/friends/send/${userId}/friend/${friendId}`)
      .then(res => res.data)
      .catch(err => err)
}

// [[ * decline request * ]]
//this will remove the request from the recepiant but not the sender

// /api/friends/decline/:userId/request/:requestId

export function declineFriendRequest(userId, requestId) {
   axios.put(`api/friends/decline/${userId}/request/${requestId}`)
      .then(res => res.data)
      .catch(err => err)
}
// [[ * accept request * ]]

// /api/friends/accept/:userId/friend/:friendId

export function acceptFriendRequest(userId, friendId){
   axios.put(`api/friends/accept/${userId}/friend/${friendId}`)
      .then(res => res.data)
      .catch(err => err)
}


// **** [[[ * END FRIENDS *]]] ****


// **** [[[* LIKES API *]]] ****
