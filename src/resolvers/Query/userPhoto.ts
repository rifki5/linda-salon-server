import { Context } from '../../services/utils'

export const userPhoto = {
  usersPhoto(parent, { id }, ctx: Context, info) {
    return ctx.db.query.userPhoto({ where: { id } }, info)
  },
  
  usersPhotos(parent, args, ctx: Context, info) {
    return ctx.db.query.userPhotos(args, info)
  },
}