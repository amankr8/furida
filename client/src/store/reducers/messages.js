import { GETMSGS, SENDMSG, DELETEMSG } from '../constants/messages'

const reducer = (messages = [], action) => {
    switch (action.type) {
        case GETMSGS:
            return action.payload
        case SENDMSG:
            return [action.payload, ...messages]
        case DELETEMSG:
            return messages.filter((msg) => msg._id !== action.payload)
        default:
            return messages
    }
}

export default reducer