var fs = require('fs')
var path = require('path')

exports.deleteFile = (filename) => {
    fs.unlink(`public/uploads/${filename}`, err => {
        if (err) throw err
        else console.log('Associated image deleted!')
    })
}

exports.deleteFiles = () => {
    fs.readdir('public/uploads', (err, files) => {
        if (err) throw err
        else {
            for (const file of files) {
                fs.unlink(path.join('public/uploads', file), err => {
                    if (err) throw err
                })
            }
            console.log('All associated images deleted!')
        }
    })
}