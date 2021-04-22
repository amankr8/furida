var Message = require('../models/message')

exports.getMessages = async (req, res) => {
    try {
        const msgs = await Message.find();
        res.json(msgs);
    } catch (error) {
        console.error(error);
    }
}

exports.sendMessage = async (req, res) => {
    const newMessage = new Message(req.body);
    try {
        await newMessage.save();
        res.json(newMessage);
    } catch (error) {
        console.error(error);
    }
}

exports.deleteMessage = async (req, res) => {
    try {
        await Message.findByIdAndDelete(req.params.id);
        res.json('Message deleted successfully!');
    } catch (error) {
        console.error(error);
    }
}

exports.deleteMessages = async (req, res) => {
    try {
        await Message.deleteMany(req.params.id);
        res.json('All the messages were deleted successfully!');
    } catch (error) {
        console.error(error);
    }
}