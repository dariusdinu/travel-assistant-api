import { Endpoint, S3 } from 'aws-sdk';

const spacesEndpoint = new Endpoint(process.env.DO_SPACES_ENDPOINT);

const s3 = new S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.DO_SPACES_KEY,
  secretAccessKey: process.env.DO_SPACES_SECRET,
});

export default s3;
