import * as api from '../../api/posts'
import { GETPOSTS, CREATEPOST, UPDATEPOST, DELETEPOST } from '../constants/posts'

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.getPosts()
        dispatch({ type: GETPOSTS, payload: data })
    }
    catch (error) {
        console.error(error)
    }
}

export const createPost = (formData) => async (dispatch) => {
    try {
        const { data } = await api.createPost(formData)
        dispatch({ type: CREATEPOST, payload: data })
    } catch (error) {
        console.error(error)
    }
}

export const updatePost = (id, formData) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, formData)
        dispatch({ type: UPDATEPOST, payload: data })
    } catch (error) {
        console.error(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({ type: DELETEPOST, payload: id })
    } catch (error) {
        console.error(error)
    }
}