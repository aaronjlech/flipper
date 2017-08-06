import { combineReducers } from 'redux';
import Messages from './messages';
import users from './users';



const rootReducer = combineReducers({
   ...Messages,
   ...users
})


export default rootReducer
