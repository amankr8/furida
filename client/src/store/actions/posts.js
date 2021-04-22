import * as api from '../../api/posts';
import { GETPOSTS, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.getPosts();
        dispatch({ type: GETPOSTS, payload: data });
    }
    catch (error) {
        console.error(error);
    }
}

export const createPost = (formData) => async (dispatch) => {
    try {
        const { data } = await api.createPost(formData);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.error(error);
    }
}

export const updatePost = (id, formData) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, formData);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.error(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.error(error);
    }
}