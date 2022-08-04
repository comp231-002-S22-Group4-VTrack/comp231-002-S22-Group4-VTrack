import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Appointment} from '../../../../models/appointment.model';
import {VaccinesService} from '../../../../services/vaccines/vaccines.service';
import {Vaccine} from '../../../../models/vaccine.model';
import {Observable} from 'rxjs';
import {MedicalStaff} from '../../../../models/medicalStaff.model';
import {AppointmentService} from '../../../../services/appointment/appointment.service';
import { SubSink } from 'subsink';
import { MedicalStaffService } from 'src/app/services/medical-staff/medical-staff.service';

@Component({
  selector: 'app-modify-appointment-details-dialog',
  templateUrl: './modify-appointment-details-dialog.component.html',
  styleUrls: ['./modify-appointment-details-dialog.component.scss']
})
export class ModifyAppointmentDetailsDialogComponent implements OnInit, OnDestroy {
  public modifyApptForm!: FormGroup;
  public currentDate!: Date;
  public vaccines$!: Observable<Vaccine[]>;
  public medicalStaffs$!: Observable<MedicalStaff[]>;
  public subSink: SubSink;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Appointment,
              private appointmentService: AppointmentService,
              private dialogRef: MatDialogRef<ModifyAppointmentDetailsDialogComponent>,
              private formBuilder: FormBuilder,
              private vaccineService: VaccinesService,
              private medicalStaffService: MedicalStaffService) {
                this.subSink = new SubSink();
  }

  ngOnInit(): void {
    this.createModifyApptForm();
    this.currentDate = new Date();
    this.vaccines$ = this.vaccineService.getVaccines();
    this.medicalStaffs$ = this.medicalStaffService.getMedicalStaffsByClinicId(this.data.clinic._id);
  }

  ngOnDestroy(): void{
    this.subSink.unsubscribe();
  }

  private createModifyApptForm(): void {
    this.modifyApptForm = this.formBuilder.group({
      vaccine: [this.data?.vaccine?._id || '', Validators.required],
      vaccineDose: [this.data?.vaccineDose || '', Validators.required],
      medicalStaff: [this.data?.medicalStaff?._id, Validators.required],
      appointmentDate: [new Date(this.data?.startTime || this.data?.preferredDate) || '', Validators.required],
      // tslint:disable-next-line: max-line-length
      appointmentTime: [new Date(this.data?.startTime || this.data?.preferredTime).toISOString().match(/\d\d:\d\d/)[0] || '', Validators.required],
    });
  }

  public submitUpdatedAppointment(): void {
    console.log('submit reached');

    if (this.modifyApptForm.valid) {
      const {vaccine, vaccineDose, medicalStaff, appointmentDate, appointmentTime} = this.modifyApptForm.getRawValue();
      const startTime = new Date(appointmentDate.toLocaleDateString() + ' ' + appointmentTime);

      const modifiedAppointment = {_id: this.data._id, vaccine, vaccineDose, medicalStaff, startTime};

      this.subSink.add(this.appointmentService.updateAppointment(modifiedAppointment).subscribe(res => {
        console.log(res);
      }));

      this.dialogRef.close(true);
    }
  }
}
