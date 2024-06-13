import AWS from 'aws-sdk';

const spacesEndpoint = new AWS.Endpoint(process.env.DO_SPACES_ENDPOINT);
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.DO_SPACES_KEY,
  secretAccessKey: process.env.DO_SPACES_SECRET,
});

async function uploadFile(file, bucketName) {
  const params = {
    Bucket: bucketName,
    Key: `${Date.now()}_${file.originalname}`,
    Body: file.buffer,
    ACL: 'public-read',
  };

  return s3.upload(params).promise();
}

export default uploadFile;
