import { users, friends } from "../../services";
import history from "../../history";
import { getToken, getUser } from "../../services/auth";
const requestUser = () => {
   return {
      type: "REQUEST_USER"
   };
};
const receiveUser = user => {
   console.log("username", user);
   return {
      type: "RECEIVE_USER",
      user
   };
};
const logoutUser = () => {
   return {
      type: "LOGOUT_USER"
   };
};

const signupFailure = error => {
   return {
      type: "SIGNUP_FAILURE",
      error
   };
};
const loginFailure = error => {
   console.log(error.data);
   return {
      type: "LOGIN_FAILURE",
      error
   };
};
const receiveToken = (token) => {
   return { type: "RECEIVE_TOKEN", token };
};
const loginUser = user => {
   console.log("this one?");
   return dispatch => {
      dispatch(requestUser());
      return users
         .loginUser(user)
         .then(res => {
            console.log('not in herr');
            history.push("/home");
            return dispatch(receiveToken(res.data.token));
         })
         .catch(err => dispatch(loginFailure(err)));
   };
};

const signupUser = userData => {
   return dispatch => {
      dispatch(requestUser());
      return users
         .createNewUser(userData)
         .then(res => dispatch(receiveUser(res.data)))
         .catch(err => dispatch(signupFailure(err)));
   };
};
const shouldFetchUser = state => {
   if (!state.User.user.username) {
      return true;
   }
   if (state.User.isFetching) {
      return false;
   }
};
const fetchUser = () => {
   console.log("dispatching this one");
   return dispatch => {
      return dispatch(receiveUser(getUser()));
   };
};


const fetchUserIfNeeded = () => {
   return (dispatch, getState) => {
      if (shouldFetchUser(getState())) {
         dispatch(requestUser());

         return dispatch(fetchUser());
      }
   };
};

const updateUser = updatedUser => {
   return dispatch => {
      return users.updateUser(updatedUser);
   };
};

const requestAllUsers = () => {
   return {
      type: "REQUEST_ALL_USERS"
   };
};
const fetchAllUsers = () => {
   return dispatch => {
      dispatch(requestAllUsers());
      return users
         .getAllUsers()
         .then(res => dispatch(receiveAllUsers(res.data)));
   };
};
const shouldFetchAllUsers = state => {
   if (!state.AllUsers.allUsers.length) {
      return true;
   } else {
      return false;
   }
};
const fetchAllUsersIfNeeded = () => {
   return (dispatch, getState) => {
      if (shouldFetchAllUsers(getState())) {
         return dispatch(fetchAllUsers());
      }
   };
};
const receiveAllUsers = data => {
   return {
      type: "RECEIVE_ALL_USERS",
      allUsers: data
   };
};
const handleFriendRequest = friendId => {
   return dispatch => {
      return friends
         .sendFriendRequest(friendId)
         .then(res => {
            console.log(res.data);
            return dispatch(receiveUser(res.data));
         })
         .catch(err => dispatch(signupFailure(err)));
   };
};
const handleAccept = friendId => {
   return dispatch => {
      dispatch(requestUser())
      return friends.acceptFriendRequest(friendId)
         .then(res => {
            return dispatch(receiveUser(res.data))
         })
         .catch(err => dispatch(signupFailure(err)))
   }
}
const handleDecline = friendId => {
   return dispatch => {
      dispatch(requestUser())
      return friends.declineFriendRequest(friendId)
         .then(res => {
            return dispatch(receiveUser(res.data))
         })
         .catch(err => dispatch(signupFailure(err)))
   }
}
export default {
   requestUser,
   receiveUser,
   updateUser,
   loginFailure,
   loginUser,
   logoutUser,
   signupUser,
   signupFailure,
   fetchUserIfNeeded,
   shouldFetchUser,
   fetchAllUsers,
   receiveAllUsers,
   requestAllUsers,
   fetchAllUsersIfNeeded,
   handleFriendRequest,
   handleAccept,
   handleDecline
};
