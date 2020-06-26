const uuid = require('uuid/v1')
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

export const processUpload = async(upload, ctx) => {
  if (!upload) {
    return console.log('ERROR: No file received or you are not login.')
  }
  
  const { stream, filename, mimetype, encoding } = await upload
  const key = uuid() + '-' + filename

  // Upload to S3
  // const response = await s3
  //   .upload({
  //     Key: key,
  //     ACL: 'public-read',
  //     Body: stream,
  //     Bucket: 'com.prisma.s3',
  //   }).promise()
  

  const response = await s3.upload({
    Key: key,
    ACL: 'public-read',
    Body: stream,
    Bucket: 'com.prisma.s3',
  }, {
    // partSize: 10 * 1024 * 1024, queueSize: 1
  },
  function(err, data) {
    if (err) {
      throw new Error('errrrrrrrrorrr')
    }
  }).promise()

    const url = response.Location

    // Sync with Prisma
  const data = {
    filename,
    mimetype,
    encoding,
    url,
  }

  // const cek = new S3()
  // const params = {Bucket: 'com.prisma.s3', Key: '405bd2b0-8c97-11e8-8eb9-99ebb691c970-dsss.png' }
  // s3.deleteObject(params, function(err, data) {
  //   if (err) console.log(err, err.stack);  // error
  //   else     console.log();                 // deleted
  // });

  const { id } = await ctx.db.mutation.createFile({ data }, ` { id } `)

  const file = {
    id,
    filename,
    mimetype,
    encoding,
    url,
  }
  
  return file
}
