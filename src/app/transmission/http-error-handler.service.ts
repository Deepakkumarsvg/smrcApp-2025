import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ConstantService } from '../services/constant.service';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {

  constructor() {}

  private static prepareErrorMessage(error: HttpErrorResponse): string {
		let errorMessage: string;
		if (error.error instanceof HttpErrorResponse) errorMessage = error.error.message;
		else if (error.status === 0) errorMessage = ConstantService.COULD_NOT_CONNECT_TO_SERVER_ERROR;
		else errorMessage = error.error.message;

		return errorMessage;
	}

  public intercept(error: HttpErrorResponse): Observable<any> {
		return throwError(
			() => HttpErrorHandlerService.prepareErrorMessage(error)
		);
	}

}
