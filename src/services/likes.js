import axios from "axios";
import { getToken } from "./auth";
// **** [[[* MESSAGES API *]]] ****

//POST LIKE

// /api/likes/user/:userId/message/:messageId
export default function handleLike(messageId, token) {
   return axios.put(`/api/likes/message/${messageId}`, {
      headers: {
         Authorization: `Bearer ${getToken()}`
      }
   });
}
