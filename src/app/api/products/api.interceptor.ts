import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

import { Config } from '../../../environments/config.interface';
import { CONFIG_TOKEN } from '../../core/injection-tokens/config.token';

@Injectable()
export class ProductsAPIInterceptor implements HttpInterceptor {
  constructor(@Inject(CONFIG_TOKEN) private config: Config) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiReq = request.clone({
      url: Location.joinWithSlash(this.config.apiEndpoints.bff, request.url),
    });

    return next.handle(apiReq);
  }
}
