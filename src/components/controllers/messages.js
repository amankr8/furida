const Message = require('../models/Message')

exports.getMessages = async (req, res) => {
    try {
        const msgs = await Message.find().sort({ date: -1 })
        res.json(msgs)
    } catch (err) {
        console.error(err)
    }
}

exports.sendMessage = async (req, res) => {
    try {
        const newMessage = new Message(req.body)
        await newMessage.save()
        res.json(newMessage)
    } catch (err) {
        console.error(err)
    }
}

exports.deleteMessage = async (req, res) => {
    try {
        await Message.findByIdAndDelete(req.params.id)
        res.json('Message deleted successfully!')
    } catch (err) {
        console.error(err)
    }
}

exports.deleteMessages = async (req, res) => {
    try {
        await Message.deleteMany()
        res.json('All the messages were deleted successfully!')
    } catch (err) {
        console.error(err)
    }
}