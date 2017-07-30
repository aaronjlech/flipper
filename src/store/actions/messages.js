import { messages, likes } from '../../services'


const requestMessages = () => {
  return {
    type: 'REQUEST_MESSAGES'
  }
}

const receiveMessages = (messageData) => {
  return {
    type: 'RECEIVE_MESSAGES',
    messages: messageData
  }
}

const shouldFetchMessages = (state) => {
  if(!state.messages) {
    return true
  }
  if(state.isFetching) {
    return false
  }
}

const fetchMessages = () => (dispatch) => {
   dispatch(requestMessages)
   return messages.getAllMessages()
            .then(data => dispatch(receiveMessages(data)))
}

const fetchMessagesIfNeeded = () => {
  return (dispatch, getState) => {
    if(shouldFetchMessages(getState())) {
      return dispatch(fetchMessages())
    }
  }
}

const createMessage = (userId, messageData) => {
   return (dispatch) => {
      messages.createMessage(userId, messageData)
         .then(res => dispatch(fetchMessages()))
   }
}

const handleLike = (userId, messageId) => {
   return (dispatch) => {
      likes.handleLike(userId, messageId)
         .then(res => dispatch(fetchMessages()))
   }
}

export {
   requestMessages,
   receiveMessages,
   createMessage,
   fetchMessages,
   shouldFetchMessages,
   fetchMessagesIfNeeded,
   handleLike
}
