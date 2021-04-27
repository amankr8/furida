import * as api from '../../api/messages';
import { GETALL, SEND, DELETE } from '../constants/messages';

export const getMessages = () => async (dispatch) => {
    try {
        const { data } = await api.getMessages();
        dispatch({ type: GETALL, payload: data });
    }
    catch (error) {
        console.error(error);
    }
}

export const sendMessage = (formData) => async (dispatch) => {
    try {
        const { data } = await api.sendMessage(formData);
        dispatch({ type: SEND, payload: data });
    } catch (error) {
        console.error(error);
    }
}

export const deleteMessage = (id) => async (dispatch) => {
    try {
        await api.deleteMessage(id);
        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.error(error);
    }
}