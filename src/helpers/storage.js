var multer  = require('multer')
var fs = require('fs')
var path = require('path')

var storage = multer.diskStorage({
    destination: 'public/uploads/posts',
    filename: function (req, file, cb) {
        cb(null, 'furida_' + Date.now() + path.extname(file.originalname))
    }
})

var fileFilter = function (req, file, cb) {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
}

var upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 2 * 1024 * 1024
    }
})

module.exports = upload;

exports.deleteFile = async (filename) => {
    try {
        await fs.unlinkSync(path.join('public/uploads/posts', filename))
        console.log('Associated image deleted!')
    } catch (err) {
        console.error(err)
    }
}

exports.deleteFiles = async () => {
    try {
        const files = await fs.readdirSync('public/uploads/posts')
        for(const file of files) {
            await fs.unlinkSync(path.join('public/uploads/posts', file))
        }
        console.log('All associated images deleted!')
    } catch (err) {
        console.error(err)
    }
}