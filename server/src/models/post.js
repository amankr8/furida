const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    desc: String
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;