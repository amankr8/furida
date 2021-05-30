import axios from 'axios'

// const url = 'https://furida.herokuapp.com/messages'
const url = 'http://localhost:8080/messages'

const config = {
    headers: {
        'content-type': 'application/json',
        'authorization': localStorage.getItem('token')
    }
}

export const getMessages = () => axios.get(url, config)
export const sendMessage = (formData) => axios.post(url, formData, config)
export const deleteMessage = (id) => axios.delete(url + '/' + id, config)