/* tslint:disable */
import { ProductTypename } from './product-typename';
import { Variant } from './variant';
export interface StoreProduct {
  product: {
    productCode: string;
    primaryImage: string;
    baseImgUrl: string;
    __typename: ProductTypename;
    name: string;
    variant: Variant;
    slug: string;
  };
}
