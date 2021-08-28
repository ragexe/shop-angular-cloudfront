/* tslint:disable */
type AvailabilityText =
  | 'Available now'
  | 'Backorders accepted, will ship by September 2, 2021'
  | 'Backorders accepted, will ship in 60 days'
  | 'Coming Soon'
  | 'Coming Soon on October 1, 2021'
  | 'Coming Soon on September 1, 2021'
  | 'Sold out'
  | 'Temporarily out of stock';
module AvailabilityText {
  export const AVAILABLE_NOW: AvailabilityText = 'Available now';
  export const BACKORDERS_ACCEPTED_WILL_SHIP_BY_SEPTEMBER_2_2021: AvailabilityText =
    'Backorders accepted, will ship by September 2, 2021';
  export const BACKORDERS_ACCEPTED_WILL_SHIP_IN_60_DAYS: AvailabilityText =
    'Backorders accepted, will ship in 60 days';
  export const COMING_SOON: AvailabilityText = 'Coming Soon';
  export const COMING_SOON_ON_OCTOBER_1_2021: AvailabilityText =
    'Coming Soon on October 1, 2021';
  export const COMING_SOON_ON_SEPTEMBER_1_2021: AvailabilityText =
    'Coming Soon on September 1, 2021';
  export const SOLD_OUT: AvailabilityText = 'Sold out';
  export const TEMPORARILY_OUT_OF_STOCK: AvailabilityText =
    'Temporarily out of stock';
  export function values(): AvailabilityText[] {
    return [
      AVAILABLE_NOW,
      BACKORDERS_ACCEPTED_WILL_SHIP_BY_SEPTEMBER_2_2021,
      BACKORDERS_ACCEPTED_WILL_SHIP_IN_60_DAYS,
      COMING_SOON,
      COMING_SOON_ON_OCTOBER_1_2021,
      COMING_SOON_ON_SEPTEMBER_1_2021,
      SOLD_OUT,
      TEMPORARILY_OUT_OF_STOCK,
    ];
  }
}

export { AvailabilityText };
