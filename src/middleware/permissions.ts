import { rule, shield } from 'graphql-shield'
import { Context, getUser } from '../services/utils';

// Rules
const isAuthenticated = rule()(async (parent, args, ctx: Context, info) => {
  const user = await getUser(ctx)
  return user !== null
})

const isAdmin = rule()(async (parent, args, ctx: Context, info) => {
  const user = await getUser(ctx)
  return user.role as string === 'ADMIN'
})

const isCustomer = rule()(async (parent, args, ctx, info) => {
  const user = await getUser(ctx)
  return user.role as string === 'CUSTOMER'
})

const permission = shield({
  Query: {
    
  },
  Mutation: {
  
  }
})

export default permission