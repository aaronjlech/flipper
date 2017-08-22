import axios from "axios";
import { getToken } from "./auth";
// **** [[[[ FRIENDS API ]]]] ****
// all friends routes are PUT routes
// [[* SEND REQUEST *]]
// :userId is the user sending the request, friendId is the user receiving the request

// /api/friends/send/:userId/friend/:friendId

export function sendFriendRequest(friendId) {
   return axios.put(`api/friends/send/${friendId}`,{}, {
      headers: {
         Authorization: `Bearer ${getToken()}`
      }
   });
}
// [[ * decline request * ]]
//this will remove the request from the recepiant but not the sender

// /api/friends/decline/:userId/request/:requestId

export function declineFriendRequest(requestId) {
   return axios.put(`api/friends/request/${requestId}`, {}, {
      headers: {
         Authorization: `Bearer ${getToken()}`
      }
   });
}
// [[ * accept request * ]]

// /api/friends/accept/:userId/friend/:friendId

export function acceptFriendRequest(friendId) {
   return axios.put(`api/friends/accept/friend/${friendId}`, {}, {
      headers: {
         Authorization: `Bearer ${getToken()}`
      }
   });
}

// **** [[[ * END FRIENDS *]]] ****
