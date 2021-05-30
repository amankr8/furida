import * as api from '../../api/users'
import { REGISTER, LOGIN, LOGOUT } from '../constants/users'

export const register = (formData) => async (dispatch) => {
    try {
        const { data } = await api.register(formData)
        dispatch({ type: REGISTER, payload: data })
    } catch (err) {
        console.error(err)
    }
}

export const login = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.login(formData)
        dispatch({ type: LOGIN, payload: data })

        history.push('/console')
    } catch (err) {
        console.error(err)
    }
}

export const logout = (history) => async (dispatch) => {
    try {
        dispatch({ type: LOGOUT })

        history.push('/')
    } catch (err) {
        console.error(err)
    }
}