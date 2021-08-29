/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpHeaders,
} from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProductsWrapper } from '../models/products-wrapper';

/**
 * Everything about providing products
 */
@Injectable({
  providedIn: 'root',
})
class ProductServiceService extends __BaseService {
  static readonly getGetProductsByIdPath = '/getProductsById';
  static readonly getGetProductsListPath = '/getProductsList';

  constructor(config: __Configuration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Finds products with provided {id} and returns list of them
   *
   * @param params The `ProductServiceService.GetGetProductsByIdParams` containing the following parameters:
   *
   * - `id`: The value of the identifier for the search
   *
   * - `debug`: If true the API response contains event object
   *
   * @return 200 response
   */
  getGetProductsByIdResponse(
    params: ProductServiceService.GetGetProductsByIdParams
  ): __Observable<__StrictHttpResponse<ProductsWrapper>> {
    let __params = this.newParams();
    const __headers = new HttpHeaders();
    const __body: any = null;
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.debug != null)
      __params = __params.set('debug', params.debug.toString());
    const req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/getProductsById`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json',
      }
    );

    return this.http.request<any>(req).pipe(
      __filter((_r) => _r instanceof HttpResponse),
      __map((_r) => _r as __StrictHttpResponse<ProductsWrapper>)
    );
  }
  /**
   * Finds products with provided {id} and returns list of them
   *
   * @param params The `ProductServiceService.GetGetProductsByIdParams` containing the following parameters:
   *
   * - `id`: The value of the identifier for the search
   *
   * - `debug`: If true the API response contains event object
   *
   * @return 200 response
   */
  getGetProductsById(
    params: ProductServiceService.GetGetProductsByIdParams
  ): __Observable<ProductsWrapper> {
    return this.getGetProductsByIdResponse(params).pipe(
      __map((_r) => _r.body as ProductsWrapper)
    );
  }

  /**
   * Returns products
   *
   * Returns list of all available products
   *
   * @param debug If true the API response contains event object
   * @return 200 response
   */
  getGetProductsListResponse(
    debug?: string
  ): __Observable<__StrictHttpResponse<ProductsWrapper>> {
    let __params = this.newParams();
    const __headers = new HttpHeaders();
    const __body: any = null;
    if (debug != null) __params = __params.set('debug', debug.toString());
    const req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/getProductsList`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json',
      }
    );

    return this.http.request<any>(req).pipe(
      __filter((_r) => _r instanceof HttpResponse),
      __map((_r) => _r as __StrictHttpResponse<ProductsWrapper>)
    );
  }
  /**
   * Returns products
   *
   * Returns list of all available products
   *
   * @param debug If true the API response contains event object
   * @return 200 response
   */
  getGetProductsList(debug?: string): __Observable<ProductsWrapper> {
    return this.getGetProductsListResponse(debug).pipe(
      __map((_r) => _r.body as ProductsWrapper)
    );
  }
}

module ProductServiceService {
  /**
   * Parameters for getGetProductsById
   */
  export interface GetGetProductsByIdParams {
    /**
     * The value of the identifier for the search
     */
    id: string;

    /**
     * If true the API response contains event object
     */
    debug?: string;
  }
}

export { ProductServiceService };
