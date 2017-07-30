import axios from 'axios';

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
