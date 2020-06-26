import { Context } from '../../services/utils'
import { startOfMonth, endOfMonth, getDate, isWithinRange, addDays, subDays } from 'date-fns'

export const booking = {
  booking(parent, { id }, ctx: Context, info) {
    return ctx.db.query.booking({
      where: {
        id
      }
    }, info)
  },
  async bookingsFilterByDate(parent, { dateNow }, ctx: Context, info) {
    const bookings = await ctx.db.query.bookings({}, `{
      startDate
      endDate
      userBooking {
        name
      },
      status
    }`)
    const start = startOfMonth(dateNow)
    const end = endOfMonth(dateNow)
    const bookingLength = bookings.length
    let result = []

    const getType = (status: string) => {
      if (status === 'SEND') {
        return 'warning'
      } else if ( status === 'PROCCESS') {
        return 'processing'
      } else if ( status === 'SUCCESS')
        return 'success'
    }

    if (bookingLength) {
      for ( let i = 1; i <= getDate(end); i++) {

        for( let j = 0; j <= bookingLength - 1; j++) {
          if (
            isWithinRange(
              addDays(start, i - 1),
              subDays(bookings[j].startDate, 1),
              bookings[j].endDate
            ) 
            && result.length
            && result[result.length - 1].date === i
          ) {
            result[result.length - 1] = { ...result[result.length - 1], data: [...result[result.length -1].data, {
              type: getType(bookings[j].status),content: bookings[j].userBooking.name
            }]}
          } else if (
            isWithinRange(
              addDays(start, i - 1),
              subDays(bookings[j].startDate, 1),
              bookings[j].endDate
            )
          ) {
            result.push(
              {
                date: i,
                data: [
                  {type: getType(bookings[j].status),content: bookings[j].userBooking.name}
                ]
              }
            )
          }
        }
      }
    }
    return result
  },
  searchBookingsByUser(parent, { idUser, first, skip }, ctx: Context, info) {
    return ctx.db.query.bookingsConnection({
      first,
      skip,
      where: {
        AND: {
          userBooking: {
            id: idUser
          },
          status_not: "CREATED"
        }
      },
      orderBy: "createdAt_DESC"
    }, info)
  },
  searchBookingUserStatusCreated(parent, { idUser }, ctx: Context, info) {
    return ctx.db.query.bookings({
      where: {
        AND: {
          userBooking: {
            id: idUser
          },
          status: "CREATED"
        }
      }
    })
  },
  bookingConnection(parent, {first, skip}, ctx: Context, info) {
    return ctx.db.query.bookingsConnection({
      first,
      skip,
      orderBy: "createdAt_DESC"
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
          startDate
          endDate
          noWhatsApp
          address
          message
          status
          userBooking {
            id
            name
          }
          items {
            id
            product {
              id
            }
          }
        }
      }
    }`)
  }
}