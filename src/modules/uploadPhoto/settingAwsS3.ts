import { S3 } from "aws-sdk"

export const s3 = new S3({
  params:  {
    Bucket: 'com.prisma.s3',
  },
  credentials: {
    accessKeyId: 'foo',
    secretAccessKey: 'bar',
  },
  endpoint: 'http://localhost:4567',
})