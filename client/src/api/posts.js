import axios from 'axios'

// const url = 'https://furida.herokuapp.com/posts'
const url = 'http://localhost:8080/posts'

const config = {
    headers: {
        'content-type': 'multipart/form-data',
        'authorization': localStorage.getItem('token')
    }
}

export const getPosts = () => axios.get(url)
export const createPost = (postData) => axios.post(url, postData, config)
export const updatePost = (id, postData) => axios.patch(url + '/' + id, postData, config)
export const deletePost = (id) => axios.delete(url + '/' + id, config)