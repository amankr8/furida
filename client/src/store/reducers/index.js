import { combineReducers } from 'redux'
import posts from './posts'
import messages from './messages'
import users from './users'

export default combineReducers({
    posts,
    messages,
    users
})