import axios from 'axios'

// const url = 'https://furida.herokuapp.com/messages'
const url = 'http://localhost:8080/messages'

export const getMessages = () => axios.get(url)
export const sendMessage = (formData) => axios.post(url, formData)
export const deleteMessage = (id) => axios.delete(url + '/' + id)
export const deleteMessages = () => axios.delete(url)