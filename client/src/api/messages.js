import axios from 'axios'

// const url = 'https://furida.herokuapp.com/messages'
const url = 'http://localhost:8080/messages'
const token = localStorage.getItem('token')

const config1 = {
    headers: {
        'Authorization': token
    }
}

const config2 = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token
    }
}

export const getMessages = () => axios.get(url, config1)
export const sendMessage = (formData) => axios.post(url, formData, config2)
export const deleteMessage = (id) => axios.delete(url + '/' + id, config1)