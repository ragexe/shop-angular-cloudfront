/* tslint:disable */
import { VariantTypename } from './variant-typename';
import { Attributes } from './attributes';
import { ListPrice } from './list-price';
import { Price } from './price';
export interface Variant {
  __typename: VariantTypename;
  attributes: Attributes;
  id: string;
  listPrice: ListPrice;
  price: Price;
  salePercentage: number;
  sku: string;
}
