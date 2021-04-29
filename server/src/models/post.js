const mongoose = require('mongoose');

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
    time: {
        type: Date,
        default: Date.now()
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;