import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Service } from '../service.class';
import { MedicalStaff } from '../../models/medicalStaff.model';

@Injectable({
  providedIn: 'root'
})
export class MedicalStaffService extends Service {
  constructor(private http: HttpClient) {
    super();
  }

  public getMedicalStaffsByClinicId(clinicId: string): Observable<MedicalStaff[]> {
    return this.http.get<MedicalStaff[]>(`${this.url}/getAllMedicalStaffs/${clinicId}`, {
      headers: this.httpHeader,
      withCredentials: true
    })
      .pipe(
        catchError(err => {
          return throwError(err);
        }));
  }
}
