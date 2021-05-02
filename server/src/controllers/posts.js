var Post = require('../models/post')

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ time: -1 })
        res.json(posts)
    } catch (error) {
        console.error(error)
    }
}

exports.createPost = async (req, res) => {
    const newPost = new Post({
        desc: req.body.desc,
        url: req.body.url,
        img: req.file.location
    })
    try {
        await newPost.save()
        res.json(newPost)
    } catch (error) {
        console.error(error)
    }
}

exports.updatePost = async (req, res) => {
    const update = {
        desc: req.body.desc,
        url: req.body.url
    }
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, update, {new: true})
        res.json(updatedPost)
    } catch (error) {
        console.error(error)
    }
}

exports.deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id)
        res.json('Post deleted successfully!')
    } catch (error) {
        console.error(error)
    }
}

exports.deletePosts = async (req, res) => {
    try {
        await Post.deleteMany()
        res.json('All posts deleted successfully!')
    } catch (error) {
        console.error(error)
    }
}