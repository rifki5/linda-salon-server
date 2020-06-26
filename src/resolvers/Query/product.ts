import { filterBookingsByDateGiven, filterProducts } from '../../services/filter-products'
import { Context } from '../../services/utils'
import { flatten } from '../../services/function-helper'

export const product = {
  product (parent, { id }, ctx: Context, info) {
    return ctx.db.query.product({
      where: {
        id
      }
    }, info)
  },
  
  productsConnection(parent, { first, skip, tag }, ctx: Context, info) {
    return ctx.db.query.productsConnection({
      where: {
        tag
      },
      first: first,
      skip: skip
    }, `{
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      aggregate {
        count
      }
      edges {
        node {
          id
          name
          description
          tag
          stock
          photo {
            id
            key
            url
          }
          price
        }
      }
    }`)
  },

  async filterProductByDateGiven(parent, {startDate, endDate, first, skip, tag}, ctx: Context, info) {
    const bookings = await ctx.db.query.bookings({where: {
      items_every: {
        product: {
          tag
        }
      }
    }}, `{
      id
      startDate
      endDate
      status
      items {
        amount
        product {
          id
          tag
          stock
        }
      }
    }`)

    const productsConnection = await ctx.db.query.productsConnection({
      where: {
        tag
      },
      orderBy: "createdAt_DESC",
      first: first,
      skip: skip
    }, `{
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      aggregate {
        count
      }
      edges {
        node {
          id
          name
          stock
          description
          tag
          price
          photo {
            id
            key
            url
          }
        }
      }
    }`)

    const products = productsConnection.edges

    if (bookings) {
      // filter if booking has items are operlapping by date given 
      const filter1 = filterBookingsByDateGiven(bookings, startDate, endDate)
      // this function is running if booking has items
      if (filter1 && filter1.length) {
        // join together to 1 array
        const flatternItem = flatten(filter1)

        const finalFilter = filterProducts(flatternItem, products)

        // filter final
        return { ...productsConnection, edges: finalFilter }
      }
    }
    return productsConnection
  }
}