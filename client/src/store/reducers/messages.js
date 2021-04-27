import { GETALL, SEND, DELETE, DELETEALL } from '../constants/messages';

const reducer = (messages = [], action) => {
    switch (action.type) {
        case GETALL:
            return action.payload;
        case SEND:
            return [...messages, action.payload];
        case DELETE:
            return messages.filter((post) => post._id !== action.payload);
        case DELETEALL:
            return null;
        default:
            return messages;
    }
}

export default reducer;