import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public static readonly LOGIN_REQUEST: string = 'You need to login first';
	public static readonly GENERIC_FAILURE: string = 'Something went wrong';
	public static readonly GENERIC_FAILURE_REQUEST_INCOMPLETE: string = 'Something went wrong. We could not complete the request';
	public static readonly LOGIN_SUCCESSFUL: string = 'Logged in successfully';
	public static readonly LOGOUT_SUCCESSFUL: string = 'Logged out successfully';
	public static readonly WRONG_CREDENTIAL_ERROR: string = 'Please check your credentials';
	public static readonly EXPIRED_TOKEN_RECEIVED: string = 'An expired session was received. You may need to login again';
	public static readonly OTP_SENT_SUCCESSFUL: string = 'OTP sent';
	public static readonly OTP_VALIDATED: string = 'OTP Validated';
	public static readonly ENTER_VALID_OTP: string = 'Enter valid OTP';
	public static readonly NEW_CONFIRM_PASSWORD_MISMATCH: string = 'New password and confirm password must be identical';
	public static readonly PASSWORD_RESET_SUCCESSFUL: string = 'Password Reset Successfully';
	public static readonly REQUIRED_FIELD_MISSING: string = 'Required field value missing';
	public static readonly LOGOUT_CONFRIMATION: string = 'Are you sure you want to logout?';
	public static readonly SAVE_CONFIRMATION: string = 'Saved Successfully';
	public static readonly WHITE_SPACE_NOT_VALID: string = 'Blank space is not acceptable';
	public static readonly PAYMENT_SUCCESS: string = 'Payment Received Successfully';
	public static readonly MESSAGE_SUCCESS: string = 'Success';
	public static readonly MESSAGE_WARN: string = 'Warning';
	public static readonly MESSAGE_INFO: string = 'Info';
	public static readonly MESSAGE_ERROR: string = 'Error';
	public static readonly REGISTER_SUCCESS: string = 'Registration successful';
	public static readonly PASSWORD_RESET_SUCCESS: string = 'Password Reset successfully';
	public static readonly SERVICES_FETCHED_SUCCESS: string = 'Services fetched successfully';
	public static readonly PROVIDERS_SUBMITTED_SUCCESS: string = 'Services request sent successfully';
	public static readonly NO_PROVIDERS_SELECTED: string = 'No service provider selected';
	public static readonly MESSAGE_WARNING: string = 'Please select any provider';
	public static readonly USER_FETCHED_SUCCESS: string = 'User fetched successfully';
	public static readonly USER_SAVED_SUCCESS: string = 'User Details Saved successfully';
	public static readonly RESTRICTED: string = 'Dont Have Access to this url';
	public static readonly CANCELLED_SERVICE: string = 'Your service cancelled';
	public static readonly ACCOUNT_ADDED: string = 'Your account has been added';


  constructor() { }
}
