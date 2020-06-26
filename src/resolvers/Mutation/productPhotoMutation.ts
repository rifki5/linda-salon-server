import { Context } from '../../services/utils'
import { processUploadProductPhoto } from '../../modules/uploadPhoto/processUploadProductPhoto';
import { processDeleteProductPhoto } from '../../modules/uploadPhoto/processDeleteProductPhoto';

export const productPhotoMutation = {
  async uploadProductPhoto(parent, { file } , ctx: Context, info) {
    return await processUploadProductPhoto(await file, ctx)
  },
  async deleteProductPhoto(parent, { idPhoto, key } , ctx: Context, info) {
    return await processDeleteProductPhoto(idPhoto, key, ctx)
  }
}