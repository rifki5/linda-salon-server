import { mergeTypes } from 'merge-graphql-schemas';
import { readFileSync } from 'fs';

const ultimateSchemaString = mergeTypes([
  readFileSync('./src/schema/datamodel.graphql').toString(),
  readFileSync('./src/schema/dataops.graphql').toString(),
], {
  all: true
});

export default ultimateSchemaString