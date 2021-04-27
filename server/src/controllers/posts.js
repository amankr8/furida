var Post = require('../models/post')

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ time: -1 });
        res.json(posts);
    } catch (error) {
        console.error(error);
    }
}

exports.createPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        await newPost.save();
        res.json(newPost);
    } catch (error) {
        console.error(error);
    }
}

exports.updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updatedPost);
    } catch (error) {
        console.error(error);
    }
}

exports.deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.json('Post deleted successfully!');
    } catch (error) {
        console.error(error);
    }
}