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

import { BodyLoginForAccessTokenTokenPost } from '../models/body-login-for-access-token-token-post';
import { TokenModel } from '../models/token-model';
import { UserModel } from '../models/user-model';

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

  /** Path part for operation `createUserCreateUserPost()` */
  static readonly CreateUserCreateUserPostPath = '/createUser';

  /**
   * Create User.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUserCreateUserPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  createUserCreateUserPost$Response(
    params: {
      username: string;
      password: string;
      email?: string;
      full_name?: string;
      disabled?: boolean;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<TokenModel>> {
    const rb = new RequestBuilder(this.rootUrl, ApiService.CreateUserCreateUserPostPath, 'post');
    if (params) {
      rb.query('username', params.username, {});
      rb.query('password', params.password, {});
      rb.query('email', params.email, {});
      rb.query('full_name', params.full_name, {});
      rb.query('disabled', params.disabled, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TokenModel>;
      })
    );
  }

  /**
   * Create User.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createUserCreateUserPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  createUserCreateUserPost(
    params: {
      username: string;
      password: string;
      email?: string;
      full_name?: string;
      disabled?: boolean;
    },
    context?: HttpContext
  ): Observable<TokenModel> {
    return this.createUserCreateUserPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<TokenModel>): TokenModel => r.body)
    );
  }

  /** Path part for operation `loginForAccessTokenTokenPost()` */
  static readonly LoginForAccessTokenTokenPostPath = '/token';

  /**
   * Login For Access Token.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginForAccessTokenTokenPost()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  loginForAccessTokenTokenPost$Response(
    params: {
      body: BodyLoginForAccessTokenTokenPost
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<TokenModel>> {
    const rb = new RequestBuilder(this.rootUrl, ApiService.LoginForAccessTokenTokenPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TokenModel>;
      })
    );
  }

  /**
   * Login For Access Token.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loginForAccessTokenTokenPost$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  loginForAccessTokenTokenPost(
    params: {
      body: BodyLoginForAccessTokenTokenPost
    },
    context?: HttpContext
  ): Observable<TokenModel> {
    return this.loginForAccessTokenTokenPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<TokenModel>): TokenModel => r.body)
    );
  }

  /** Path part for operation `readUsersMeUsersMeGet()` */
  static readonly ReadUsersMeUsersMeGetPath = '/users/me/';

  /**
   * Read Users Me.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `readUsersMeUsersMeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  readUsersMeUsersMeGet$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<UserModel>> {
    const rb = new RequestBuilder(this.rootUrl, ApiService.ReadUsersMeUsersMeGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserModel>;
      })
    );
  }

  /**
   * Read Users Me.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `readUsersMeUsersMeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  readUsersMeUsersMeGet(
    params?: {
    },
    context?: HttpContext
  ): Observable<UserModel> {
    return this.readUsersMeUsersMeGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserModel>): UserModel => r.body)
    );
  }

  /** Path part for operation `getUserByUsernameUsersUsernameGet()` */
  static readonly GetUserByUsernameUsersUsernameGetPath = '/users/{username}';

  /**
   * Get User By Username.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserByUsernameUsersUsernameGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByUsernameUsersUsernameGet$Response(
    params: {
      username: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<any>> {
    const rb = new RequestBuilder(this.rootUrl, ApiService.GetUserByUsernameUsersUsernameGetPath, 'get');
    if (params) {
      rb.path('username', params.username, {});
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
   * Get User By Username.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserByUsernameUsersUsernameGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByUsernameUsersUsernameGet(
    params: {
      username: string;
    },
    context?: HttpContext
  ): Observable<any> {
    return this.getUserByUsernameUsersUsernameGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

}
