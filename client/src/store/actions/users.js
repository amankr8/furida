import * as api from '../../api/users'
import { REGISTER, LOGIN, LOGOUT } from '../constants/users'

export const register = (formData) => async (dispatch) => {
    try {
        const { data } = await api.register(formData)
        dispatch({ type: REGISTER, payload: data })
    } catch (error) {
        console.error(error)
    }
}

export const login = (formData) => async (dispatch) => {
    try {
        const { data } = await api.login(formData)
        dispatch({ type: LOGIN, payload: data })
    } catch (error) {
        console.error(error)
    }
}

export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: LOGOUT })
    } catch (error) {
        console.error(error)
    }
}