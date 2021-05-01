var multer  = require('multer')
const path = require('path')

var storage = multer.diskStorage({
    destination: 'public/uploads',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + Date.now() + path.extname(file.originalname))
    }
})

var fileFilter = (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true)
    } else {
        cb(null, false)
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
    }
}

var upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {fileSize: 5 * 1024 * 1024}
}).single('img')

module.exports = upload