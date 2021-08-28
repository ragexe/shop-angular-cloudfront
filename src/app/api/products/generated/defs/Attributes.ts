/* tslint:disable:max-line-length */
/**
 * This is API based microservice to get mocked products
 * 2021-08-28T14:00:44Z
 * product-service-dev
 * ragexe
 * https://discordapp.com/users/ragexe#2978
 * ragexe@mail.ru
 * The license
 * https://www.github.com
 * f5erv8t263.execute-api.eu-west-1.amazonaws.com/dev
 */

import * as __model from '../model';

export interface Attributes {
	__typename: __model.AttributesTypename;
	canAddToWishlist: boolean;
	availabilityText: __model.AvailabilityText;
	featuredFlags: __model.FeaturedFlag[];
	onSale: boolean;
	availabilityStatus: __model.AvailabilityStatus;
	canAddToBag: boolean;
	maxOrderQuantity: number;
}
