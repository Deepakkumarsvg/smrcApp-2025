import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, firstValueFrom } from 'rxjs';
import { HttpErrorHandlerService } from './http-error-handler.service';
import { ITransmissionResponse } from '../interfaces/transmission-responses';
import { JWTService } from '../services/jwt.service';

@Injectable({
  providedIn: 'root',
})
export class TransmissionService {
  constructor(
    private _http: HttpClient,
    private _httpErrorHandler: HttpErrorHandlerService,
    private _jwt: JWTService
  ) {}

  public executeGetRequest<T extends ITransmissionResponse>(
    url: string,
    params?: { [key: string]: any },
    requiresAuthentication: boolean = true
  ) {
    return this._http
      .get<T>(url, {
        headers: this._jwt.injectToken(requiresAuthentication),
        params,
      })
      .pipe(catchError((error) => this._httpErrorHandler.intercept(error)));
  }

  public async executeGetRequestPromise<T extends ITransmissionResponse>(
    url: string,
    params?: { [key: string]: any },
    requiresAuthentication: boolean = true
  ) {
    const result: any = await firstValueFrom(
      this._http
        .get<T>(url, {
          headers: this._jwt.injectToken(requiresAuthentication),
          params,
        })
        .pipe(catchError((error) => this._httpErrorHandler.intercept(error)))
    );
    return result;
  }

  public executePostRequest<T>(
    url: string,
    payload: any,
    requiresAuthentication: boolean = true
  ) {
    return this._http
      .post<ITransmissionResponse>(url, payload, {
        headers: this._jwt.injectToken(requiresAuthentication),
      })
      .pipe(catchError((error) => this._httpErrorHandler.intercept(error)));
  }

  public async executePostRequestPromise<T>(
    url: string,
    payload: any,
    requiresAuthentication: boolean = true
  ) {
    const result: any = await firstValueFrom(
      this._http
        .post<ITransmissionResponse>(url, payload, {
          headers: this._jwt.injectToken(requiresAuthentication),
        })
        .pipe(catchError((error) => this._httpErrorHandler.intercept(error)))
    );

    return result;
  }

  public executePatchRequest<T>(
    url: string,
    payload: any,
    requiresAuthentication: boolean = true
  ) {
    return this._http
      .patch<ITransmissionResponse>(url, payload, {
        headers: this._jwt.injectToken(requiresAuthentication),
      })
      .pipe(catchError((error) => this._httpErrorHandler.intercept(error)));
  }

  public async executePatchRequestPromise<T>(
    url: string,
    payload: any,
    requiresAuthentication: boolean = true
  ) {
    const result: any = await firstValueFrom(
      this._http
        .patch<ITransmissionResponse>(url, payload, {
          headers: this._jwt.injectToken(requiresAuthentication),
        })
        .pipe(catchError((error) => this._httpErrorHandler.intercept(error)))
    );

    return result;
  }

  public executeDeleteRequest<T>(
    url: string,
    params?: { [key: string]: any },
    requiresAuthentication: boolean = true
  ) {
    return this._http
      .delete<ITransmissionResponse>(url, {
        headers: this._jwt.injectToken(requiresAuthentication),
        params,
      })
      .pipe(catchError((error) => this._httpErrorHandler.intercept(error)));
  }
}
