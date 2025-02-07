import { type SchemaTypeDefinition } from 'sanity'
import {productSchema} from "../../sanity/schemaTypes/product"
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema],
}
