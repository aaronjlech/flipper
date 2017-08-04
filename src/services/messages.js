import axios from 'axios'

// **** [[[* MESSAGES API *]]] ****

//
// GET MESSAGE BY SINGLE USER

// /api/messages/:userId
export function getSingleMessage(userId) {
   return axios.get(`/api/messages/${userId}`)
}

//GET ALL MESSAGES

// /api/messages
export function getAllMessages() {
   return axios.get(`/api/messages`)
}
//POST MESSAGE

// /api/messages/create/:userId
export function createMessage(userId, data) {
   return axios.post(`/api/messages/create/${userId}`, {
         message: data
      })
}
//DELETE MESSAGE

// /api/messages/remove/:id
export function removeMessage(messageId) {
   return axios.delete(`/api/messages/remove/${messageId}`)
}

export function createComment(messageId, commentData) {
   return axios.put(`/api/comments/create/${messageId}`, {
         comment: commentData
      })
}

// [[[* END MESSAGES *]]]
