import * as api from '../../api/messages';
import { GETMSGS, SENDMSG, DELETEMSG } from '../constants/messages';

export const getMessages = () => async (dispatch) => {
    try {
        const { data } = await api.getMessages();
        dispatch({ type: GETMSGS, payload: data });
    }
    catch (error) {
        console.error(error);
    }
}

export const sendMessage = (formData) => async (dispatch) => {
    try {
        const { data } = await api.sendMessage(formData);
        dispatch({ type: SENDMSG, payload: data });
    } catch (error) {
        console.error(error);
    }
}

export const deleteMessage = (id) => async (dispatch) => {
    try {
        await api.deleteMessage(id);
        dispatch({ type: DELETEMSG, payload: id });
    } catch (error) {
        console.error(error);
    }
}