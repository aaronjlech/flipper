import axios from "axios";

// **** [[[* MESSAGES API *]]] ****

//
// GET MESSAGE BY SINGLE USER

// /api/messages/:userId
export function getSingleMessage(userId, token) {
   return axios.get(`/api/messages/${userId}`, {
      headers: {
         authorization: `Bearer ${token}`
      }
   });
}

//GET ALL MESSAGES

// /api/messages
export function getAllMessages(token) {
   return axios.get(`/api/messages`, {
      headers: {
         authorization: `Bearer ${token}`
      }
   });
}
//POST MESSAGE

// /api/messages/create/:userId
export function createMessage(data) {
   return axios.post(
      `/api/messages/create`,
      {
         headers: {
            authorization: `Bearer ${token}`
         }
      },
      {
         message: data
      }
   );
}
//DELETE MESSAGE

// /api/messages/remove/:id
export function removeMessage(messageId, token) {
   return axios.delete(`/api/messages/remove/${messageId}`, {
      headers: {
         authorization: `Bearer ${token}`
      }
   });
}

export function createComment(messageId, commentData, token) {
   return axios.put(
      `/api/comments/create/${messageId}`,
      {
         headers: {
            authorization: `Bearer ${token}`
         }
      },
      {
         comment: commentData
      }
   );
}

// [[[* END MESSAGES *]]]
