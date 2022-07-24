import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Service} from '../service.class';

@Injectable({
  providedIn: 'root'
})

export class PatientService extends Service {

  constructor(private http: HttpClient) {
    super();
  }

  public signIn(signInData: any): Observable<any> {
    return this.http.post<any>(`${this.url}/signIn`, signInData ).pipe(catchError(err => throwError(err)));
  }
}
