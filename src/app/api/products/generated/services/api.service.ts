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

@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly optionsGetProductsByIdPath = '/getProductsById';
  static readonly optionsGetProductsListPath = '/getProductsList';

  constructor(config: __Configuration, http: HttpClient) {
    super(config, http);
  }
  optionsGetProductsByIdResponse(): __Observable<__StrictHttpResponse<null>> {
    const __params = this.newParams();
    const __headers = new HttpHeaders();
    const __body: any = null;
    const req = new HttpRequest<any>(
      'OPTIONS',
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
      __map((_r) => _r as __StrictHttpResponse<null>)
    );
  }
  optionsGetProductsById(): __Observable<null> {
    return this.optionsGetProductsByIdResponse().pipe(
      __map((_r) => _r.body as null)
    );
  }
  optionsGetProductsListResponse(): __Observable<__StrictHttpResponse<null>> {
    const __params = this.newParams();
    const __headers = new HttpHeaders();
    const __body: any = null;
    const req = new HttpRequest<any>(
      'OPTIONS',
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
      __map((_r) => _r as __StrictHttpResponse<null>)
    );
  }
  optionsGetProductsList(): __Observable<null> {
    return this.optionsGetProductsListResponse().pipe(
      __map((_r) => _r.body as null)
    );
  }
}

module ApiService {}

export { ApiService };
