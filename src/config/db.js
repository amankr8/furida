const mongoose = require('mongoose')

const connect = async () => {
    await mongoose.connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
        useFindAndModify: false,
        useCreateIndex: true
    })

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        // we're connected!
    })
}

module.exports = connect