import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bookings: <T = Booking[]>(args: { where?: BookingWhereInput, orderBy?: BookingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    items: <T = Item[]>(args: { where?: ItemWhereInput, orderBy?: ItemOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    products: <T = Product[]>(args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userPhotos: <T = UserPhoto[]>(args: { where?: UserPhotoWhereInput, orderBy?: UserPhotoOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    productPhotos: <T = ProductPhoto[]>(args: { where?: ProductPhotoWhereInput, orderBy?: ProductPhotoOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    photoGalleries: <T = PhotoGallery[]>(args: { where?: PhotoGalleryWhereInput, orderBy?: PhotoGalleryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    booking: <T = Booking | null>(args: { where: BookingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    item: <T = Item | null>(args: { where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    product: <T = Product | null>(args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userPhoto: <T = UserPhoto | null>(args: { where: UserPhotoWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    productPhoto: <T = ProductPhoto | null>(args: { where: ProductPhotoWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    photoGallery: <T = PhotoGallery | null>(args: { where: PhotoGalleryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bookingsConnection: <T = BookingConnection>(args: { where?: BookingWhereInput, orderBy?: BookingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    itemsConnection: <T = ItemConnection>(args: { where?: ItemWhereInput, orderBy?: ItemOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    productsConnection: <T = ProductConnection>(args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userPhotosConnection: <T = UserPhotoConnection>(args: { where?: UserPhotoWhereInput, orderBy?: UserPhotoOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    productPhotosConnection: <T = ProductPhotoConnection>(args: { where?: ProductPhotoWhereInput, orderBy?: ProductPhotoOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    photoGalleriesConnection: <T = PhotoGalleryConnection>(args: { where?: PhotoGalleryWhereInput, orderBy?: PhotoGalleryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBooking: <T = Booking>(args: { data: BookingCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createItem: <T = Item>(args: { data: ItemCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createProduct: <T = Product>(args: { data: ProductCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUserPhoto: <T = UserPhoto>(args: { data: UserPhotoCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createProductPhoto: <T = ProductPhoto>(args: { data: ProductPhotoCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPhotoGallery: <T = PhotoGallery>(args: { data: PhotoGalleryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBooking: <T = Booking | null>(args: { data: BookingUpdateInput, where: BookingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateItem: <T = Item | null>(args: { data: ItemUpdateInput, where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProduct: <T = Product | null>(args: { data: ProductUpdateInput, where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUserPhoto: <T = UserPhoto | null>(args: { data: UserPhotoUpdateInput, where: UserPhotoWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProductPhoto: <T = ProductPhoto | null>(args: { data: ProductPhotoUpdateInput, where: ProductPhotoWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePhotoGallery: <T = PhotoGallery | null>(args: { data: PhotoGalleryUpdateInput, where: PhotoGalleryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBooking: <T = Booking | null>(args: { where: BookingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteItem: <T = Item | null>(args: { where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteProduct: <T = Product | null>(args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUserPhoto: <T = UserPhoto | null>(args: { where: UserPhotoWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteProductPhoto: <T = ProductPhoto | null>(args: { where: ProductPhotoWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePhotoGallery: <T = PhotoGallery | null>(args: { where: PhotoGalleryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBooking: <T = Booking>(args: { where: BookingWhereUniqueInput, create: BookingCreateInput, update: BookingUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertItem: <T = Item>(args: { where: ItemWhereUniqueInput, create: ItemCreateInput, update: ItemUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertProduct: <T = Product>(args: { where: ProductWhereUniqueInput, create: ProductCreateInput, update: ProductUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUserPhoto: <T = UserPhoto>(args: { where: UserPhotoWhereUniqueInput, create: UserPhotoCreateInput, update: UserPhotoUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertProductPhoto: <T = ProductPhoto>(args: { where: ProductPhotoWhereUniqueInput, create: ProductPhotoCreateInput, update: ProductPhotoUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPhotoGallery: <T = PhotoGallery>(args: { where: PhotoGalleryWhereUniqueInput, create: PhotoGalleryCreateInput, update: PhotoGalleryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBookings: <T = BatchPayload>(args: { data: BookingUpdateInput, where?: BookingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyItems: <T = BatchPayload>(args: { data: ItemUpdateInput, where?: ItemWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProducts: <T = BatchPayload>(args: { data: ProductUpdateInput, where?: ProductWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUserPhotos: <T = BatchPayload>(args: { data: UserPhotoUpdateInput, where?: UserPhotoWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProductPhotos: <T = BatchPayload>(args: { data: ProductPhotoUpdateInput, where?: ProductPhotoWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPhotoGalleries: <T = BatchPayload>(args: { data: PhotoGalleryUpdateInput, where?: PhotoGalleryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBookings: <T = BatchPayload>(args: { where?: BookingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyItems: <T = BatchPayload>(args: { where?: ItemWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProducts: <T = BatchPayload>(args: { where?: ProductWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUserPhotos: <T = BatchPayload>(args: { where?: UserPhotoWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProductPhotos: <T = BatchPayload>(args: { where?: ProductPhotoWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPhotoGalleries: <T = BatchPayload>(args: { where?: PhotoGalleryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    booking: <T = BookingSubscriptionPayload | null>(args: { where?: BookingSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    item: <T = ItemSubscriptionPayload | null>(args: { where?: ItemSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    product: <T = ProductSubscriptionPayload | null>(args: { where?: ProductSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    userPhoto: <T = UserPhotoSubscriptionPayload | null>(args: { where?: UserPhotoSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    productPhoto: <T = ProductPhotoSubscriptionPayload | null>(args: { where?: ProductPhotoSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    photoGallery: <T = PhotoGallerySubscriptionPayload | null>(args: { where?: PhotoGallerySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Booking: (where?: BookingWhereInput) => Promise<boolean>
  Item: (where?: ItemWhereInput) => Promise<boolean>
  Product: (where?: ProductWhereInput) => Promise<boolean>
  UserPhoto: (where?: UserPhotoWhereInput) => Promise<boolean>
  ProductPhoto: (where?: ProductPhotoWhereInput) => Promise<boolean>
  PhotoGallery: (where?: PhotoGalleryWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateBooking {
  count: Int!
}

type AggregateItem {
  count: Int!
}

type AggregatePhotoGallery {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateProductPhoto {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserPhoto {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Booking implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  startDate: DateTime!
  endDate: DateTime!
  noWhatsApp: String
  address: String
  message: String
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
  status: BookingStatus!
  userBooking(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type BookingConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BookingEdge]!
  aggregate: AggregateBooking!
}

input BookingCreateInput {
  startDate: DateTime!
  endDate: DateTime!
  noWhatsApp: String
  address: String
  message: String
  status: BookingStatus
  items: ItemCreateManyWithoutBookingInput
  userBooking: UserCreateOneWithoutBookingsInput!
}

input BookingCreateManyWithoutUserBookingInput {
  create: [BookingCreateWithoutUserBookingInput!]
  connect: [BookingWhereUniqueInput!]
}

input BookingCreateOneWithoutItemsInput {
  create: BookingCreateWithoutItemsInput
  connect: BookingWhereUniqueInput
}

input BookingCreateWithoutItemsInput {
  startDate: DateTime!
  endDate: DateTime!
  noWhatsApp: String
  address: String
  message: String
  status: BookingStatus
  userBooking: UserCreateOneWithoutBookingsInput!
}

input BookingCreateWithoutUserBookingInput {
  startDate: DateTime!
  endDate: DateTime!
  noWhatsApp: String
  address: String
  message: String
  status: BookingStatus
  items: ItemCreateManyWithoutBookingInput
}

"""An edge in a connection."""
type BookingEdge {
  """The item at the end of the edge."""
  node: Booking!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BookingOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  startDate_ASC
  startDate_DESC
  endDate_ASC
  endDate_DESC
  noWhatsApp_ASC
  noWhatsApp_DESC
  address_ASC
  address_DESC
  message_ASC
  message_DESC
  status_ASC
  status_DESC
}

type BookingPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  startDate: DateTime!
  endDate: DateTime!
  noWhatsApp: String
  address: String
  message: String
  status: BookingStatus!
}

enum BookingStatus {
  CREATED
  SEND
  PROCCESS
  SUCCESS
}

type BookingSubscriptionPayload {
  mutation: MutationType!
  node: Booking
  updatedFields: [String!]
  previousValues: BookingPreviousValues
}

input BookingSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BookingSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BookingSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BookingSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BookingWhereInput
}

input BookingUpdateInput {
  startDate: DateTime
  endDate: DateTime
  noWhatsApp: String
  address: String
  message: String
  status: BookingStatus
  items: ItemUpdateManyWithoutBookingInput
  userBooking: UserUpdateOneWithoutBookingsInput
}

input BookingUpdateManyWithoutUserBookingInput {
  create: [BookingCreateWithoutUserBookingInput!]
  connect: [BookingWhereUniqueInput!]
  disconnect: [BookingWhereUniqueInput!]
  delete: [BookingWhereUniqueInput!]
  update: [BookingUpdateWithWhereUniqueWithoutUserBookingInput!]
  upsert: [BookingUpsertWithWhereUniqueWithoutUserBookingInput!]
}

input BookingUpdateOneWithoutItemsInput {
  create: BookingCreateWithoutItemsInput
  connect: BookingWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: BookingUpdateWithoutItemsDataInput
  upsert: BookingUpsertWithoutItemsInput
}

input BookingUpdateWithoutItemsDataInput {
  startDate: DateTime
  endDate: DateTime
  noWhatsApp: String
  address: String
  message: String
  status: BookingStatus
  userBooking: UserUpdateOneWithoutBookingsInput
}

input BookingUpdateWithoutUserBookingDataInput {
  startDate: DateTime
  endDate: DateTime
  noWhatsApp: String
  address: String
  message: String
  status: BookingStatus
  items: ItemUpdateManyWithoutBookingInput
}

input BookingUpdateWithWhereUniqueWithoutUserBookingInput {
  where: BookingWhereUniqueInput!
  data: BookingUpdateWithoutUserBookingDataInput!
}

input BookingUpsertWithoutItemsInput {
  update: BookingUpdateWithoutItemsDataInput!
  create: BookingCreateWithoutItemsInput!
}

input BookingUpsertWithWhereUniqueWithoutUserBookingInput {
  where: BookingWhereUniqueInput!
  update: BookingUpdateWithoutUserBookingDataInput!
  create: BookingCreateWithoutUserBookingInput!
}

input BookingWhereInput {
  """Logical AND on all given filters."""
  AND: [BookingWhereInput!]

  """Logical OR on all given filters."""
  OR: [BookingWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BookingWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  startDate: DateTime

  """All values that are not equal to given value."""
  startDate_not: DateTime

  """All values that are contained in given list."""
  startDate_in: [DateTime!]

  """All values that are not contained in given list."""
  startDate_not_in: [DateTime!]

  """All values less than the given value."""
  startDate_lt: DateTime

  """All values less than or equal the given value."""
  startDate_lte: DateTime

  """All values greater than the given value."""
  startDate_gt: DateTime

  """All values greater than or equal the given value."""
  startDate_gte: DateTime
  endDate: DateTime

  """All values that are not equal to given value."""
  endDate_not: DateTime

  """All values that are contained in given list."""
  endDate_in: [DateTime!]

  """All values that are not contained in given list."""
  endDate_not_in: [DateTime!]

  """All values less than the given value."""
  endDate_lt: DateTime

  """All values less than or equal the given value."""
  endDate_lte: DateTime

  """All values greater than the given value."""
  endDate_gt: DateTime

  """All values greater than or equal the given value."""
  endDate_gte: DateTime
  noWhatsApp: String

  """All values that are not equal to given value."""
  noWhatsApp_not: String

  """All values that are contained in given list."""
  noWhatsApp_in: [String!]

  """All values that are not contained in given list."""
  noWhatsApp_not_in: [String!]

  """All values less than the given value."""
  noWhatsApp_lt: String

  """All values less than or equal the given value."""
  noWhatsApp_lte: String

  """All values greater than the given value."""
  noWhatsApp_gt: String

  """All values greater than or equal the given value."""
  noWhatsApp_gte: String

  """All values containing the given string."""
  noWhatsApp_contains: String

  """All values not containing the given string."""
  noWhatsApp_not_contains: String

  """All values starting with the given string."""
  noWhatsApp_starts_with: String

  """All values not starting with the given string."""
  noWhatsApp_not_starts_with: String

  """All values ending with the given string."""
  noWhatsApp_ends_with: String

  """All values not ending with the given string."""
  noWhatsApp_not_ends_with: String
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  message: String

  """All values that are not equal to given value."""
  message_not: String

  """All values that are contained in given list."""
  message_in: [String!]

  """All values that are not contained in given list."""
  message_not_in: [String!]

  """All values less than the given value."""
  message_lt: String

  """All values less than or equal the given value."""
  message_lte: String

  """All values greater than the given value."""
  message_gt: String

  """All values greater than or equal the given value."""
  message_gte: String

  """All values containing the given string."""
  message_contains: String

  """All values not containing the given string."""
  message_not_contains: String

  """All values starting with the given string."""
  message_starts_with: String

  """All values not starting with the given string."""
  message_not_starts_with: String

  """All values ending with the given string."""
  message_ends_with: String

  """All values not ending with the given string."""
  message_not_ends_with: String
  status: BookingStatus

  """All values that are not equal to given value."""
  status_not: BookingStatus

  """All values that are contained in given list."""
  status_in: [BookingStatus!]

  """All values that are not contained in given list."""
  status_not_in: [BookingStatus!]
  items_every: ItemWhereInput
  items_some: ItemWhereInput
  items_none: ItemWhereInput
  userBooking: UserWhereInput
}

input BookingWhereUniqueInput {
  id: ID
}

scalar DateTime

type Item implements Node {
  id: ID!
  amount: Int!
  product(where: ProductWhereInput): Product
  booking(where: BookingWhereInput): Booking
}

"""A connection to a list of items."""
type ItemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateInput {
  amount: Int!
  product: ProductCreateOneWithoutItemInput
  booking: BookingCreateOneWithoutItemsInput
}

input ItemCreateManyWithoutBookingInput {
  create: [ItemCreateWithoutBookingInput!]
  connect: [ItemWhereUniqueInput!]
}

input ItemCreateManyWithoutProductInput {
  create: [ItemCreateWithoutProductInput!]
  connect: [ItemWhereUniqueInput!]
}

input ItemCreateWithoutBookingInput {
  amount: Int!
  product: ProductCreateOneWithoutItemInput
}

input ItemCreateWithoutProductInput {
  amount: Int!
  booking: BookingCreateOneWithoutItemsInput
}

"""An edge in a connection."""
type ItemEdge {
  """The item at the end of the edge."""
  node: Item!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ItemOrderByInput {
  id_ASC
  id_DESC
  amount_ASC
  amount_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ItemPreviousValues {
  id: ID!
  amount: Int!
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
}

input ItemUpdateInput {
  amount: Int
  product: ProductUpdateOneWithoutItemInput
  booking: BookingUpdateOneWithoutItemsInput
}

input ItemUpdateManyWithoutBookingInput {
  create: [ItemCreateWithoutBookingInput!]
  connect: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  delete: [ItemWhereUniqueInput!]
  update: [ItemUpdateWithWhereUniqueWithoutBookingInput!]
  upsert: [ItemUpsertWithWhereUniqueWithoutBookingInput!]
}

input ItemUpdateManyWithoutProductInput {
  create: [ItemCreateWithoutProductInput!]
  connect: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  delete: [ItemWhereUniqueInput!]
  update: [ItemUpdateWithWhereUniqueWithoutProductInput!]
  upsert: [ItemUpsertWithWhereUniqueWithoutProductInput!]
}

input ItemUpdateWithoutBookingDataInput {
  amount: Int
  product: ProductUpdateOneWithoutItemInput
}

input ItemUpdateWithoutProductDataInput {
  amount: Int
  booking: BookingUpdateOneWithoutItemsInput
}

input ItemUpdateWithWhereUniqueWithoutBookingInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateWithoutBookingDataInput!
}

input ItemUpdateWithWhereUniqueWithoutProductInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateWithoutProductDataInput!
}

input ItemUpsertWithWhereUniqueWithoutBookingInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateWithoutBookingDataInput!
  create: ItemCreateWithoutBookingInput!
}

input ItemUpsertWithWhereUniqueWithoutProductInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateWithoutProductDataInput!
  create: ItemCreateWithoutProductInput!
}

input ItemWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  amount: Int

  """All values that are not equal to given value."""
  amount_not: Int

  """All values that are contained in given list."""
  amount_in: [Int!]

  """All values that are not contained in given list."""
  amount_not_in: [Int!]

  """All values less than the given value."""
  amount_lt: Int

  """All values less than or equal the given value."""
  amount_lte: Int

  """All values greater than the given value."""
  amount_gt: Int

  """All values greater than or equal the given value."""
  amount_gte: Int
  product: ProductWhereInput
  booking: BookingWhereInput
}

input ItemWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createBooking(data: BookingCreateInput!): Booking!
  createItem(data: ItemCreateInput!): Item!
  createProduct(data: ProductCreateInput!): Product!
  createUserPhoto(data: UserPhotoCreateInput!): UserPhoto!
  createProductPhoto(data: ProductPhotoCreateInput!): ProductPhoto!
  createPhotoGallery(data: PhotoGalleryCreateInput!): PhotoGallery!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateBooking(data: BookingUpdateInput!, where: BookingWhereUniqueInput!): Booking
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateUserPhoto(data: UserPhotoUpdateInput!, where: UserPhotoWhereUniqueInput!): UserPhoto
  updateProductPhoto(data: ProductPhotoUpdateInput!, where: ProductPhotoWhereUniqueInput!): ProductPhoto
  updatePhotoGallery(data: PhotoGalleryUpdateInput!, where: PhotoGalleryWhereUniqueInput!): PhotoGallery
  deleteUser(where: UserWhereUniqueInput!): User
  deleteBooking(where: BookingWhereUniqueInput!): Booking
  deleteItem(where: ItemWhereUniqueInput!): Item
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteUserPhoto(where: UserPhotoWhereUniqueInput!): UserPhoto
  deleteProductPhoto(where: ProductPhotoWhereUniqueInput!): ProductPhoto
  deletePhotoGallery(where: PhotoGalleryWhereUniqueInput!): PhotoGallery
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertBooking(where: BookingWhereUniqueInput!, create: BookingCreateInput!, update: BookingUpdateInput!): Booking!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  upsertUserPhoto(where: UserPhotoWhereUniqueInput!, create: UserPhotoCreateInput!, update: UserPhotoUpdateInput!): UserPhoto!
  upsertProductPhoto(where: ProductPhotoWhereUniqueInput!, create: ProductPhotoCreateInput!, update: ProductPhotoUpdateInput!): ProductPhoto!
  upsertPhotoGallery(where: PhotoGalleryWhereUniqueInput!, create: PhotoGalleryCreateInput!, update: PhotoGalleryUpdateInput!): PhotoGallery!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyBookings(data: BookingUpdateInput!, where: BookingWhereInput): BatchPayload!
  updateManyItems(data: ItemUpdateInput!, where: ItemWhereInput): BatchPayload!
  updateManyProducts(data: ProductUpdateInput!, where: ProductWhereInput): BatchPayload!
  updateManyUserPhotos(data: UserPhotoUpdateInput!, where: UserPhotoWhereInput): BatchPayload!
  updateManyProductPhotos(data: ProductPhotoUpdateInput!, where: ProductPhotoWhereInput): BatchPayload!
  updateManyPhotoGalleries(data: PhotoGalleryUpdateInput!, where: PhotoGalleryWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyBookings(where: BookingWhereInput): BatchPayload!
  deleteManyItems(where: ItemWhereInput): BatchPayload!
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  deleteManyUserPhotos(where: UserPhotoWhereInput): BatchPayload!
  deleteManyProductPhotos(where: ProductPhotoWhereInput): BatchPayload!
  deleteManyPhotoGalleries(where: PhotoGalleryWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type PhotoGallery implements Node {
  id: ID!
  key: String!
  filename: String!
  mimetype: String!
  encoding: String!
  url: String!
}

"""A connection to a list of items."""
type PhotoGalleryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PhotoGalleryEdge]!
  aggregate: AggregatePhotoGallery!
}

input PhotoGalleryCreateInput {
  key: String!
  filename: String!
  mimetype: String!
  encoding: String!
  url: String!
}

"""An edge in a connection."""
type PhotoGalleryEdge {
  """The item at the end of the edge."""
  node: PhotoGallery!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PhotoGalleryOrderByInput {
  id_ASC
  id_DESC
  key_ASC
  key_DESC
  filename_ASC
  filename_DESC
  mimetype_ASC
  mimetype_DESC
  encoding_ASC
  encoding_DESC
  url_ASC
  url_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PhotoGalleryPreviousValues {
  id: ID!
  key: String!
  filename: String!
  mimetype: String!
  encoding: String!
  url: String!
}

type PhotoGallerySubscriptionPayload {
  mutation: MutationType!
  node: PhotoGallery
  updatedFields: [String!]
  previousValues: PhotoGalleryPreviousValues
}

input PhotoGallerySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PhotoGallerySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PhotoGallerySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PhotoGallerySubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PhotoGalleryWhereInput
}

input PhotoGalleryUpdateInput {
  key: String
  filename: String
  mimetype: String
  encoding: String
  url: String
}

input PhotoGalleryWhereInput {
  """Logical AND on all given filters."""
  AND: [PhotoGalleryWhereInput!]

  """Logical OR on all given filters."""
  OR: [PhotoGalleryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PhotoGalleryWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  key: String

  """All values that are not equal to given value."""
  key_not: String

  """All values that are contained in given list."""
  key_in: [String!]

  """All values that are not contained in given list."""
  key_not_in: [String!]

  """All values less than the given value."""
  key_lt: String

  """All values less than or equal the given value."""
  key_lte: String

  """All values greater than the given value."""
  key_gt: String

  """All values greater than or equal the given value."""
  key_gte: String

  """All values containing the given string."""
  key_contains: String

  """All values not containing the given string."""
  key_not_contains: String

  """All values starting with the given string."""
  key_starts_with: String

  """All values not starting with the given string."""
  key_not_starts_with: String

  """All values ending with the given string."""
  key_ends_with: String

  """All values not ending with the given string."""
  key_not_ends_with: String
  filename: String

  """All values that are not equal to given value."""
  filename_not: String

  """All values that are contained in given list."""
  filename_in: [String!]

  """All values that are not contained in given list."""
  filename_not_in: [String!]

  """All values less than the given value."""
  filename_lt: String

  """All values less than or equal the given value."""
  filename_lte: String

  """All values greater than the given value."""
  filename_gt: String

  """All values greater than or equal the given value."""
  filename_gte: String

  """All values containing the given string."""
  filename_contains: String

  """All values not containing the given string."""
  filename_not_contains: String

  """All values starting with the given string."""
  filename_starts_with: String

  """All values not starting with the given string."""
  filename_not_starts_with: String

  """All values ending with the given string."""
  filename_ends_with: String

  """All values not ending with the given string."""
  filename_not_ends_with: String
  mimetype: String

  """All values that are not equal to given value."""
  mimetype_not: String

  """All values that are contained in given list."""
  mimetype_in: [String!]

  """All values that are not contained in given list."""
  mimetype_not_in: [String!]

  """All values less than the given value."""
  mimetype_lt: String

  """All values less than or equal the given value."""
  mimetype_lte: String

  """All values greater than the given value."""
  mimetype_gt: String

  """All values greater than or equal the given value."""
  mimetype_gte: String

  """All values containing the given string."""
  mimetype_contains: String

  """All values not containing the given string."""
  mimetype_not_contains: String

  """All values starting with the given string."""
  mimetype_starts_with: String

  """All values not starting with the given string."""
  mimetype_not_starts_with: String

  """All values ending with the given string."""
  mimetype_ends_with: String

  """All values not ending with the given string."""
  mimetype_not_ends_with: String
  encoding: String

  """All values that are not equal to given value."""
  encoding_not: String

  """All values that are contained in given list."""
  encoding_in: [String!]

  """All values that are not contained in given list."""
  encoding_not_in: [String!]

  """All values less than the given value."""
  encoding_lt: String

  """All values less than or equal the given value."""
  encoding_lte: String

  """All values greater than the given value."""
  encoding_gt: String

  """All values greater than or equal the given value."""
  encoding_gte: String

  """All values containing the given string."""
  encoding_contains: String

  """All values not containing the given string."""
  encoding_not_contains: String

  """All values starting with the given string."""
  encoding_starts_with: String

  """All values not starting with the given string."""
  encoding_not_starts_with: String

  """All values ending with the given string."""
  encoding_ends_with: String

  """All values not ending with the given string."""
  encoding_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
}

input PhotoGalleryWhereUniqueInput {
  id: ID
}

type Product implements Node {
  id: ID!
  name: String!
  description: String!
  tag: ProductTag!
  stock: Int!
  photo(where: ProductPhotoWhereInput): ProductPhoto
  item(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
  price: Int!
}

"""A connection to a list of items."""
type ProductConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  name: String!
  description: String!
  tag: ProductTag!
  stock: Int!
  price: Int!
  photo: ProductPhotoCreateOneWithoutProductInput
  item: ItemCreateManyWithoutProductInput
}

input ProductCreateOneWithoutItemInput {
  create: ProductCreateWithoutItemInput
  connect: ProductWhereUniqueInput
}

input ProductCreateOneWithoutPhotoInput {
  create: ProductCreateWithoutPhotoInput
  connect: ProductWhereUniqueInput
}

input ProductCreateWithoutItemInput {
  name: String!
  description: String!
  tag: ProductTag!
  stock: Int!
  price: Int!
  photo: ProductPhotoCreateOneWithoutProductInput
}

input ProductCreateWithoutPhotoInput {
  name: String!
  description: String!
  tag: ProductTag!
  stock: Int!
  price: Int!
  item: ItemCreateManyWithoutProductInput
}

"""An edge in a connection."""
type ProductEdge {
  """The item at the end of the edge."""
  node: Product!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  tag_ASC
  tag_DESC
  stock_ASC
  stock_DESC
  price_ASC
  price_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ProductPhoto implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  key: String!
  filename: String
  mimetype: String!
  encoding: String!
  url: String!
  Product(where: ProductWhereInput): Product
}

"""A connection to a list of items."""
type ProductPhotoConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ProductPhotoEdge]!
  aggregate: AggregateProductPhoto!
}

input ProductPhotoCreateInput {
  key: String!
  filename: String
  mimetype: String!
  encoding: String!
  url: String!
  Product: ProductCreateOneWithoutPhotoInput
}

input ProductPhotoCreateOneWithoutProductInput {
  create: ProductPhotoCreateWithoutProductInput
  connect: ProductPhotoWhereUniqueInput
}

input ProductPhotoCreateWithoutProductInput {
  key: String!
  filename: String
  mimetype: String!
  encoding: String!
  url: String!
}

"""An edge in a connection."""
type ProductPhotoEdge {
  """The item at the end of the edge."""
  node: ProductPhoto!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ProductPhotoOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  key_ASC
  key_DESC
  filename_ASC
  filename_DESC
  mimetype_ASC
  mimetype_DESC
  encoding_ASC
  encoding_DESC
  url_ASC
  url_DESC
}

type ProductPhotoPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  key: String!
  filename: String
  mimetype: String!
  encoding: String!
  url: String!
}

type ProductPhotoSubscriptionPayload {
  mutation: MutationType!
  node: ProductPhoto
  updatedFields: [String!]
  previousValues: ProductPhotoPreviousValues
}

input ProductPhotoSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductPhotoSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductPhotoSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductPhotoSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProductPhotoWhereInput
}

input ProductPhotoUpdateInput {
  key: String
  filename: String
  mimetype: String
  encoding: String
  url: String
  Product: ProductUpdateOneWithoutPhotoInput
}

input ProductPhotoUpdateOneWithoutProductInput {
  create: ProductPhotoCreateWithoutProductInput
  connect: ProductPhotoWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ProductPhotoUpdateWithoutProductDataInput
  upsert: ProductPhotoUpsertWithoutProductInput
}

input ProductPhotoUpdateWithoutProductDataInput {
  key: String
  filename: String
  mimetype: String
  encoding: String
  url: String
}

input ProductPhotoUpsertWithoutProductInput {
  update: ProductPhotoUpdateWithoutProductDataInput!
  create: ProductPhotoCreateWithoutProductInput!
}

input ProductPhotoWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductPhotoWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductPhotoWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductPhotoWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  key: String

  """All values that are not equal to given value."""
  key_not: String

  """All values that are contained in given list."""
  key_in: [String!]

  """All values that are not contained in given list."""
  key_not_in: [String!]

  """All values less than the given value."""
  key_lt: String

  """All values less than or equal the given value."""
  key_lte: String

  """All values greater than the given value."""
  key_gt: String

  """All values greater than or equal the given value."""
  key_gte: String

  """All values containing the given string."""
  key_contains: String

  """All values not containing the given string."""
  key_not_contains: String

  """All values starting with the given string."""
  key_starts_with: String

  """All values not starting with the given string."""
  key_not_starts_with: String

  """All values ending with the given string."""
  key_ends_with: String

  """All values not ending with the given string."""
  key_not_ends_with: String
  filename: String

  """All values that are not equal to given value."""
  filename_not: String

  """All values that are contained in given list."""
  filename_in: [String!]

  """All values that are not contained in given list."""
  filename_not_in: [String!]

  """All values less than the given value."""
  filename_lt: String

  """All values less than or equal the given value."""
  filename_lte: String

  """All values greater than the given value."""
  filename_gt: String

  """All values greater than or equal the given value."""
  filename_gte: String

  """All values containing the given string."""
  filename_contains: String

  """All values not containing the given string."""
  filename_not_contains: String

  """All values starting with the given string."""
  filename_starts_with: String

  """All values not starting with the given string."""
  filename_not_starts_with: String

  """All values ending with the given string."""
  filename_ends_with: String

  """All values not ending with the given string."""
  filename_not_ends_with: String
  mimetype: String

  """All values that are not equal to given value."""
  mimetype_not: String

  """All values that are contained in given list."""
  mimetype_in: [String!]

  """All values that are not contained in given list."""
  mimetype_not_in: [String!]

  """All values less than the given value."""
  mimetype_lt: String

  """All values less than or equal the given value."""
  mimetype_lte: String

  """All values greater than the given value."""
  mimetype_gt: String

  """All values greater than or equal the given value."""
  mimetype_gte: String

  """All values containing the given string."""
  mimetype_contains: String

  """All values not containing the given string."""
  mimetype_not_contains: String

  """All values starting with the given string."""
  mimetype_starts_with: String

  """All values not starting with the given string."""
  mimetype_not_starts_with: String

  """All values ending with the given string."""
  mimetype_ends_with: String

  """All values not ending with the given string."""
  mimetype_not_ends_with: String
  encoding: String

  """All values that are not equal to given value."""
  encoding_not: String

  """All values that are contained in given list."""
  encoding_in: [String!]

  """All values that are not contained in given list."""
  encoding_not_in: [String!]

  """All values less than the given value."""
  encoding_lt: String

  """All values less than or equal the given value."""
  encoding_lte: String

  """All values greater than the given value."""
  encoding_gt: String

  """All values greater than or equal the given value."""
  encoding_gte: String

  """All values containing the given string."""
  encoding_contains: String

  """All values not containing the given string."""
  encoding_not_contains: String

  """All values starting with the given string."""
  encoding_starts_with: String

  """All values not starting with the given string."""
  encoding_not_starts_with: String

  """All values ending with the given string."""
  encoding_ends_with: String

  """All values not ending with the given string."""
  encoding_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  Product: ProductWhereInput
}

input ProductPhotoWhereUniqueInput {
  id: ID
  url: String
}

type ProductPreviousValues {
  id: ID!
  name: String!
  description: String!
  tag: ProductTag!
  stock: Int!
  price: Int!
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
}

enum ProductTag {
  BARANG
  PAKETWEDDING
}

input ProductUpdateInput {
  name: String
  description: String
  tag: ProductTag
  stock: Int
  price: Int
  photo: ProductPhotoUpdateOneWithoutProductInput
  item: ItemUpdateManyWithoutProductInput
}

input ProductUpdateOneWithoutItemInput {
  create: ProductCreateWithoutItemInput
  connect: ProductWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ProductUpdateWithoutItemDataInput
  upsert: ProductUpsertWithoutItemInput
}

input ProductUpdateOneWithoutPhotoInput {
  create: ProductCreateWithoutPhotoInput
  connect: ProductWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ProductUpdateWithoutPhotoDataInput
  upsert: ProductUpsertWithoutPhotoInput
}

input ProductUpdateWithoutItemDataInput {
  name: String
  description: String
  tag: ProductTag
  stock: Int
  price: Int
  photo: ProductPhotoUpdateOneWithoutProductInput
}

input ProductUpdateWithoutPhotoDataInput {
  name: String
  description: String
  tag: ProductTag
  stock: Int
  price: Int
  item: ItemUpdateManyWithoutProductInput
}

input ProductUpsertWithoutItemInput {
  update: ProductUpdateWithoutItemDataInput!
  create: ProductCreateWithoutItemInput!
}

input ProductUpsertWithoutPhotoInput {
  update: ProductUpdateWithoutPhotoDataInput!
  create: ProductCreateWithoutPhotoInput!
}

input ProductWhereInput {
  """Logical AND on all given filters."""
  AND: [ProductWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProductWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProductWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  tag: ProductTag

  """All values that are not equal to given value."""
  tag_not: ProductTag

  """All values that are contained in given list."""
  tag_in: [ProductTag!]

  """All values that are not contained in given list."""
  tag_not_in: [ProductTag!]
  stock: Int

  """All values that are not equal to given value."""
  stock_not: Int

  """All values that are contained in given list."""
  stock_in: [Int!]

  """All values that are not contained in given list."""
  stock_not_in: [Int!]

  """All values less than the given value."""
  stock_lt: Int

  """All values less than or equal the given value."""
  stock_lte: Int

  """All values greater than the given value."""
  stock_gt: Int

  """All values greater than or equal the given value."""
  stock_gte: Int
  price: Int

  """All values that are not equal to given value."""
  price_not: Int

  """All values that are contained in given list."""
  price_in: [Int!]

  """All values that are not contained in given list."""
  price_not_in: [Int!]

  """All values less than the given value."""
  price_lt: Int

  """All values less than or equal the given value."""
  price_lte: Int

  """All values greater than the given value."""
  price_gt: Int

  """All values greater than or equal the given value."""
  price_gte: Int
  photo: ProductPhotoWhereInput
  item_every: ItemWhereInput
  item_some: ItemWhereInput
  item_none: ItemWhereInput
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  bookings(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking]!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  userPhotos(where: UserPhotoWhereInput, orderBy: UserPhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserPhoto]!
  productPhotos(where: ProductPhotoWhereInput, orderBy: ProductPhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProductPhoto]!
  photoGalleries(where: PhotoGalleryWhereInput, orderBy: PhotoGalleryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PhotoGallery]!
  user(where: UserWhereUniqueInput!): User
  booking(where: BookingWhereUniqueInput!): Booking
  item(where: ItemWhereUniqueInput!): Item
  product(where: ProductWhereUniqueInput!): Product
  userPhoto(where: UserPhotoWhereUniqueInput!): UserPhoto
  productPhoto(where: ProductPhotoWhereUniqueInput!): ProductPhoto
  photoGallery(where: PhotoGalleryWhereUniqueInput!): PhotoGallery
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  bookingsConnection(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookingConnection!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  userPhotosConnection(where: UserPhotoWhereInput, orderBy: UserPhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserPhotoConnection!
  productPhotosConnection(where: ProductPhotoWhereInput, orderBy: ProductPhotoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductPhotoConnection!
  photoGalleriesConnection(where: PhotoGalleryWhereInput, orderBy: PhotoGalleryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PhotoGalleryConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

enum Role {
  CUSTOMER
  ADMIN
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  booking(where: BookingSubscriptionWhereInput): BookingSubscriptionPayload
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  userPhoto(where: UserPhotoSubscriptionWhereInput): UserPhotoSubscriptionPayload
  productPhoto(where: ProductPhotoSubscriptionWhereInput): ProductPhotoSubscriptionPayload
  photoGallery(where: PhotoGallerySubscriptionWhereInput): PhotoGallerySubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  email: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  photo(where: UserPhotoWhereInput): UserPhoto
  role: Role!
  bookings(where: BookingWhereInput, orderBy: BookingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Booking!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  role: Role
  photo: UserPhotoCreateOneWithoutUserPhotoInput
  bookings: BookingCreateManyWithoutUserBookingInput
}

input UserCreateOneWithoutBookingsInput {
  create: UserCreateWithoutBookingsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPhotoInput {
  create: UserCreateWithoutPhotoInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutBookingsInput {
  name: String!
  email: String!
  password: String!
  role: Role
  photo: UserPhotoCreateOneWithoutUserPhotoInput
}

input UserCreateWithoutPhotoInput {
  name: String!
  email: String!
  password: String!
  role: Role
  bookings: BookingCreateManyWithoutUserBookingInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  role_ASC
  role_DESC
}

type UserPhoto implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  key: String!
  filename: String
  mimetype: String!
  encoding: String!
  url: String!
  userPhoto(where: UserWhereInput): User
}

"""A connection to a list of items."""
type UserPhotoConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserPhotoEdge]!
  aggregate: AggregateUserPhoto!
}

input UserPhotoCreateInput {
  key: String!
  filename: String
  mimetype: String!
  encoding: String!
  url: String!
  userPhoto: UserCreateOneWithoutPhotoInput
}

input UserPhotoCreateOneWithoutUserPhotoInput {
  create: UserPhotoCreateWithoutUserPhotoInput
  connect: UserPhotoWhereUniqueInput
}

input UserPhotoCreateWithoutUserPhotoInput {
  key: String!
  filename: String
  mimetype: String!
  encoding: String!
  url: String!
}

"""An edge in a connection."""
type UserPhotoEdge {
  """The item at the end of the edge."""
  node: UserPhoto!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserPhotoOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  key_ASC
  key_DESC
  filename_ASC
  filename_DESC
  mimetype_ASC
  mimetype_DESC
  encoding_ASC
  encoding_DESC
  url_ASC
  url_DESC
}

type UserPhotoPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  key: String!
  filename: String
  mimetype: String!
  encoding: String!
  url: String!
}

type UserPhotoSubscriptionPayload {
  mutation: MutationType!
  node: UserPhoto
  updatedFields: [String!]
  previousValues: UserPhotoPreviousValues
}

input UserPhotoSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserPhotoSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserPhotoSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserPhotoSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserPhotoWhereInput
}

input UserPhotoUpdateInput {
  key: String
  filename: String
  mimetype: String
  encoding: String
  url: String
  userPhoto: UserUpdateOneWithoutPhotoInput
}

input UserPhotoUpdateOneWithoutUserPhotoInput {
  create: UserPhotoCreateWithoutUserPhotoInput
  connect: UserPhotoWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserPhotoUpdateWithoutUserPhotoDataInput
  upsert: UserPhotoUpsertWithoutUserPhotoInput
}

input UserPhotoUpdateWithoutUserPhotoDataInput {
  key: String
  filename: String
  mimetype: String
  encoding: String
  url: String
}

input UserPhotoUpsertWithoutUserPhotoInput {
  update: UserPhotoUpdateWithoutUserPhotoDataInput!
  create: UserPhotoCreateWithoutUserPhotoInput!
}

input UserPhotoWhereInput {
  """Logical AND on all given filters."""
  AND: [UserPhotoWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserPhotoWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserPhotoWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  key: String

  """All values that are not equal to given value."""
  key_not: String

  """All values that are contained in given list."""
  key_in: [String!]

  """All values that are not contained in given list."""
  key_not_in: [String!]

  """All values less than the given value."""
  key_lt: String

  """All values less than or equal the given value."""
  key_lte: String

  """All values greater than the given value."""
  key_gt: String

  """All values greater than or equal the given value."""
  key_gte: String

  """All values containing the given string."""
  key_contains: String

  """All values not containing the given string."""
  key_not_contains: String

  """All values starting with the given string."""
  key_starts_with: String

  """All values not starting with the given string."""
  key_not_starts_with: String

  """All values ending with the given string."""
  key_ends_with: String

  """All values not ending with the given string."""
  key_not_ends_with: String
  filename: String

  """All values that are not equal to given value."""
  filename_not: String

  """All values that are contained in given list."""
  filename_in: [String!]

  """All values that are not contained in given list."""
  filename_not_in: [String!]

  """All values less than the given value."""
  filename_lt: String

  """All values less than or equal the given value."""
  filename_lte: String

  """All values greater than the given value."""
  filename_gt: String

  """All values greater than or equal the given value."""
  filename_gte: String

  """All values containing the given string."""
  filename_contains: String

  """All values not containing the given string."""
  filename_not_contains: String

  """All values starting with the given string."""
  filename_starts_with: String

  """All values not starting with the given string."""
  filename_not_starts_with: String

  """All values ending with the given string."""
  filename_ends_with: String

  """All values not ending with the given string."""
  filename_not_ends_with: String
  mimetype: String

  """All values that are not equal to given value."""
  mimetype_not: String

  """All values that are contained in given list."""
  mimetype_in: [String!]

  """All values that are not contained in given list."""
  mimetype_not_in: [String!]

  """All values less than the given value."""
  mimetype_lt: String

  """All values less than or equal the given value."""
  mimetype_lte: String

  """All values greater than the given value."""
  mimetype_gt: String

  """All values greater than or equal the given value."""
  mimetype_gte: String

  """All values containing the given string."""
  mimetype_contains: String

  """All values not containing the given string."""
  mimetype_not_contains: String

  """All values starting with the given string."""
  mimetype_starts_with: String

  """All values not starting with the given string."""
  mimetype_not_starts_with: String

  """All values ending with the given string."""
  mimetype_ends_with: String

  """All values not ending with the given string."""
  mimetype_not_ends_with: String
  encoding: String

  """All values that are not equal to given value."""
  encoding_not: String

  """All values that are contained in given list."""
  encoding_in: [String!]

  """All values that are not contained in given list."""
  encoding_not_in: [String!]

  """All values less than the given value."""
  encoding_lt: String

  """All values less than or equal the given value."""
  encoding_lte: String

  """All values greater than the given value."""
  encoding_gt: String

  """All values greater than or equal the given value."""
  encoding_gte: String

  """All values containing the given string."""
  encoding_contains: String

  """All values not containing the given string."""
  encoding_not_contains: String

  """All values starting with the given string."""
  encoding_starts_with: String

  """All values not starting with the given string."""
  encoding_not_starts_with: String

  """All values ending with the given string."""
  encoding_ends_with: String

  """All values not ending with the given string."""
  encoding_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  userPhoto: UserWhereInput
}

input UserPhotoWhereUniqueInput {
  id: ID
  url: String
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  role: Role!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  role: Role
  photo: UserPhotoUpdateOneWithoutUserPhotoInput
  bookings: BookingUpdateManyWithoutUserBookingInput
}

input UserUpdateOneWithoutBookingsInput {
  create: UserCreateWithoutBookingsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutBookingsDataInput
  upsert: UserUpsertWithoutBookingsInput
}

input UserUpdateOneWithoutPhotoInput {
  create: UserCreateWithoutPhotoInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutPhotoDataInput
  upsert: UserUpsertWithoutPhotoInput
}

input UserUpdateWithoutBookingsDataInput {
  name: String
  email: String
  password: String
  role: Role
  photo: UserPhotoUpdateOneWithoutUserPhotoInput
}

input UserUpdateWithoutPhotoDataInput {
  name: String
  email: String
  password: String
  role: Role
  bookings: BookingUpdateManyWithoutUserBookingInput
}

input UserUpsertWithoutBookingsInput {
  update: UserUpdateWithoutBookingsDataInput!
  create: UserCreateWithoutBookingsInput!
}

input UserUpsertWithoutPhotoInput {
  update: UserUpdateWithoutPhotoDataInput!
  create: UserCreateWithoutPhotoInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  role: Role

  """All values that are not equal to given value."""
  role_not: Role

  """All values that are contained in given list."""
  role_in: [Role!]

  """All values that are not contained in given list."""
  role_not_in: [Role!]
  photo: UserPhotoWhereInput
  bookings_every: BookingWhereInput
  bookings_some: BookingWhereInput
  bookings_none: BookingWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type BookingStatus =   'CREATED' |
  'SEND' |
  'PROCCESS' |
  'SUCCESS'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'role_ASC' |
  'role_DESC'

export type ProductTag =   'BARANG' |
  'PAKETWEDDING'

export type BookingOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'startDate_ASC' |
  'startDate_DESC' |
  'endDate_ASC' |
  'endDate_DESC' |
  'noWhatsApp_ASC' |
  'noWhatsApp_DESC' |
  'address_ASC' |
  'address_DESC' |
  'message_ASC' |
  'message_DESC' |
  'status_ASC' |
  'status_DESC'

export type ItemOrderByInput =   'id_ASC' |
  'id_DESC' |
  'amount_ASC' |
  'amount_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ProductOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'tag_ASC' |
  'tag_DESC' |
  'stock_ASC' |
  'stock_DESC' |
  'price_ASC' |
  'price_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type UserPhotoOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'key_ASC' |
  'key_DESC' |
  'filename_ASC' |
  'filename_DESC' |
  'mimetype_ASC' |
  'mimetype_DESC' |
  'encoding_ASC' |
  'encoding_DESC' |
  'url_ASC' |
  'url_DESC'

export type ProductPhotoOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'key_ASC' |
  'key_DESC' |
  'filename_ASC' |
  'filename_DESC' |
  'mimetype_ASC' |
  'mimetype_DESC' |
  'encoding_ASC' |
  'encoding_DESC' |
  'url_ASC' |
  'url_DESC'

export type Role =   'CUSTOMER' |
  'ADMIN'

export type PhotoGalleryOrderByInput =   'id_ASC' |
  'id_DESC' |
  'key_ASC' |
  'key_DESC' |
  'filename_ASC' |
  'filename_DESC' |
  'mimetype_ASC' |
  'mimetype_DESC' |
  'encoding_ASC' |
  'encoding_DESC' |
  'url_ASC' |
  'url_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface BookingCreateWithoutItemsInput {
  startDate: DateTime
  endDate: DateTime
  noWhatsApp?: String
  address?: String
  message?: String
  status?: BookingStatus
  userBooking: UserCreateOneWithoutBookingsInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  role?: Role
  role_not?: Role
  role_in?: Role[] | Role
  role_not_in?: Role[] | Role
  photo?: UserPhotoWhereInput
  bookings_every?: BookingWhereInput
  bookings_some?: BookingWhereInput
  bookings_none?: BookingWhereInput
}

export interface UserCreateWithoutPhotoInput {
  name: String
  email: String
  password: String
  role?: Role
  bookings?: BookingCreateManyWithoutUserBookingInput
}

export interface ProductPhotoWhereInput {
  AND?: ProductPhotoWhereInput[] | ProductPhotoWhereInput
  OR?: ProductPhotoWhereInput[] | ProductPhotoWhereInput
  NOT?: ProductPhotoWhereInput[] | ProductPhotoWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  key?: String
  key_not?: String
  key_in?: String[] | String
  key_not_in?: String[] | String
  key_lt?: String
  key_lte?: String
  key_gt?: String
  key_gte?: String
  key_contains?: String
  key_not_contains?: String
  key_starts_with?: String
  key_not_starts_with?: String
  key_ends_with?: String
  key_not_ends_with?: String
  filename?: String
  filename_not?: String
  filename_in?: String[] | String
  filename_not_in?: String[] | String
  filename_lt?: String
  filename_lte?: String
  filename_gt?: String
  filename_gte?: String
  filename_contains?: String
  filename_not_contains?: String
  filename_starts_with?: String
  filename_not_starts_with?: String
  filename_ends_with?: String
  filename_not_ends_with?: String
  mimetype?: String
  mimetype_not?: String
  mimetype_in?: String[] | String
  mimetype_not_in?: String[] | String
  mimetype_lt?: String
  mimetype_lte?: String
  mimetype_gt?: String
  mimetype_gte?: String
  mimetype_contains?: String
  mimetype_not_contains?: String
  mimetype_starts_with?: String
  mimetype_not_starts_with?: String
  mimetype_ends_with?: String
  mimetype_not_ends_with?: String
  encoding?: String
  encoding_not?: String
  encoding_in?: String[] | String
  encoding_not_in?: String[] | String
  encoding_lt?: String
  encoding_lte?: String
  encoding_gt?: String
  encoding_gte?: String
  encoding_contains?: String
  encoding_not_contains?: String
  encoding_starts_with?: String
  encoding_not_starts_with?: String
  encoding_ends_with?: String
  encoding_not_ends_with?: String
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
  Product?: ProductWhereInput
}

export interface BookingUpsertWithWhereUniqueWithoutUserBookingInput {
  where: BookingWhereUniqueInput
  update: BookingUpdateWithoutUserBookingDataInput
  create: BookingCreateWithoutUserBookingInput
}

export interface ProductPhotoUpdateWithoutProductDataInput {
  key?: String
  filename?: String
  mimetype?: String
  encoding?: String
  url?: String
}

export interface UserCreateInput {
  name: String
  email: String
  password: String
  role?: Role
  photo?: UserPhotoCreateOneWithoutUserPhotoInput
  bookings?: BookingCreateManyWithoutUserBookingInput
}

export interface ProductPhotoCreateInput {
  key: String
  filename?: String
  mimetype: String
  encoding: String
  url: String
  Product?: ProductCreateOneWithoutPhotoInput
}

export interface UserPhotoCreateOneWithoutUserPhotoInput {
  create?: UserPhotoCreateWithoutUserPhotoInput
  connect?: UserPhotoWhereUniqueInput
}

export interface PhotoGallerySubscriptionWhereInput {
  AND?: PhotoGallerySubscriptionWhereInput[] | PhotoGallerySubscriptionWhereInput
  OR?: PhotoGallerySubscriptionWhereInput[] | PhotoGallerySubscriptionWhereInput
  NOT?: PhotoGallerySubscriptionWhereInput[] | PhotoGallerySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PhotoGalleryWhereInput
}

export interface UserPhotoCreateWithoutUserPhotoInput {
  key: String
  filename?: String
  mimetype: String
  encoding: String
  url: String
}

export interface UserPhotoSubscriptionWhereInput {
  AND?: UserPhotoSubscriptionWhereInput[] | UserPhotoSubscriptionWhereInput
  OR?: UserPhotoSubscriptionWhereInput[] | UserPhotoSubscriptionWhereInput
  NOT?: UserPhotoSubscriptionWhereInput[] | UserPhotoSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserPhotoWhereInput
}

export interface BookingCreateManyWithoutUserBookingInput {
  create?: BookingCreateWithoutUserBookingInput[] | BookingCreateWithoutUserBookingInput
  connect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
}

export interface ItemSubscriptionWhereInput {
  AND?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput
  OR?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput
  NOT?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ItemWhereInput
}

export interface BookingCreateWithoutUserBookingInput {
  startDate: DateTime
  endDate: DateTime
  noWhatsApp?: String
  address?: String
  message?: String
  status?: BookingStatus
  items?: ItemCreateManyWithoutBookingInput
}

export interface BookingWhereInput {
  AND?: BookingWhereInput[] | BookingWhereInput
  OR?: BookingWhereInput[] | BookingWhereInput
  NOT?: BookingWhereInput[] | BookingWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  startDate?: DateTime
  startDate_not?: DateTime
  startDate_in?: DateTime[] | DateTime
  startDate_not_in?: DateTime[] | DateTime
  startDate_lt?: DateTime
  startDate_lte?: DateTime
  startDate_gt?: DateTime
  startDate_gte?: DateTime
  endDate?: DateTime
  endDate_not?: DateTime
  endDate_in?: DateTime[] | DateTime
  endDate_not_in?: DateTime[] | DateTime
  endDate_lt?: DateTime
  endDate_lte?: DateTime
  endDate_gt?: DateTime
  endDate_gte?: DateTime
  noWhatsApp?: String
  noWhatsApp_not?: String
  noWhatsApp_in?: String[] | String
  noWhatsApp_not_in?: String[] | String
  noWhatsApp_lt?: String
  noWhatsApp_lte?: String
  noWhatsApp_gt?: String
  noWhatsApp_gte?: String
  noWhatsApp_contains?: String
  noWhatsApp_not_contains?: String
  noWhatsApp_starts_with?: String
  noWhatsApp_not_starts_with?: String
  noWhatsApp_ends_with?: String
  noWhatsApp_not_ends_with?: String
  address?: String
  address_not?: String
  address_in?: String[] | String
  address_not_in?: String[] | String
  address_lt?: String
  address_lte?: String
  address_gt?: String
  address_gte?: String
  address_contains?: String
  address_not_contains?: String
  address_starts_with?: String
  address_not_starts_with?: String
  address_ends_with?: String
  address_not_ends_with?: String
  message?: String
  message_not?: String
  message_in?: String[] | String
  message_not_in?: String[] | String
  message_lt?: String
  message_lte?: String
  message_gt?: String
  message_gte?: String
  message_contains?: String
  message_not_contains?: String
  message_starts_with?: String
  message_not_starts_with?: String
  message_ends_with?: String
  message_not_ends_with?: String
  status?: BookingStatus
  status_not?: BookingStatus
  status_in?: BookingStatus[] | BookingStatus
  status_not_in?: BookingStatus[] | BookingStatus
  items_every?: ItemWhereInput
  items_some?: ItemWhereInput
  items_none?: ItemWhereInput
  userBooking?: UserWhereInput
}

export interface ItemCreateManyWithoutBookingInput {
  create?: ItemCreateWithoutBookingInput[] | ItemCreateWithoutBookingInput
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
}

export interface PhotoGalleryWhereInput {
  AND?: PhotoGalleryWhereInput[] | PhotoGalleryWhereInput
  OR?: PhotoGalleryWhereInput[] | PhotoGalleryWhereInput
  NOT?: PhotoGalleryWhereInput[] | PhotoGalleryWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  key?: String
  key_not?: String
  key_in?: String[] | String
  key_not_in?: String[] | String
  key_lt?: String
  key_lte?: String
  key_gt?: String
  key_gte?: String
  key_contains?: String
  key_not_contains?: String
  key_starts_with?: String
  key_not_starts_with?: String
  key_ends_with?: String
  key_not_ends_with?: String
  filename?: String
  filename_not?: String
  filename_in?: String[] | String
  filename_not_in?: String[] | String
  filename_lt?: String
  filename_lte?: String
  filename_gt?: String
  filename_gte?: String
  filename_contains?: String
  filename_not_contains?: String
  filename_starts_with?: String
  filename_not_starts_with?: String
  filename_ends_with?: String
  filename_not_ends_with?: String
  mimetype?: String
  mimetype_not?: String
  mimetype_in?: String[] | String
  mimetype_not_in?: String[] | String
  mimetype_lt?: String
  mimetype_lte?: String
  mimetype_gt?: String
  mimetype_gte?: String
  mimetype_contains?: String
  mimetype_not_contains?: String
  mimetype_starts_with?: String
  mimetype_not_starts_with?: String
  mimetype_ends_with?: String
  mimetype_not_ends_with?: String
  encoding?: String
  encoding_not?: String
  encoding_in?: String[] | String
  encoding_not_in?: String[] | String
  encoding_lt?: String
  encoding_lte?: String
  encoding_gt?: String
  encoding_gte?: String
  encoding_contains?: String
  encoding_not_contains?: String
  encoding_starts_with?: String
  encoding_not_starts_with?: String
  encoding_ends_with?: String
  encoding_not_ends_with?: String
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
}

export interface ItemCreateWithoutBookingInput {
  amount: Int
  product?: ProductCreateOneWithoutItemInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface ProductCreateOneWithoutItemInput {
  create?: ProductCreateWithoutItemInput
  connect?: ProductWhereUniqueInput
}

export interface BookingWhereUniqueInput {
  id?: ID_Input
}

export interface ProductCreateWithoutItemInput {
  name: String
  description: String
  tag: ProductTag
  stock: Int
  price: Int
  photo?: ProductPhotoCreateOneWithoutProductInput
}

export interface ProductWhereUniqueInput {
  id?: ID_Input
}

export interface ProductPhotoCreateOneWithoutProductInput {
  create?: ProductPhotoCreateWithoutProductInput
  connect?: ProductPhotoWhereUniqueInput
}

export interface ProductPhotoWhereUniqueInput {
  id?: ID_Input
  url?: String
}

export interface ProductPhotoCreateWithoutProductInput {
  key: String
  filename?: String
  mimetype: String
  encoding: String
  url: String
}

export interface PhotoGalleryUpdateInput {
  key?: String
  filename?: String
  mimetype?: String
  encoding?: String
  url?: String
}

export interface BookingCreateInput {
  startDate: DateTime
  endDate: DateTime
  noWhatsApp?: String
  address?: String
  message?: String
  status?: BookingStatus
  items?: ItemCreateManyWithoutBookingInput
  userBooking: UserCreateOneWithoutBookingsInput
}

export interface ProductUpdateWithoutPhotoDataInput {
  name?: String
  description?: String
  tag?: ProductTag
  stock?: Int
  price?: Int
  item?: ItemUpdateManyWithoutProductInput
}

export interface UserCreateOneWithoutBookingsInput {
  create?: UserCreateWithoutBookingsInput
  connect?: UserWhereUniqueInput
}

export interface ProductPhotoUpdateInput {
  key?: String
  filename?: String
  mimetype?: String
  encoding?: String
  url?: String
  Product?: ProductUpdateOneWithoutPhotoInput
}

export interface UserCreateWithoutBookingsInput {
  name: String
  email: String
  password: String
  role?: Role
  photo?: UserPhotoCreateOneWithoutUserPhotoInput
}

export interface UserUpdateWithoutPhotoDataInput {
  name?: String
  email?: String
  password?: String
  role?: Role
  bookings?: BookingUpdateManyWithoutUserBookingInput
}

export interface ItemCreateInput {
  amount: Int
  product?: ProductCreateOneWithoutItemInput
  booking?: BookingCreateOneWithoutItemsInput
}

export interface UserPhotoUpdateInput {
  key?: String
  filename?: String
  mimetype?: String
  encoding?: String
  url?: String
  userPhoto?: UserUpdateOneWithoutPhotoInput
}

export interface BookingCreateOneWithoutItemsInput {
  create?: BookingCreateWithoutItemsInput
  connect?: BookingWhereUniqueInput
}

export interface ItemUpdateWithoutProductDataInput {
  amount?: Int
  booking?: BookingUpdateOneWithoutItemsInput
}

export interface ItemUpsertWithWhereUniqueWithoutBookingInput {
  where: ItemWhereUniqueInput
  update: ItemUpdateWithoutBookingDataInput
  create: ItemCreateWithoutBookingInput
}

export interface ItemUpdateManyWithoutProductInput {
  create?: ItemCreateWithoutProductInput[] | ItemCreateWithoutProductInput
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  disconnect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  delete?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  update?: ItemUpdateWithWhereUniqueWithoutProductInput[] | ItemUpdateWithWhereUniqueWithoutProductInput
  upsert?: ItemUpsertWithWhereUniqueWithoutProductInput[] | ItemUpsertWithWhereUniqueWithoutProductInput
}

export interface ProductCreateInput {
  name: String
  description: String
  tag: ProductTag
  stock: Int
  price: Int
  photo?: ProductPhotoCreateOneWithoutProductInput
  item?: ItemCreateManyWithoutProductInput
}

export interface BookingUpsertWithoutItemsInput {
  update: BookingUpdateWithoutItemsDataInput
  create: BookingCreateWithoutItemsInput
}

export interface ItemCreateManyWithoutProductInput {
  create?: ItemCreateWithoutProductInput[] | ItemCreateWithoutProductInput
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
}

export interface BookingUpdateOneWithoutItemsInput {
  create?: BookingCreateWithoutItemsInput
  connect?: BookingWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: BookingUpdateWithoutItemsDataInput
  upsert?: BookingUpsertWithoutItemsInput
}

export interface ItemCreateWithoutProductInput {
  amount: Int
  booking?: BookingCreateOneWithoutItemsInput
}

export interface UserUpsertWithoutBookingsInput {
  update: UserUpdateWithoutBookingsDataInput
  create: UserCreateWithoutBookingsInput
}

export interface UserPhotoCreateInput {
  key: String
  filename?: String
  mimetype: String
  encoding: String
  url: String
  userPhoto?: UserCreateOneWithoutPhotoInput
}

export interface UserUpdateOneWithoutBookingsInput {
  create?: UserCreateWithoutBookingsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutBookingsDataInput
  upsert?: UserUpsertWithoutBookingsInput
}

export interface UserCreateOneWithoutPhotoInput {
  create?: UserCreateWithoutPhotoInput
  connect?: UserWhereUniqueInput
}

export interface ProductWhereInput {
  AND?: ProductWhereInput[] | ProductWhereInput
  OR?: ProductWhereInput[] | ProductWhereInput
  NOT?: ProductWhereInput[] | ProductWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  tag?: ProductTag
  tag_not?: ProductTag
  tag_in?: ProductTag[] | ProductTag
  tag_not_in?: ProductTag[] | ProductTag
  stock?: Int
  stock_not?: Int
  stock_in?: Int[] | Int
  stock_not_in?: Int[] | Int
  stock_lt?: Int
  stock_lte?: Int
  stock_gt?: Int
  stock_gte?: Int
  price?: Int
  price_not?: Int
  price_in?: Int[] | Int
  price_not_in?: Int[] | Int
  price_lt?: Int
  price_lte?: Int
  price_gt?: Int
  price_gte?: Int
  photo?: ProductPhotoWhereInput
  item_every?: ItemWhereInput
  item_some?: ItemWhereInput
  item_none?: ItemWhereInput
}

export interface ProductUpsertWithoutItemInput {
  update: ProductUpdateWithoutItemDataInput
  create: ProductCreateWithoutItemInput
}

export interface ProductSubscriptionWhereInput {
  AND?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  OR?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  NOT?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ProductWhereInput
}

export interface ProductPhotoUpsertWithoutProductInput {
  update: ProductPhotoUpdateWithoutProductDataInput
  create: ProductPhotoCreateWithoutProductInput
}

export interface UserPhotoWhereInput {
  AND?: UserPhotoWhereInput[] | UserPhotoWhereInput
  OR?: UserPhotoWhereInput[] | UserPhotoWhereInput
  NOT?: UserPhotoWhereInput[] | UserPhotoWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  key?: String
  key_not?: String
  key_in?: String[] | String
  key_not_in?: String[] | String
  key_lt?: String
  key_lte?: String
  key_gt?: String
  key_gte?: String
  key_contains?: String
  key_not_contains?: String
  key_starts_with?: String
  key_not_starts_with?: String
  key_ends_with?: String
  key_not_ends_with?: String
  filename?: String
  filename_not?: String
  filename_in?: String[] | String
  filename_not_in?: String[] | String
  filename_lt?: String
  filename_lte?: String
  filename_gt?: String
  filename_gte?: String
  filename_contains?: String
  filename_not_contains?: String
  filename_starts_with?: String
  filename_not_starts_with?: String
  filename_ends_with?: String
  filename_not_ends_with?: String
  mimetype?: String
  mimetype_not?: String
  mimetype_in?: String[] | String
  mimetype_not_in?: String[] | String
  mimetype_lt?: String
  mimetype_lte?: String
  mimetype_gt?: String
  mimetype_gte?: String
  mimetype_contains?: String
  mimetype_not_contains?: String
  mimetype_starts_with?: String
  mimetype_not_starts_with?: String
  mimetype_ends_with?: String
  mimetype_not_ends_with?: String
  encoding?: String
  encoding_not?: String
  encoding_in?: String[] | String
  encoding_not_in?: String[] | String
  encoding_lt?: String
  encoding_lte?: String
  encoding_gt?: String
  encoding_gte?: String
  encoding_contains?: String
  encoding_not_contains?: String
  encoding_starts_with?: String
  encoding_not_starts_with?: String
  encoding_ends_with?: String
  encoding_not_ends_with?: String
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
  userPhoto?: UserWhereInput
}

export interface ProductCreateOneWithoutPhotoInput {
  create?: ProductCreateWithoutPhotoInput
  connect?: ProductWhereUniqueInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface ProductCreateWithoutPhotoInput {
  name: String
  description: String
  tag: ProductTag
  stock: Int
  price: Int
  item?: ItemCreateManyWithoutProductInput
}

export interface UserPhotoWhereUniqueInput {
  id?: ID_Input
  url?: String
}

export interface PhotoGalleryCreateInput {
  key: String
  filename: String
  mimetype: String
  encoding: String
  url: String
}

export interface ProductUpsertWithoutPhotoInput {
  update: ProductUpdateWithoutPhotoDataInput
  create: ProductCreateWithoutPhotoInput
}

export interface UserUpdateInput {
  name?: String
  email?: String
  password?: String
  role?: Role
  photo?: UserPhotoUpdateOneWithoutUserPhotoInput
  bookings?: BookingUpdateManyWithoutUserBookingInput
}

export interface UserUpsertWithoutPhotoInput {
  update: UserUpdateWithoutPhotoDataInput
  create: UserCreateWithoutPhotoInput
}

export interface UserPhotoUpdateOneWithoutUserPhotoInput {
  create?: UserPhotoCreateWithoutUserPhotoInput
  connect?: UserPhotoWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserPhotoUpdateWithoutUserPhotoDataInput
  upsert?: UserPhotoUpsertWithoutUserPhotoInput
}

export interface ItemUpsertWithWhereUniqueWithoutProductInput {
  where: ItemWhereUniqueInput
  update: ItemUpdateWithoutProductDataInput
  create: ItemCreateWithoutProductInput
}

export interface UserPhotoUpdateWithoutUserPhotoDataInput {
  key?: String
  filename?: String
  mimetype?: String
  encoding?: String
  url?: String
}

export interface ProductUpdateInput {
  name?: String
  description?: String
  tag?: ProductTag
  stock?: Int
  price?: Int
  photo?: ProductPhotoUpdateOneWithoutProductInput
  item?: ItemUpdateManyWithoutProductInput
}

export interface UserPhotoUpsertWithoutUserPhotoInput {
  update: UserPhotoUpdateWithoutUserPhotoDataInput
  create: UserPhotoCreateWithoutUserPhotoInput
}

export interface ItemUpdateInput {
  amount?: Int
  product?: ProductUpdateOneWithoutItemInput
  booking?: BookingUpdateOneWithoutItemsInput
}

export interface BookingUpdateManyWithoutUserBookingInput {
  create?: BookingCreateWithoutUserBookingInput[] | BookingCreateWithoutUserBookingInput
  connect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
  disconnect?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
  delete?: BookingWhereUniqueInput[] | BookingWhereUniqueInput
  update?: BookingUpdateWithWhereUniqueWithoutUserBookingInput[] | BookingUpdateWithWhereUniqueWithoutUserBookingInput
  upsert?: BookingUpsertWithWhereUniqueWithoutUserBookingInput[] | BookingUpsertWithWhereUniqueWithoutUserBookingInput
}

export interface BookingUpdateInput {
  startDate?: DateTime
  endDate?: DateTime
  noWhatsApp?: String
  address?: String
  message?: String
  status?: BookingStatus
  items?: ItemUpdateManyWithoutBookingInput
  userBooking?: UserUpdateOneWithoutBookingsInput
}

export interface BookingUpdateWithWhereUniqueWithoutUserBookingInput {
  where: BookingWhereUniqueInput
  data: BookingUpdateWithoutUserBookingDataInput
}

export interface ItemWhereInput {
  AND?: ItemWhereInput[] | ItemWhereInput
  OR?: ItemWhereInput[] | ItemWhereInput
  NOT?: ItemWhereInput[] | ItemWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  amount?: Int
  amount_not?: Int
  amount_in?: Int[] | Int
  amount_not_in?: Int[] | Int
  amount_lt?: Int
  amount_lte?: Int
  amount_gt?: Int
  amount_gte?: Int
  product?: ProductWhereInput
  booking?: BookingWhereInput
}

export interface BookingUpdateWithoutUserBookingDataInput {
  startDate?: DateTime
  endDate?: DateTime
  noWhatsApp?: String
  address?: String
  message?: String
  status?: BookingStatus
  items?: ItemUpdateManyWithoutBookingInput
}

export interface ItemWhereUniqueInput {
  id?: ID_Input
}

export interface ItemUpdateManyWithoutBookingInput {
  create?: ItemCreateWithoutBookingInput[] | ItemCreateWithoutBookingInput
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  disconnect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  delete?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  update?: ItemUpdateWithWhereUniqueWithoutBookingInput[] | ItemUpdateWithWhereUniqueWithoutBookingInput
  upsert?: ItemUpsertWithWhereUniqueWithoutBookingInput[] | ItemUpsertWithWhereUniqueWithoutBookingInput
}

export interface ProductUpdateOneWithoutPhotoInput {
  create?: ProductCreateWithoutPhotoInput
  connect?: ProductWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ProductUpdateWithoutPhotoDataInput
  upsert?: ProductUpsertWithoutPhotoInput
}

export interface ItemUpdateWithWhereUniqueWithoutBookingInput {
  where: ItemWhereUniqueInput
  data: ItemUpdateWithoutBookingDataInput
}

export interface ItemUpdateWithWhereUniqueWithoutProductInput {
  where: ItemWhereUniqueInput
  data: ItemUpdateWithoutProductDataInput
}

export interface UserUpdateWithoutBookingsDataInput {
  name?: String
  email?: String
  password?: String
  role?: Role
  photo?: UserPhotoUpdateOneWithoutUserPhotoInput
}

export interface ProductPhotoUpdateOneWithoutProductInput {
  create?: ProductPhotoCreateWithoutProductInput
  connect?: ProductPhotoWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ProductPhotoUpdateWithoutProductDataInput
  upsert?: ProductPhotoUpsertWithoutProductInput
}

export interface ProductUpdateWithoutItemDataInput {
  name?: String
  description?: String
  tag?: ProductTag
  stock?: Int
  price?: Int
  photo?: ProductPhotoUpdateOneWithoutProductInput
}

export interface ProductUpdateOneWithoutItemInput {
  create?: ProductCreateWithoutItemInput
  connect?: ProductWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ProductUpdateWithoutItemDataInput
  upsert?: ProductUpsertWithoutItemInput
}

export interface ItemUpdateWithoutBookingDataInput {
  amount?: Int
  product?: ProductUpdateOneWithoutItemInput
}

export interface ProductPhotoSubscriptionWhereInput {
  AND?: ProductPhotoSubscriptionWhereInput[] | ProductPhotoSubscriptionWhereInput
  OR?: ProductPhotoSubscriptionWhereInput[] | ProductPhotoSubscriptionWhereInput
  NOT?: ProductPhotoSubscriptionWhereInput[] | ProductPhotoSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ProductPhotoWhereInput
}

export interface BookingUpdateWithoutItemsDataInput {
  startDate?: DateTime
  endDate?: DateTime
  noWhatsApp?: String
  address?: String
  message?: String
  status?: BookingStatus
  userBooking?: UserUpdateOneWithoutBookingsInput
}

export interface UserUpdateOneWithoutPhotoInput {
  create?: UserCreateWithoutPhotoInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutPhotoDataInput
  upsert?: UserUpsertWithoutPhotoInput
}

export interface PhotoGalleryWhereUniqueInput {
  id?: ID_Input
}

export interface BookingSubscriptionWhereInput {
  AND?: BookingSubscriptionWhereInput[] | BookingSubscriptionWhereInput
  OR?: BookingSubscriptionWhereInput[] | BookingSubscriptionWhereInput
  NOT?: BookingSubscriptionWhereInput[] | BookingSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BookingWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface PhotoGalleryPreviousValues {
  id: ID_Output
  key: String
  filename: String
  mimetype: String
  encoding: String
  url: String
}

export interface BatchPayload {
  count: Long
}

export interface UserPhoto extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  key: String
  filename?: String
  mimetype: String
  encoding: String
  url: String
  userPhoto?: User
}

export interface User extends Node {
  id: ID_Output
  name: String
  email: String
  password: String
  createdAt: DateTime
  updatedAt: DateTime
  photo?: UserPhoto
  role: Role
  bookings?: Booking[]
}

export interface ProductPhotoSubscriptionPayload {
  mutation: MutationType
  node?: ProductPhoto
  updatedFields?: String[]
  previousValues?: ProductPhotoPreviousValues
}

export interface AggregatePhotoGallery {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface PhotoGalleryEdge {
  node: PhotoGallery
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface PhotoGalleryConnection {
  pageInfo: PageInfo
  edges: PhotoGalleryEdge[]
  aggregate: AggregatePhotoGallery
}

/*
 * An edge in a connection.

 */
export interface ProductPhotoEdge {
  node: ProductPhoto
  cursor: String
}

export interface PhotoGallery extends Node {
  id: ID_Output
  key: String
  filename: String
  mimetype: String
  encoding: String
  url: String
}

export interface AggregateUserPhoto {
  count: Int
}

export interface Booking extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  startDate: DateTime
  endDate: DateTime
  noWhatsApp?: String
  address?: String
  message?: String
  items?: Item[]
  status: BookingStatus
  userBooking: User
}

/*
 * A connection to a list of items.

 */
export interface UserPhotoConnection {
  pageInfo: PageInfo
  edges: UserPhotoEdge[]
  aggregate: AggregateUserPhoto
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface ProductEdge {
  node: Product
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  email: String
  password: String
  createdAt: DateTime
  updatedAt: DateTime
  role: Role
}

export interface AggregateItem {
  count: Int
}

export interface ProductPhotoPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  key: String
  filename?: String
  mimetype: String
  encoding: String
  url: String
}

/*
 * A connection to a list of items.

 */
export interface ItemConnection {
  pageInfo: PageInfo
  edges: ItemEdge[]
  aggregate: AggregateItem
}

export interface BookingSubscriptionPayload {
  mutation: MutationType
  node?: Booking
  updatedFields?: String[]
  previousValues?: BookingPreviousValues
}

/*
 * An edge in a connection.

 */
export interface BookingEdge {
  node: Booking
  cursor: String
}

export interface BookingPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  startDate: DateTime
  endDate: DateTime
  noWhatsApp?: String
  address?: String
  message?: String
  status: BookingStatus
}

export interface AggregateUser {
  count: Int
}

export interface ProductPhoto extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  key: String
  filename?: String
  mimetype: String
  encoding: String
  url: String
  Product?: Product
}

export interface PhotoGallerySubscriptionPayload {
  mutation: MutationType
  node?: PhotoGallery
  updatedFields?: String[]
  previousValues?: PhotoGalleryPreviousValues
}

export interface ItemSubscriptionPayload {
  mutation: MutationType
  node?: Item
  updatedFields?: String[]
  previousValues?: ItemPreviousValues
}

export interface AggregateProductPhoto {
  count: Int
}

export interface ItemPreviousValues {
  id: ID_Output
  amount: Int
}

/*
 * An edge in a connection.

 */
export interface UserPhotoEdge {
  node: UserPhoto
  cursor: String
}

export interface Product extends Node {
  id: ID_Output
  name: String
  description: String
  tag: ProductTag
  stock: Int
  photo?: ProductPhoto
  item?: Item[]
  price: Int
}

/*
 * A connection to a list of items.

 */
export interface ProductConnection {
  pageInfo: PageInfo
  edges: ProductEdge[]
  aggregate: AggregateProduct
}

export interface ProductSubscriptionPayload {
  mutation: MutationType
  node?: Product
  updatedFields?: String[]
  previousValues?: ProductPreviousValues
}

export interface AggregateBooking {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPhotoPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  key: String
  filename?: String
  mimetype: String
  encoding: String
  url: String
}

export interface UserPhotoSubscriptionPayload {
  mutation: MutationType
  node?: UserPhoto
  updatedFields?: String[]
  previousValues?: UserPhotoPreviousValues
}

export interface Item extends Node {
  id: ID_Output
  amount: Int
  product?: Product
  booking?: Booking
}

export interface ProductPreviousValues {
  id: ID_Output
  name: String
  description: String
  tag: ProductTag
  stock: Int
  price: Int
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
 * A connection to a list of items.

 */
export interface BookingConnection {
  pageInfo: PageInfo
  edges: BookingEdge[]
  aggregate: AggregateBooking
}

/*
 * An edge in a connection.

 */
export interface ItemEdge {
  node: Item
  cursor: String
}

export interface AggregateProduct {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface ProductPhotoConnection {
  pageInfo: PageInfo
  edges: ProductPhotoEdge[]
  aggregate: AggregateProductPhoto
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = Date | string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number