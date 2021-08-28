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

import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from '../../../controllers/ProductService';

@Injectable()
export class GetProductsByIdFormService {
	form: FormGroup;
	constructor(private productServiceService: ProductServiceService) {
		this.form = new FormGroup({
			debug: new FormControl(undefined, []),
			id: new FormControl(undefined, [Validators.required]),
		});
	}

	submit(raw = false) {
		const data = raw ? this.form.getRawValue() : this.form.value;
		return this.productServiceService.getProductsById(data);
	}
}
