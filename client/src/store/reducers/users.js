import { REGISTER, LOGIN, LOGOUT } from '../constants/users'

const reducer = (users = [], action) => {
    switch (action.type) {
        case REGISTER:
            return users
        case LOGIN:
            localStorage.setItem('user', JSON.stringify(action.payload))
            return [action.payload, ...users]
        case LOGOUT:
            localStorage.clear()
            return users
        default:
            return users
    }
}

export default reducer