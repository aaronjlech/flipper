import axios from 'axios'
// **** [[[* MESSAGES API *]]] ****

//POST LIKE

// /api/likes/user/:userId/message/:messageId
export default function handleLike(userId, messageId) {
   axios.put(`/api/likes/user/${userId}/message/${messageId}`)
      .then(res => res.data)
      .catch(err => err)
}
