import {Injectable} from "@angular/core";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})

// Error handling
export class ErrorHandlingService {
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
