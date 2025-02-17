import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  public static readonly COULD_NOT_CONNECT_TO_SERVER_ERROR: string = 'could not connect to our servers';
  public static readonly USER_ALREADY_EXIST: string = 'user already exists for the specific context';

  // Don't change this message. If u want to change then change in backend code also. Condition checking depend on this message
  public static readonly NOT_VERIFIED_RESEND_OTP = 'This email address is already registered. Kindly verify your email address';

  /* JWT CONSTANTS */

  public static readonly AUTHORIZATION_HEADER: string = 'Authorization';
  public static readonly CONTENT_TYPE_HEADER: string = 'Content-Type';
  public static readonly AUTHORIZATION_SCHEME: string = 'Bearer ';
  public static readonly EXPIRED_TOKEN: string = 'expired-token';
  public static readonly DOMAIN_NOT_ALLOWED: string = 'domain-not-allowed';
  public static readonly NO_JWT_TOKEN: string = 'no-jwt-token';

  constructor() { }
}
