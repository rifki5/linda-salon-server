import { user } from './Query/user'
import { product } from './Query/product'
import { booking } from './Query/booking'
// import { Subscription } from './Subscription'
import { auth } from './Mutation/auth'
import { productMutation } from './Mutation/product'
import { userMutation } from './Mutation/user'
import { AuthPayload } from './AuthPayload'
import { userPhotoMutation } from './Mutation/userPhotoMutation';
import { productPhotoMutation } from './Mutation/productPhotoMutation';
import { bookingMutation } from './Mutation/booking';

export default {
  Query: {
    ...user,
    ...product,
    ...booking
  },
  Mutation: {
    ...auth,
    ...productMutation,
    ...userMutation,
    ...userPhotoMutation,
    ...productPhotoMutation,
    ...bookingMutation
  },
  AuthPayload,
}
