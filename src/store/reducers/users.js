import jwtDecode from 'jwt-decode';

const AllUsers = (state = {
  isFetching: false,
  allUsers: []
}, action) => {
  switch (action.type) {
    case 'REQUEST_ALL_USERS':
      return Object.assign({}, state, { isFetching: true })
    case 'RECEIVE_ALL_USERS':
      return Object.assign({}, state, {
        isFetching: false,
        allUsers: action.allUsers
      })

    default:
      return state
  }
}

const User = (state = {
  isFetching: false,
  isLoggedIn: false,
  loginError: null,
  signupError: null,
  user: {},
}, action) => {
  switch (action.type) {
    case 'REQUEST_USER':
      return Object.assign({}, state, { isFetching: true })
    case 'RECEIVE_USER':
      const { token } = action.user
      let userData = jwtDecode(token);
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: true,
        token,
        user: userData.user
      })
    case 'LOGIN_FAILURE':
      return Object.assign({}, state, {
          error: action.error
      })
    case 'SIGNUP_FAILURE':
       return Object.assign({}, state, {
          error: action.error
       })
    case 'LOGIN_FAILURE':
       return Object.assign({}, state, {
          error: action.error
       })
    default:
      return state
  }
}


export default {
   User,
   AllUsers
}
