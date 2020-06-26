import { Context } from '../../services/utils'

export const productPhoto = {
  productPhoto(parent, { id }, ctx: Context, info) {
    return ctx.db.query.productPhoto({ where: { id } }, info)
  },
  
  productPhotos(parent, args, ctx: Context, info) {
    return ctx.db.query.userPhotos(args, info)
  },
}