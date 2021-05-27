var fs = require('fs')
var AWS = require('aws-sdk')

var s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
})

exports.uploadFileToS3 = async (file) => {
    try {
        const data = await fs.readFile(file.path)
        const params = {
            Bucket: 'furida/posts',
            Key: file.filename,
            Body: data,
            ACL: 'public-read'
        }
        await s3.putObject(params)
        console.log('Associated image uploaded to S3')
    } catch (error) {
        console.error(error)
    }
}

exports.deleteFileFromS3 = async (filename) => {
    try {
        const params = {
            Bucket: 'furida/posts',
            Key: filename
        }
        await s3.deleteObject(params)
        console.log('Associated image at S3 deleted!')
    } catch (error) {
        console.error(error)
    }
}

exports.deleteFilesFromS3 = async () => {
    try {
        const data = await s3.listObjects({ Bucket: 'furida/posts' })
        const params = {
            Bucket: 'furida/posts',
            Delete: {
                Objects: data.Contents.map(({ Key }) => ({ Key }))
            }
        }
        await s3.deleteObjects(params)
        console.log('All associated images at S3 deleted!')
    } catch (error) {
        console.error(error)
    }
}