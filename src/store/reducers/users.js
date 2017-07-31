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
  user: {}
}, action) => {
  switch (action.type) {
    case 'REQUEST_USER':
      return Object.assign({}, state, { isFetching: true })
    case 'RECEIVE_USER':
      return Object.assign({}, state, {
        isFetching: false,
        user: action.user
      })
    default:
      return state
  }
}


export default {
   User,
   AllUsers
}
