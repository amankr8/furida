import { REGISTER, LOGIN, LOGOUT } from '../constants/users'

const reducer = (users = [], action) => {
    switch (action.type) {
        case REGISTER:
            return users
        case LOGIN:
            localStorage.setItem('user', action.payload.username)
            localStorage.setItem('token', action.payload.token)
            return [action.payload, ...users]
        case LOGOUT:
            localStorage.clear()
            return users
        default:
            return users
    }
}

export default reducer