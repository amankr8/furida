var multer  = require('multer')
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
}).single('img')

module.exports = upload