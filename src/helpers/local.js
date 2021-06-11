var fs = require('fs')
var path = require('path')

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