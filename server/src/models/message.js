const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;