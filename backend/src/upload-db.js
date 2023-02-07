const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3')
require('dotenv').config()
var fs = require('fs')
const client = new S3Client({
    region: 'ap-southeast-2',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const dir = 'data'
const file_name = 'pukauae-backend-data.tar.gz'
const fileStream = fs.createReadStream(file_name)

const bucketParams = {
    Bucket: process.env.AWS_BUCKET,
    Key: dir + '/' + file_name,
    Body: fileStream
}

// Upload file to specified bucket.
const up = async () => {
    try {
        const data = await client.send(new PutObjectCommand(bucketParams))
        console.log('Success', data)
        return data // For unit tests.
    } catch (err) {
        console.log('Error', err)
    }
}
up()
