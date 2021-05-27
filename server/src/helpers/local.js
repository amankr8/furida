var fs = require('fs')
var path = require('path')

exports.deleteFile = async (filename) => {
    try {
        await fs.unlink(path.join('public/uploads/posts', filename))
        console.log('Associated image deleted!')
    } catch (error) {
        console.error(error)
    }
}

exports.deleteFiles = async () => {
    try {
        const files = await fs.readdir('public/uploads/posts')
        for(const file of files) {
            await fs.unlink(path.join('public/uploads/posts', file))
        }
        console.log('All associated images deleted!')
    } catch (error) {
        console.error(error)
    }
}