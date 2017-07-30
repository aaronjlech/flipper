import axios from 'axios'

// **** [[[* MESSAGES API *]]] ****

//
// GET MESSAGE BY SINGLE USER

// /api/messages/:userId
export function getSingleMessage(userId) {
   axios.get(`/api/messages/${userId}`)
      .then(res => res.data)
      .catch(err =>  err)
}

//GET ALL MESSAGES

// /api/messages
export function getAllMessages() {
   axios.get(`/api/messages`)
      .then(res => res.data)
      .catch(err => err)
}
//POST MESSAGE

// /api/messages/create/:userId
export function createMessage(userId, data) {
   axios.post(`/api/messages/create/${userId}`, {
         message: data
      })
      .then(res => res.data)
      .catch(err => err)
}
//DELETE MESSAGE

// /api/messages/remove/:id
export function removeMessage(messageId) {
   axios.delete(`/api/messages/remove/${messageId}`)
}

// [[[* END MESSAGES *]]]
