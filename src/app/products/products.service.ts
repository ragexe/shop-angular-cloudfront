import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductServiceService } from '../api/products/generated/controllers/ProductService';
import { ApiService } from '../core/api.service';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends ApiService {
  protected readonly productServiceService: ProductServiceService;

  constructor(protected readonly injector: Injector) {
    super(injector);
    this.productServiceService = injector.get(ProductServiceService);
  }

  getProducts(): Observable<Product[]> {
    if (!this.endpointEnabled('bff')) {
      console.warn(
        'Endpoint "bff" is disabled. To enable change your environment.ts config'
      );
      return this.http.get<Product[]>('/assets/products.json');
    }

    return this.productServiceService.getProductsList({}).pipe(
      map((apiProducts) =>
        apiProducts.map<Product>((apiProduct) => ({
          count: apiProduct.variant.attributes.maxOrderQuantity,
          description: apiProduct.name,
          id: apiProduct.id,
          price: apiProduct.variant.price.formattedValue,
          title: apiProduct.name,
          baseImgUrl: apiProduct.baseImgUrl,
          slug: apiProduct.slug,
        }))
      )
    );
  }

  getProductsForCheckout(ids: string[]): Observable<Product[]> {
    if (!ids.length) {
      return of([]);
    }

    return this.getProducts().pipe(
      map((products) => products.filter((product) => ids.includes(product.id)))
    );
  }
}
