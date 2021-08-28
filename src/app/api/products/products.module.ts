import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';

import { ProductsAPIInterceptor } from './api.interceptor';
import { ProductServiceService } from './generated/controllers/ProductService';

@NgModule()
export class ProductsAPIModule {
  constructor(@Optional() @SkipSelf() parentModule: ProductsAPIModule) {
    if (parentModule) {
      throw new Error('ProductsAPIModule is already loaded.');
    }
  }

  static forRoot(): ModuleWithProviders<ProductsAPIModule> {
    return {
      ngModule: ProductsAPIModule,
      providers: [
        ProductServiceService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ProductsAPIInterceptor,
          multi: true,
        },
      ],
    };
  }
}
