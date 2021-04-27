import { GETALL, CREATE, UPDATE, DELETE } from '../constants/posts';

const reducer = (posts = [], action) => {
    switch (action.type) {
        case GETALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
}

export default reducer;