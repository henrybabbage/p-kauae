const { S3 } = require('@aws-sdk/client-s3')
require('dotenv').config()
var fs = require('fs')
const client = new S3({
    region: 'ap-southeast-2',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})
var dir = 'data'
var file_name = 'pukauae-backend-data.tar.gz'
const bucketParams = {
    Bucket: process.env.AWS_BUCKET,
    Key: dir + '/' + file_name
}
const get = async () => {
    try {
        var f = fs.createWriteStream(file_name)
        // Get the backend data from the Amazon S3 bucket.
        const d = await (await client.getObject(bucketParams)).Body.pipe(f)
        console.log('Back end data downloaded from aws!')
    } catch (err) {
        console.log('Error', err)
    }
}
get()
