var fs = require('fs')
var AWS = require('aws-sdk')

var s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
})

exports.uploadFileToS3 = (file) => {
    fs.readFile(file.path, (err, data) => {
        if (err) throw err

        const params = {
            Bucket: 'furida',
            Key: file.filename,
            Body: data,
            ACL: 'public-read'
        }
    
        s3.putObject(params, function(err, data) {
            if (err) throw err
            console.log(data)
        })
    })
}

exports.deleteFileFromS3 = (filename) => {
    const params = {
        Bucket: 'furida',
        Key: filename
    }

    s3.deleteObject(params, function(err, data) {
        if (err) throw err
        console.log('Associated image at S3 deleted!')
    })
}

exports.deleteFilesFromS3 = () => {
    s3.listObjects({ Bucket: 'furida' }, (err, data) => {
        if (err) throw err
        
        const params = {
            Bucket: 'furida',
            Delete: {
                Objects: data.Contents.map(({ Key }) => ({ Key }))
            }
        }

        s3.deleteObjects(params, err => {
            if (err) throw err
            console.log('All associated images st S3 deleted!')
        })
    })
}