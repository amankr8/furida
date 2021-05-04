var fs = require('fs')
var AWS = require('aws-sdk')

var s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
})

exports.uploadFileToS3 = (file) => {
    const fileBody = fs.readFileSync(file.path);

    const params = {
        Bucket: process.env.AWS_BUCKET,
        Key: file.filename,
        Body: fileBody,
        ACL: 'public-read'
    };

    s3.putObject(params, function(err, data) {
        if (err) throw err
        console.log(data)
    })
}

exports.deleteFileFromS3 = (filename) => {
    const params = {
        Bucket: process.env.AWS_BUCKET,
        Key: filename
    }

    s3.deleteObject(params, function(err, data) {
        if (err) throw err
        console.log('Associated image at S3 deleted!')
    })
}

exports.deleteFilesFromS3 = () => {
    const params = {
        Bucket: process.env.AWS_BUCKET,
        Delete: {
            Objects: [
                {
                    Key: '*'
                }
            ]
        }
    }

    s3.deleteObjects(params, err => {
        if (err) throw err
        console.log('All associated images at S3 deleted!')
    })
}