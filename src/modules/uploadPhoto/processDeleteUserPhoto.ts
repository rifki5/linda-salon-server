import { s3 } from "./settingAwsS3";
import { Context } from "../../services/utils";

export const processDeleteUserPhoto = async (idPhoto: string, key: string, ctx: Context) => {
  const params = {
    Bucket: 'com.prisma.s3',
    Key: key
  }

  const deletePhoto = await s3.deleteObject(params).promise()

  if (deletePhoto.$response.error === null) {
    const removePhoto = await ctx.db.mutation.deleteUserPhoto({
      where: {
        id: idPhoto
      }
    })

    return removePhoto
  } else {
    throw new Error('error during delete photo')
  }
    
}
