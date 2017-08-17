const Messages = (
   state = {
      isFetching: false,
      messages: []
   },
   action
) => {
   switch (action.type) {
      case "REQUEST_MESSAGES":
         return Object.assign({}, state, { isFetching: true });
      case "RECEIVE_MESSAGES":
         return Object.assign({}, state, {
            isFetching: false,
            messages: action.messages
         });
      default:
         return state;
   }
};

export default Messages;
