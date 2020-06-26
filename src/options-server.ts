import { Options } from 'graphql-yoga'
import costAnalysis from 'graphql-cost-analysis'
import * as depthLimit from 'graphql-depth-limit'

export default {
  getEndpoint: true,
  port: 4000,
  endpoint: '/graphql',
  playground: '/playground',
  cors: {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  },
} as Options