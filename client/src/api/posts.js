import axios from 'axios'

// const url = 'https://furida.herokuapp.com/posts'
const url = 'http://localhost:8080/posts'
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

const config3 = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': token
    }
}

export const getPosts = () => axios.get(url, config1)
export const createPost = (postData) => axios.post(url, postData, config3)
export const updatePost = (id, postData) => axios.patch(url + '/' + id, postData, config2)
export const deletePost = (id) => axios.delete(url + '/' + id, config1)