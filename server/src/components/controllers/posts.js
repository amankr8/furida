const Post = require('../models/Post')
const { deleteFile, deleteFiles } = require('../../helpers/local')
const { uploadFileS3, deleteFileS3, deleteFilesS3 } = require('../../helpers/aws')

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 })
        res.json(posts)
    } catch (error) {
        console.error(error)
    }
}

exports.createPost = async (req, res) => {
    try {
        const newPost = new Post({
            desc: req.body.desc,
            url: req.body.url,
            img: req.file.filename
        })
        await newPost.save()
        await uploadFileS3(req.file)
        res.json(newPost)
    } catch (error) {
        console.error(error)
    }
}

exports.updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(updatedPost)
    } catch (error) {
        console.error(error)
    }
}

exports.deletePost = async (req, res) => {
    try {
        const doc = await Post.findById(req.params.id)
        await Post.findByIdAndDelete(req.params.id)
        await deleteFileS3(doc.img)
        await deleteFile(doc.img)
        res.json('Post deleted successfully!')
    } catch (error) {
        console.error(error)
    }
}

exports.deletePosts = async (req, res) => {
    try {
        await Post.deleteMany()
        deleteFilesS3()
        deleteFiles()
        res.json('All posts deleted successfully!')
    } catch (error) {
        console.error(error)
    }
}