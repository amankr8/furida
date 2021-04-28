const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    img: {
        data: Buffer,
        contentType: String
    },
    time: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;