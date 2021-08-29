/* tslint:disable */
type AvailabilityStatus =
  | 'B_COMING_SOON_AT_DATE'
  | 'D_COMING_SOON'
  | 'E_AVAILABLE'
  | 'F_BACKORDER_FOR_DATE'
  | 'G_BACKORDER'
  | 'H_OUT_OF_STOCK'
  | 'K_SOLD_OUT';
module AvailabilityStatus {
  export const B_COMING_SOON_AT_DATE: AvailabilityStatus =
    'B_COMING_SOON_AT_DATE';
  export const D_COMING_SOON: AvailabilityStatus = 'D_COMING_SOON';
  export const E_AVAILABLE: AvailabilityStatus = 'E_AVAILABLE';
  export const F_BACKORDER_FOR_DATE: AvailabilityStatus =
    'F_BACKORDER_FOR_DATE';
  export const G_BACKORDER: AvailabilityStatus = 'G_BACKORDER';
  export const H_OUT_OF_STOCK: AvailabilityStatus = 'H_OUT_OF_STOCK';
  export const K_SOLD_OUT: AvailabilityStatus = 'K_SOLD_OUT';
  export function values(): AvailabilityStatus[] {
    return [
      B_COMING_SOON_AT_DATE,
      D_COMING_SOON,
      E_AVAILABLE,
      F_BACKORDER_FOR_DATE,
      G_BACKORDER,
      H_OUT_OF_STOCK,
      K_SOLD_OUT,
    ];
  }
}

export { AvailabilityStatus };
