var fs = require('fs')
var AWS = require('aws-sdk')

var s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
})

exports.uploadFileS3 = async (file) => {
    try {
        const Body = await fs.readFileSync(file.path)
        const params = {
            Bucket: 'furida/posts',
            Key: file.filename,
            Body: Body,
            ACL: 'public-read'
        }
        await s3.putObject(params, () => {
            console.log('Image uploaded to S3')
        })
    } catch (err) {
        console.error(err)
    }
}

exports.deleteFileS3 = async (filename) => {
    try {
        const params = {
            Bucket: 'furida/posts',
            Key: filename
        }
        await s3.deleteObject(params, () => {
            console.log('Associated image at S3 deleted')
        })
    } catch (err) {
        console.error(err)
    }
}

exports.deleteFilesS3 = async () => {
    try {
        const List = await s3.listObjects({ Bucket: 'furida/posts' })
        const params = {
            Bucket: 'furida/posts',
            Delete: {
                Objects: List.Contents.map(({ Key }) => ({ Key }))
            }
        }
        await s3.deleteObjects(params, () => {
            console.log('All associated images at S3 deleted')
        })
    } catch (err) {
        console.error(err)
    }
}