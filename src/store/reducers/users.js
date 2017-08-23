import jwtDecode from "jwt-decode";
import { getToken, setToken, removeToken, setUser, removeUser } from "../../services/auth";
import history from "../../history";

const AllUsers = (
   state = {
      isFetching: false,
      allUsers: []
   },
   action
) => {
   switch (action.type) {
      case "REQUEST_ALL_USERS":
         return Object.assign({}, state, { isFetching: true });
      case "RECEIVE_ALL_USERS":
         return Object.assign({}, state, {
            isFetching: false,
            allUsers: action.allUsers
         });
      default:
         return state;
   }
};

const User = (
   state = {
      isFetching: false,
      isLoggedIn: false,
      loginError: null,
      signupError: null,
      user: {}
   },
   action
) => {
   switch (action.type) {
      case "RECEIVE_TOKEN":
      console.log('hello?');
      setToken(action.token);
      let userData = jwtDecode(action.token);
      setUser(userData.user)
      return Object.assign({}, state, {
         isFetching: false,
         isLoggedIn: true,
         token: action.token,
         user: userData.user
      });
      case "REQUEST_USER":
         return Object.assign({}, state, { isFetching: true });
      case "RECEIVE_USER":
         setUser(action.user)
         return Object.assign({}, state, {
            isFetching: false,
            user: action.user
          });

      case "LOGOUT_USER":
         removeToken();
         removeUser();
         history.push("/");
         return Object.assign({}, state, {
            isLoggedIn: false,
            token: "",
            user: {}
         });
      case "LOGIN_FAILURE":
         return Object.assign({}, state, {
            error: action.error
         });
      case "SIGNUP_FAILURE":
         return Object.assign({}, state, {
            error: action.error
         });
      default:
         return state;
   }
};

export default {
   User,
   AllUsers
};
