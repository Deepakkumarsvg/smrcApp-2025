import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class RequestMapperService {

  constructor() {}

  public static readonly BASE_RELATIVE_URL = '';
	public static readonly ROOT_URL: string = '/';

  public static readonly REGISTER_URL: string = environment.SERVER_ENDPOINT + '/auth/register';
  public static readonly REGISTER_OTP_URL: string = environment.SERVER_ENDPOINT + '/auth/register-send-otp';
  public static readonly API_CALL_CHECK: string = environment.SERVER_ENDPOINT + '/users/check-api';
}
