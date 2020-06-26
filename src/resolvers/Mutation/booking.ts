import { Context, getUserId } from '../../services/utils'

export const bookingMutation = {
  async createBooking(parent, { startDate, endDate }, ctx: Context, info) {
    const userId = await getUserId(ctx)
    return ctx.db.mutation.createBooking({
      data: {
        startDate,
        endDate,
        userBooking: {
          connect: {
            id: userId
          }
        }
      }
    }, `
      {
        id
        startDate
        endDate
        items {
          id
          amount
          product {
            id
            name
            description
            price
          }
        }
        message
        noWhatsApp
        address
        status
      }
    `)
  },

  addProductToBooking(parent, { idProduct, amount, idBooking }, ctx: Context, info) {
    return ctx.db.mutation.updateBooking({
      data: {
        items: {
          create: {
            amount,
            product: {
              connect: {
                id: idProduct
              }
            }
          }
        }
      },
      where: {
        id: idBooking
      }
    }, `{
      id
      items {
        id
        amount
        product {
          id
        }
      }
    }`)
  },

  sendBooking(parent, { idBooking, address, noWhatsApp, message }, ctx: Context, info) {
    const messageValue = message ? message : " "
    return ctx.db.mutation.updateBooking({
      data: {
        status: "SEND",
        address,
        noWhatsApp,
        message: messageValue
      },
      where: {
        id: idBooking
      }
    }, info)
  },

  removeItemFromBooking(parent, { idItem, idBooking }, ctx: Context, info) {
    return ctx.db.mutation.updateBooking({
      data: {
        items: {
          delete: {
            id: idItem
          }
        }
      },
      where: {
        id: idBooking
      }
    }, `{
      id
      items {
        id
      }
    }`)
  },

  deleteBooking(parent, { id }, ctx: Context, info) {
    return ctx.db.mutation.deleteBooking({
      where: {
        id
      }
    })
  },

  deleteManyBooking(parent, { ids }, ctx: Context, info) {
    return ctx.db.mutation.deleteManyBookings({
      where: {
        id_in: [...ids]
      }
    })
  },

  updateStatusBooking(parent, { status, idBooking }, ctx: Context, info) {
    return ctx.db.mutation.updateBooking({
      data: {
        status
      },
      where: {
        id: idBooking
      }
    }, info)
  }
}