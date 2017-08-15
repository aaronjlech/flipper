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
  if(!state.user) {
    return true
  }
  if(state.isFetching) {
    return false
  }
}
const fetchUser = (userId) => {
   return (dispatch) => {
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

}
