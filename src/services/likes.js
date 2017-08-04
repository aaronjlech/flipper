import axios from 'axios'
// **** [[[* MESSAGES API *]]] ****

//POST LIKE

// /api/likes/user/:userId/message/:messageId
export default function handleLike(userId, messageId) {
   return axios.put(`/api/likes/user/${userId}/message/${messageId}`)
}
