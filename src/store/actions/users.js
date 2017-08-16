import { users } from '../../services'
import history from '../../history';

const requestUser = () => {
  return {
    type: 'REQUEST_USER'
  }
}
const receiveUser = (user) => {
  return {
    type: 'RECEIVE_USER',
    user: user
  }
}

const signupFailure = (error) => {
   return {
      type: 'SIGNUP_FAILURE',
      error
   }
}
const loginFailure = (error) => {
   console.log(error.data);
   return {
      type: 'LOGIN_FAILURE',
      error
   }
}
const loginUser = (user) => {
   return (dispatch) => {
      dispatch(requestUser)
      return users.loginUser(user)
         .then(res => {
            history.push('/home')
            return dispatch(receiveUser(res.data))
         })
         .catch(err => dispatch(loginFailure(err)))
   }
}

const signupUser = (userData) => {
   return (dispatch) => {
      dispatch(requestUser)
      return users.createNewUser(userData)
         .then(res => dispatch(receiveUser(res.data)))
         .catch(err => dispatch(signupFailure(err)))
   }
}

const shouldFetchUser = (state) => {
  if(!state.User.user) {
    return true
  }
  if(state.User.isFetching) {
    return false
  }
}
const fetchUser = (userId) => {
   return (dispatch) => {
      dispatch(requestUser);
      return users.getUserById(userId)
   }
}

const fetchUserIfNeeded = () => {
  return (dispatch, getState) => {
    if(shouldFetchUser(getState())) {
      return dispatch(fetchUser())
    }
  }
}

const updateUser = (updatedUser) => {
  return (dispatch) => {
   return users.updateUser(updatedUser)
  }
}

const requestAllUsers = () => {
   return {
      type: 'REQUEST_ALL_USERS',

   }
}
const fetchAllUsers = () => {
   return (dispatch) => {
      dispatch(requestAllUsers)
      return users.getAllUsers()
               .then(res => dispatch(receiveAllUsers(res.data)))
   }
}
const shouldFetchAllUsers = (state) => {
   if(state.AllUsers.allUsers) {
      return true
   } else {
      return false
   }
}
const fetchAllUsersIfNeeded = () => {
   return (dispatch, getState) => {
      if(shouldFetchAllUsers(getState())){
         dispatch(fetchAllusers())
      }
   }
}
const receiveAllUsers = (data) => {
   return {
      type: 'RECEIVE_ALL_USERS',
      allUsers: data
   }
}


export default {
   requestUser,
   receiveUser,
   updateUser,
   loginFailure,
   loginUser,
   signupUser,
   signupFailure,
   fetchUserIfNeeded,
   shouldFetchUser,
   fetchAllUsers,
   receiveAllUsers,
   requestAllUsers,
   fetchAllUsersIfNeeded

}
