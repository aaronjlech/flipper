import axios from "axios";
import { getToken } from './auth';
// **** [[[* MESSAGES API *]]] ****

//
// GET MESSAGE BY SINGLE USER

// /api/messages/:userId
export function getSingleMessage(userId, token) {
   return axios.get(`/api/messages/${userId}`, {
      headers: {
         authorization: `Bearer ${getToken()}`
      }
   });
}

//GET ALL MESSAGES

// /api/messages
export function getAllMessages(token) {
   return axios.get(`/api/messages`, {
      headers: {
         authorization: `Bearer ${getToken()}`
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
            authorization: `Bearer ${getToken()}`
         }
      },
      {
         message: data
      }
   );
}
//DELETE MESSAGE

// /api/messages/remove/:id
export function removeMessage(messageId) {
   return axios.delete(`/api/messages/remove/${messageId}`, {
      headers: {
         authorization: `Bearer ${getToken()}`
      }
   });
}

export function createComment(messageId, commentData) {
   return axios.put(
      `/api/comments/create/${messageId}`,
      {
         headers: {
            authorization: `Bearer ${getToken()}`
         }
      },
      {
         comment: commentData
      }
   );
}

// [[[* END MESSAGES *]]]
