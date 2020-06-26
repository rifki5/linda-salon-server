import { s3 } from "./settingAwsS3";
import { Context } from "../../services/utils";

export const processDeleteProductPhoto = async (id, key, ctx: Context) => {
  const params = {
    Bucket: 'com.prisma.s3',
    Key: key
  }
  const deletePhoto = await s3.deleteObject(params).promise()
  
  ctx.db.mutation.deleteProductPhoto({
    where: {
      id
    }
  })

  return deletePhoto.$response.error === null ?  { success: true } : { success: false }
}
