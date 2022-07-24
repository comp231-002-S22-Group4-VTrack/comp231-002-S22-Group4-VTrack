import { Component, OnInit } from '@angular/core';
import { Role } from '../../../models/enums/role.enum';
import { AppointmentService } from '../../../services/appointment/appointment.service';
import { MatTableDataSource } from '@angular/material/table';
import { Appointment } from '../../../models/appointment.model';
import { getUserDetails } from '../../../shared/Functions/getUserDetails';

@Component({
  selector: 'app-medical-staff-dashboard',
  templateUrl: './medical-staff-dashboard.component.html',
})
export class MedicalStaffDashboardComponent implements OnInit {
  public role: Role;
  public dataSource: MatTableDataSource<Appointment>;

  constructor(private appointmentService: AppointmentService) {
    this.role = getUserDetails()?.type;
    if (!this.role) this.role = Role.MEDICAL_STAFF;
    this.dataSource = new MatTableDataSource<Appointment>();
  }

  public ngOnInit(): void {
    if (getUserDetails()?.clinicId) {
      this.appointmentService
        .getConfirmedAppointmentsByClinicId(getUserDetails()?.clinicId)
        .subscribe((res) => {
          this.dataSource = new MatTableDataSource<Appointment>(res);
        });
    }
  }
}
