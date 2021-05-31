import axios from 'axios'

// const url = 'https://furida.herokuapp.com/users'
const url = 'http://localhost:8080/users'

const config = {
    headers: {
        'content-type': 'application/json',
        'authorization': localStorage.getItem('token')
    }
}

export const register = (formData) => axios.post(url + '/register', formData, config)
export const login = (formData) => axios.post(url + '/login', formData, config)