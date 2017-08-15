import axios from 'axios';

// **** [[[[ FRIENDS API ]]]] ****
// all friends routes are PUT routes
// [[* SEND REQUEST *]]
// :userId is the user sending the request, friendId is the user receiving the request

// /api/friends/send/:userId/friend/:friendId

export function sendFriendRequest(friendId, token) {
   return axios.put(`api/friends/send/${friendId}`, {
      headers: {
         authorization: `Bearer ${token}`

      }
   })
}
// [[ * decline request * ]]
//this will remove the request from the recepiant but not the sender

// /api/friends/decline/:userId/request/:requestId

export function declineFriendRequest(requestId, token) {
   return axios.put(`api/friends/decline/${userId}/request/${requestId}`, {
      headers: {
         authorization: `Bearer ${token}`

      }
   })
}
// [[ * accept request * ]]

// /api/friends/accept/:userId/friend/:friendId

export function acceptFriendRequest(userId, friendId){
   return axios.put(`api/friends/accept/${userId}/friend/${friendId}`, {
      headers: {
         authorization: `Bearer ${token}`

      }
   })
}


// **** [[[ * END FRIENDS *]]] ****
