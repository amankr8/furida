const Message = require('../models/Message')

exports.getMessages = async (req, res) => {
    try {
        const msgs = await Message.find().sort({ date: -1 })
        res.json(msgs)
    } catch (error) {
        console.error(error)
    }
}

exports.sendMessage = async (req, res) => {
    try {
        const newMessage = new Message(req.body)
        await newMessage.save()
        res.json(newMessage)
    } catch (error) {
        console.error(error)
    }
}

exports.deleteMessage = async (req, res) => {
    try {
        await Message.findByIdAndDelete(req.params.id)
        res.json('Message deleted successfully!')
    } catch (error) {
        console.error(error)
    }
}

exports.deleteMessages = async (req, res) => {
    try {
        await Message.deleteMany()
        res.json('All the messages were deleted successfully!')
    } catch (error) {
        console.error(error)
    }
}