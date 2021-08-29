/* tslint:disable */
import { AttributesTypename } from './attributes-typename';
import { AvailabilityStatus } from './availability-status';
import { AvailabilityText } from './availability-text';
import { FeaturedFlag } from './featured-flag';
export interface Attributes {
  __typename: AttributesTypename;
  availabilityStatus: AvailabilityStatus;
  availabilityText: AvailabilityText;
  canAddToBag: boolean;
  canAddToWishlist: boolean;
  featuredFlags: Array<FeaturedFlag>;
  maxOrderQuantity: number;
  onSale: boolean;
}
