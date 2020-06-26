import { getUserId, Context } from '../../services/utils'

export const user = {
  user (parent, { id }, ctx: Context, info) {
    return ctx.db.query.user({
      where: {
        id
      }
    }, info)
  },

  me (parent, args, ctx: Context, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id }}, `{
      id
      name
      email
      photo {
        id
        key
        url
      }
      role
      bookings (where: {
        status: CREATED
      }) {
        id
        startDate
        endDate
        noWhatsApp
        address
        message
        items {
          id
          amount
          product {
            id
            name
            description
            stock
            price
          }
        }
        status
      }
    }`)
  },

  usersConnection(parent, { first, skip, role }, ctx: Context, info) {
    return ctx.db.query.usersConnection({
      first: first,
      skip: skip,
      where: {
        role
      }
    }, `{
      aggregate {
        count
      }
      edges {
        node {
          id
          name
          email
          photo {
            id
            key
            url
          }
        }
      }
    }`)
  },
}