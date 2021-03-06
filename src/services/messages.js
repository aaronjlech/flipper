import axios from "axios";
import { getToken } from './auth';
// **** [[[* MESSAGES API *]]] ****

//
// GET MESSAGE BY SINGLE USER

// /api/messages/:userId
export function getSingleMessage(userId) {
   return axios.get(`/api/messages/${userId}`, {
      headers: {
         Authorization: `Bearer ${getToken()}`
      }
   });
}

//GET ALL MESSAGES

// /api/messages
export function getAllMessages() {
   return axios.get(`/api/messages`, {
      headers: {
         Authorization: `Bearer ${getToken()}`
      }
   });
}
//POST MESSAGE
// /api/messages/create/:userId
export function createMessage(data) {
   return axios.post(
      `/api/messages/create`,

      {
         message: data
      },
      {
         headers: {
            'Authorization': `Bearer ${getToken()}`
         }
      }
   );
}
//DELETE MESSAGE

// /api/messages/remove/:id
export function removeMessage(messageId) {
   return axios.delete(`/api/messages/remove/${messageId}`, {
      headers: {
         Authorization: `Bearer ${getToken()}`
      }
   });
}

export function createComment(messageId, commentData) {
   return axios.put(
      `/api/comments/create/${messageId}`,

      {
         comment: commentData
      },
      {
         headers: {
            Authorization: `Bearer ${getToken()}`
         }
      }
   );
}

// [[[* END MESSAGES *]]]
