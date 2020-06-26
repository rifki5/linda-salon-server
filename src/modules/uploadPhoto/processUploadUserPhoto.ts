import { s3 } from './settingAwsS3'
import { getUserId } from '../../services/utils'
const uuid = require('uuid/v1')

export const processUploadUserPhoto = async(upload, ctx) => {
  if (!upload) {
    return console.log('ERROR: No file received or you are not login.')
  }
  
  const { stream, filename, mimetype, encoding } = await upload
  const key = uuid() + '-' + filename

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
      throw new Error('error during upload')
    }
  }).promise()

  const url = response.Location

  // Sync with Prisma
  const data = {
    key,
    filename,
    mimetype,
    encoding,
    url,
  }
  
  // get user id 
  const userId = await getUserId(ctx)

  const { id } = await ctx.db.mutation.createUserPhoto({
    data: {
      ...data,
      userPhoto: {
        connect: {
          id: userId
        }
      }
    },
  }, ` { id } `)

  const userPhoto = {
    id,
    key,
    filename,
    mimetype,
    encoding,
    url,
  }
  
  return userPhoto
}
