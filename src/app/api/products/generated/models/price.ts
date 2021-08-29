/* tslint:disable */
import { ListPriceTypename } from './list-price-typename';
import { CurrencyCode } from './currency-code';
export interface Price {
  __typename: ListPriceTypename;
  centAmount: number;
  currencyCode: CurrencyCode;
  formattedAmount: string;
  formattedValue: number;
}
