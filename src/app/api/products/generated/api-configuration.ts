/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string =
    'https://bkvpcugaoe.execute-api.eu-west-1.amazonaws.com/dev';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
