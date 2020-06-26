import { Context } from '../../services/utils'
import { processDeleteProductPhoto } from '../../modules/uploadPhoto/processDeleteProductPhoto'
import { Product } from '../../generated/prisma';

export const productMutation = {
  createProduct(parent, { name, stock, price, description, tag, idPhotoProduct }, ctx: Context, info) {
    return ctx.db.mutation.createProduct({
      data: {
        name,
        stock,
        price,
        description,
        tag,
        photo: {
          connect: {
            id: idPhotoProduct
          }
        }
      }
    }, `{
      id
      name
      stock
      price
      description
      photo {
        id
        key
        url
      }
      tag
    }`)
  },

  async deleteProduct(parent, { id }, ctx: Context, info) {
    const getProduct = await ctx.db.query.product({
      where: {
        id: id
      }
    })
    
    let isDeleteFromServer = false
    if (getProduct && getProduct.photo) {
      const { success } = await processDeleteProductPhoto(getProduct.photo.id, getProduct.photo.key, ctx)
      isDeleteFromServer = success
    } else {
      isDeleteFromServer = true
    }
    
    if (isDeleteFromServer) {
      return ctx.db.mutation.deleteProduct({
        where: {
          id
        }
      }, info)
    } else {
      throw new Error ('error while delete photo')
    }
  },

  async deleteManyProduct(parent, { ids }, ctx: Context, info) {
    const getProducts = await ctx.db.query.products({
      where: {
        id_in: ids
      }
    }, `{
      photo {
        id
        key
      }
    }`)
    
    const deletePhotos = (getProducts: Product[]) => {
      for (let i = 0; i <= getProducts.length; i++) {
        if (getProducts[i] && getProducts[i].photo) {
          processDeleteProductPhoto(getProducts[i].photo.id, getProducts[i].photo.key, ctx)
        }
      }
    }


    try {
      deletePhotos(getProducts)
      return ctx.db.mutation.deleteManyProducts({
        where: {
          id_in: [...ids]
        }
      })
    }
    catch (err) {
      throw new Error('error during delete many product')
    }
  },

  updateProduct(parent, { name, stock, price, description, tag, whereId, idPhotoProduct}, ctx: Context, info) {
    return idPhotoProduct ?
      ctx.db.mutation.updateProduct({
        data: {
          name,
          stock,
          price,
          description,
          tag,
          photo: {
            connect: {
               id: idPhotoProduct
            }
          }
        },
        where: {
          id: whereId
        }
      }, info)
    : ctx.db.mutation.updateProduct({
      data: {
        name,
        stock,
        price,
        description,
        tag,
      },
      where: {
        id: whereId
      }
    }, info)
  }
}