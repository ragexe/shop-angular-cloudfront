/* tslint:disable */
type CurrencyCode = 'USD';
module CurrencyCode {
  export const USD: CurrencyCode = 'USD';
  export function values(): CurrencyCode[] {
    return [USD];
  }
}

export { CurrencyCode };
