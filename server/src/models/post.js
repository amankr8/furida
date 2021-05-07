const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post