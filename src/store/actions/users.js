import { users } from '../../services'

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
   fetchUserIfNeeded,
   shouldFetchUser,

}
