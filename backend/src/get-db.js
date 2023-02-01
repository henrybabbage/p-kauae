const { S3Client, GetObjectCommand, ListObjectsCommand } = require('@aws-sdk/client-s3');
require('dotenv').config()
var fs = require('fs')
const client = new S3Client({ 
    region: 'ap-southeast-2', 
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

 var dir = 'data'
 var file_name = 'pukauae-backend-data.tar.gz'

 const bucketParams = {
    Bucket: process.env.AWS_BUCKET,
    Key: dir + '/' + file_name
  };

 const get = async () => {
    try {
      // Get the object from the Amazon S3 bucket. It is returned as a ReadableStream.
      const data = await client.send(new GetObjectCommand(bucketParams));
      // Convert the ReadableStream to a string.
      var res = await data.Body.transformToString();
      // write file
      fs.writeFile(file_name, res, (err) => {
        if (err)
        console.log(err);
      else {
        console.log("File written successfully\n"); 
 }
      })
      return res;
    } catch (err) {
      console.log("Error", err);
    }
};

const list = async () => {
    try {
      const data = await client.send(new ListObjectsCommand(bucketParams));
      console.log("Success", data);
      return data; // For unit tests.
    } catch (err) {
      console.log("Error", err);
    }
  };
  
  get();