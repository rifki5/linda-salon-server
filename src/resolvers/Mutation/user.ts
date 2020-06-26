import * as bcrypt from 'bcryptjs'
import { Context } from '../../services/utils'
import { processDeleteUserPhoto } from '../../modules/uploadPhoto/processDeleteUserPhoto';
import { User } from '../../generated/prisma';

export const userMutation = {
  async createAdmin(parent, args, ctx: Context, info) {
    const passwordBcrypt = await bcrypt.hash(args.password, 10)
    return ctx.db.mutation.createUser({
      data: {
        ...args,
        password: passwordBcrypt,
        role: "ADMIN"
      }
    })
  },

  async deleteUser(parent, { id }, ctx: Context, info) {
    const getUser = await ctx.db.query.user({
      where: {
        id
      }
    })

    let isDeleteFromServer = false 
    if (getUser && getUser.photo) {
      const result = await processDeleteUserPhoto(getUser.photo.id, getUser.photo.key, ctx) 
      if (result && result.id) {
        isDeleteFromServer = true
      } else {
        isDeleteFromServer = false
      }
    } else {
      isDeleteFromServer = true
    }

    if (isDeleteFromServer) {
      return ctx.db.mutation.deleteUser({
        where: {
          id
        }
      }, info)
    } else {
      throw new Error ('error while delete photo')
    }
  },

  async deleteManyUser(parent, { ids }, ctx: Context, info) {
    const getUsers = await ctx.db.query.users({
      where: {
        id_in: ids
      }
    }, `{
      photo {
        id
        key
      }
    }`)

    const deletePhotos = (getUsers: User[]) => {
      for (let i = 0; i <= getUsers.length; i++) {
        if (getUsers[i] && getUsers[i].photo) {
          processDeleteUserPhoto(getUsers[i].photo.id, getUsers[i].photo.key, ctx)
        }
      }
    }

    try {
      deletePhotos(getUsers)
      return ctx.db.mutation.deleteManyUsers({
        where: {
          id_in: [...ids]
        }
      })
    }
    catch (err) {
      throw new Error('error during delete many product')
    }
  },

  async updateUser(parent, args , ctx: Context, info) {
    const { name, email, password, whereId } = args

    const user = await ctx.db.query.user({ where: { id: whereId } }, `{
      password
      photo {
        id
      }
    }`)

    const updateUser = (data) => ctx.db.mutation.updateUser({
      ...data
    })

    // const isNewUserPhoto = user.photo.id ? === idPhotoUser

    const passwordBcrypt = async (password) => await bcrypt.hash(password, 10)

    // const fieldPassword = valid ? password : passwordBcrypt(password)
    const cekPassword = async(password, user) => {
      const valid = await bcrypt.compare(password, user.password)
      if (valid) {
        return user.password
      } else {
        const newPass = await passwordBcrypt(password)
        return newPass
      }
    }

    if (user) {
      const newPassword = password ? await cekPassword(password, user) : user.password
      
      const data = {
        data: {
          name: name,
          email: email,
          password: newPassword,
        },
        where: {
          id: whereId
        }
      }

      return updateUser(data)
  
    }
    return new Error('Error during update user')
  }  
}