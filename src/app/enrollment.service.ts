import { catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';





@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url='http://localhost:3000/enroll';

  constructor(private _http: HttpClient) { }


  // when an error occurs, display an error to this url mentioned above
  enroll(user: User){
    return this._http.post<any>(this._url, user).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
