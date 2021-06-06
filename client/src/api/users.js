import axios from 'axios'

// const url = 'https://furida.herokuapp.com/users'
const url = 'http://localhost:8080/users'

const config1 = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const config2 = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }
}

export const register = (formData) => axios.post(url + '/register', formData, config2)
export const login = (formData) => axios.post(url + '/login', formData, config1)