import { Context } from '../../services/utils'
import { processUploadUserPhoto } from '../../modules/uploadPhoto/processUploadUserPhoto';
import { processDeleteUserPhoto } from '../../modules/uploadPhoto/processDeleteUserPhoto';


export const userPhotoMutation = {
  async uploadUserPhoto(parent, { file } , ctx: Context, info) {
    return await processUploadUserPhoto(await file, ctx)
  },
  async deleteUserPhoto(parent, { idPhoto, key } , ctx: Context, info) {
    return await processDeleteUserPhoto(idPhoto, key, ctx)
  }
}