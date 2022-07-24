import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Appointment} from '../../models/appointment.model';
import {catchError} from 'rxjs/operators';
import {Service} from '../service.class';

@Injectable({
  providedIn: 'root'
})

export class AppointmentService extends Service {
  constructor(private http: HttpClient) {
    super();
  }


  public getConfirmedAppointmentsByClinicId(clinicId = '6060e1549107f28980861695'): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.url}/getConfirmedAppointmentsByClinicId/${clinicId}`, {headers: this.httpHeader}).pipe(
      catchError(err => {
        return throwError(err);
      }));
  }

  
}
