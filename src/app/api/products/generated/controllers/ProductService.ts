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

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as __model from '../model';

export interface GetProductsByIdParams {
	/** If true the API response contains event object */
	debug?: string;
	/** The value of the identifier for the search */
	id: string;
}

export interface GetProductsListParams {
	/** If true the API response contains event object */
	debug?: string;
}

@Injectable()
export class ProductServiceService {
	constructor(private http: HttpClient) {}

	/**
	 * Finds products with provided {id} and returns list of them
	 * http://f5erv8t263.execute-api.eu-west-1.amazonaws.com/swagger/swagger-ui.html#!/product-service/undefined
	 */
	getProductsById(params: GetProductsByIdParams): Observable<__model.Products> {
		const queryParamBase = {
			debug: params.debug,
			id: params.id,
		};

		let queryParams = new HttpParams();
		Object.entries(queryParamBase).forEach(([key, value]: [string, any]) => {
			if (value !== undefined) {
				if (typeof value === 'string')
					queryParams = queryParams.set(key, value);
				else if (Array.isArray(value))
					value.forEach((v) => (queryParams = queryParams.append(key, v)));
				else queryParams = queryParams.set(key, JSON.stringify(value));
			}
		});

		return this.http.get<__model.Products>(`/dev/getProductsById`, {
			params: queryParams,
		});
	}

	/**
	 * Returns products
	 * Returns list of all available products
	 * http://f5erv8t263.execute-api.eu-west-1.amazonaws.com/swagger/swagger-ui.html#!/product-service/undefined
	 */
	getProductsList(params: GetProductsListParams): Observable<__model.Products> {
		const queryParamBase = {
			debug: params.debug,
		};

		let queryParams = new HttpParams();
		Object.entries(queryParamBase).forEach(([key, value]: [string, any]) => {
			if (value !== undefined) {
				if (typeof value === 'string')
					queryParams = queryParams.set(key, value);
				else if (Array.isArray(value))
					value.forEach((v) => (queryParams = queryParams.append(key, v)));
				else queryParams = queryParams.set(key, JSON.stringify(value));
			}
		});

		return this.http.get<__model.Products>(`/dev/getProductsList`, {
			params: queryParams,
		});
	}
}
