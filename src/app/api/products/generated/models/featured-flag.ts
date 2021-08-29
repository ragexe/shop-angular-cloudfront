/* tslint:disable */
import { FeaturedFlagTypename } from './featured-flag-typename';
import { Key } from './key';
import { Label } from './label';
export interface FeaturedFlag {
  __typename: FeaturedFlagTypename;
  key: Key;
  label: Label;
}
