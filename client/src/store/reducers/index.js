import { combineReducers } from 'redux'
import posts from './posts'
import messages from './messages'

export default combineReducers({
    posts,
    messages
})