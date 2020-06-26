import * as jwt from 'jsonwebtoken'
import { Prisma } from '../generated/prisma'

export interface Context {
  db: Prisma
  request: any
}

export function getUserId(ctx: Context) {
  const Authorization = ctx.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string }
    return userId
  }

  throw new AuthError()
}

export async function getUser(ctx: Context) {
  const userId = getUserId(ctx)
  const user = await ctx.db.query.user({
    where: { id: userId }
  })
  if (user) return user
  throw new AuthError()
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}
