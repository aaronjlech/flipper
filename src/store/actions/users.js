export function requestUser () {
  return {
    type: 'REQUEST_USERS'
  }
}

export function receiveUser (user) {
  return {
    type: 'RECEIVE_USERS',
    user: user
  }
}

export function shouldFetchUser (state) {
  if(!state.user) {
    return true
  }
  if(state.isFetching) {
    return false
  }
}

export function fetchUserIfNeeded () {
  return (dispatch, getState) => {
    if(shouldFetchUser(getState())) {
      return dispatch(fetchUser())
    }
  }
}

function updateUser (updatedUser) {
  return (dispatch) => {
    return users.updateUser(updatedUser)
  }
}

function createUserFromInvite (state, urlParams) {
  return (dispatch, getState) => {
    return users.processInvite(urlParams.inviteHash)
      .then(res => {
        if(res.status === 'expired') {
          dispatch(inviteFailure(res))
        } else {
          dispatch(inviteSuccess(res))
        }

      })
  }
}
