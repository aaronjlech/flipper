import { messages, likes } from "../../services";

const requestMessages = () => {
   return {
      type: "REQUEST_MESSAGES"
   };
};

const receiveMessages = messageData => {
   return {
      type: "RECEIVE_MESSAGES",
      messages: messageData
   };
};

const shouldFetchMessages = state => {
   if (!state.messages) {
      return true;
   }
   if (state.isFetching) {
      return false;
   }
};

const couldNotReceiveMessages = error => {
   return {
      type: "FETCH_FAILURE",
      error
   };
};

const fetchMessages = () => dispatch => {
   dispatch(requestMessages);
   return messages
      .getAllMessages()
      .then(res => dispatch(receiveMessages(res.data)))
      .catch(err => dispatch(couldNotReceiveMessages(err)));
};

const fetchMessagesIfNeeded = () => {
   return (dispatch, getState) => {
      if (shouldFetchMessages(getState())) {
         return dispatch(fetchMessages());
      }
   };
};

const createMessage = messageData => {
   return dispatch => {
      messages
         .createMessage(messageData)
         .then(res => dispatch(fetchMessages()))
         .catch(err => dispatch(couldNotReceiveMessages(err)));
   };
};

const createComment = (messageId, commentData) => {
   return dispatch => {
      messages
         .createComment(messageId, commentData)
         .then(res => dispatch(fetchMessages()));
   };
};

const handleLike = messageId => {
   return dispatch => {
      likes
         .handleLike(userId, messageId)
         .then(res => dispatch(fetchMessages()))
         .catch(res => dispatch(couldNotReceiveMessages(err)));
   };
};

export default {
   requestMessages,
   receiveMessages,
   createMessage,
   fetchMessages,
   shouldFetchMessages,
   fetchMessagesIfNeeded,
   createComment,
   handleLike
};
