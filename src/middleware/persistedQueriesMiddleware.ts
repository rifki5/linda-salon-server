import { invert } from 'lodash'
import { RequestHandler } from 'express'
const extractedQueries = invert(require('./extracted_queries.json'))

const persistedQueriesMiddleware: RequestHandler = (req, res, next) => {
  console.log("Handling request to: " + req.url)
  res.set('Cache-Control', 'public, max-age=10')

  const extensions = JSON.parse(req.query.extensions)
  console.log('dd', req.query)
  const querySignature = extensions.persistedQuery.sha256Hash
  const persistedQuery = extractedQueries[querySignature]

  if (!persistedQuery) {
    res.status(400).json({ errors: ['Invalid querySignature'] })
    return next(new Error('Invalid querySignature'))
  }
  
  req.query.query = persistedQuery
  next()
}

export default persistedQueriesMiddleware