import axios from 'axios'

// const url = 'https://furida.herokuapp.com/users'
const url = 'http://localhost:8080/users'

export const register = (formData) => axios.post(url + '/register', formData)
export const login = (formData) => axios.post(url + '/login', formData)
export const logout = () => axios.post(url + '/logout')