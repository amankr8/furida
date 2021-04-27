import { GETPOSTS, CREATEPOST, UPDATEPOST, DELETEPOST } from '../constants/posts';

const reducer = (posts = [], action) => {
    switch (action.type) {
        case GETPOSTS:
            return action.payload;
        case CREATEPOST:
            return [...posts, action.payload];
        case UPDATEPOST:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case DELETEPOST:
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
}

export default reducer;