/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';

import { AdventureModel } from '../models/adventure-model';

@Injectable({ providedIn: 'root' })
export class ApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `baseRootGet()` */
  static readonly BaseRootGetPath = '/';

  /**
   * Base Root.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `baseRootGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  baseRootGet$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<any>> {
    const rb = new RequestBuilder(this.rootUrl, ApiService.BaseRootGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Base Root.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `baseRootGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  baseRootGet(
    params?: {
    },
    context?: HttpContext
  ): Observable<any> {
    return this.baseRootGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `createNewAdventureCreatePost()` */
  static readonly CreateNewAdventureCreatePostPath = '/create';

  /**
   * Create New Adventure.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createNewAdventureCreatePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createNewAdventureCreatePost$Response(
    params: {
      body: AdventureModel
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<any>> {
    const rb = new RequestBuilder(this.rootUrl, ApiService.CreateNewAdventureCreatePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Create New Adventure.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createNewAdventureCreatePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createNewAdventureCreatePost(
    params: {
      body: AdventureModel
    },
    context?: HttpContext
  ): Observable<any> {
    return this.createNewAdventureCreatePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `getAllAdventuresForUserAdventuresUserIdGet()` */
  static readonly GetAllAdventuresForUserAdventuresUserIdGetPath = '/adventures/{user_id}';

  /**
   * Get All Adventures For User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllAdventuresForUserAdventuresUserIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllAdventuresForUserAdventuresUserIdGet$Response(
    params: {
      user_id: any;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<any>> {
    const rb = new RequestBuilder(this.rootUrl, ApiService.GetAllAdventuresForUserAdventuresUserIdGetPath, 'get');
    if (params) {
      rb.path('user_id', params.user_id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Get All Adventures For User.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllAdventuresForUserAdventuresUserIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllAdventuresForUserAdventuresUserIdGet(
    params: {
      user_id: any;
    },
    context?: HttpContext
  ): Observable<any> {
    return this.getAllAdventuresForUserAdventuresUserIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

}
