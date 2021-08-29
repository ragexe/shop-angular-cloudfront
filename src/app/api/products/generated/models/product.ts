/* tslint:disable */
import { ProductTypename } from './product-typename';
import { Variant } from './variant';
export interface Product {
  __typename: ProductTypename;
  baseImgUrl: string;
  id: string;
  name: string;
  primaryImage: string;
  productCode: string;
  slug: string;
  variant: Variant;
}
