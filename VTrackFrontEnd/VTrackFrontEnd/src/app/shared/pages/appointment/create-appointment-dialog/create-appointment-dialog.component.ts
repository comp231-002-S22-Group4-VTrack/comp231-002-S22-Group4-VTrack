import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Appointment } from 'src/app/models/appointment.model';
import { Vaccine } from 'src/app/models/vaccine.model';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';
import { ModifyAppointmentDetailsDialogComponent } from '../modify-appointment-details-dialog/modify-appointment-details-dialog.component';
import {PatientService} from '../../../../services/patient/patient.service';
import {SubSink} from 'subsink';
import { Role } from 'src/app/models/enums/role.enum';
import { Clinic } from 'src/app/models/clinic.model';
import * as moment from 'moment';
import { AppointmentType } from 'src/app/models/enums/appointment.enum';
import {getUserDetails} from "../../../Functions/getUserDetails";
import { MedicalStaff } from 'src/app/models/medicalStaff.model';
import { VaccinesService } from 'src/app/services/vaccines/vaccines.service';
import { MedicalStaffService } from 'src/app/services/medical-staff/medical-staff.service';
import { BookAppointmentDTO } from 'src/app/shared/Models/bookAppointmentDTO';
import { PatientList } from 'src/app/shared/Models/patientList';
import { ClinicService } from 'src/app/services/clinic/clinic.service';

// tslint:disable: max-line-length
@Component({
  selector: 'app-create-appointment-dialog',
  templateUrl: './create-appointment-dialog.component.html',
  styleUrls: ['./create-appointment-dialog.component.scss']
})
export class CreateAppointmentDialogComponent implements OnInit, OnDestroy {
  public modifyApptForm!: FormGroup;
  public currentDate!: Date;
  public vaccines$!: Observable<Vaccine[]>;
  public patients$!: Observable<PatientList[]>;
  public clinics: Clinic[];
  public medicalStaffs$!: Observable<MedicalStaff[]>;
  public modularLabels;
  public isPatient!: boolean;
  private subSink: SubSink;

  constructor(@Inject(MAT_DIALOG_DATA) public data: CreateAppointmentDialogModel,
              private dialogRef: MatDialogRef<ModifyAppointmentDetailsDialogComponent>,
              private formBuilder: FormBuilder,
              private vaccineService: VaccinesService,
              private clinicService: ClinicService,
              private medicalStaffService: MedicalStaffService,
              private patientService: PatientService,
              private appointmentService: AppointmentService) {
    this.clinics = [];
    if (data) {
      this.isPatient = data.role === Role.PATIENT;

      if (this.isPatient) {
        let title = '';

        if (this.data.appointment){
          title = 'Request Change Appointment';
        } else {
          title = 'Request Appointment';
        }

        this.modularLabels = {
          title,
          appointmentDate: 'Preferred Date',
          appointmentTime: 'Preferred Time',
        }
      } else {
        this.modularLabels = {
          title: 'Create Appointment',
          appointmentDate: 'Appointment Date',
          appointmentTime: 'Appointment Time',
        }
      }
    }
    this.subSink = new SubSink();
  }

  ngOnInit() {
    this.subSink.add(this.clinicService.getClinics().subscribe(res => {
      this.clinics = res;
    }));

    this.createModifyApptForm();
    this.currentDate = new Date();
    this.vaccines$ = this.vaccineService.getVaccines();
    this.patients$ = this.patientService.getAllPatients();

    const tempClinicId = '6060e1549107f28980861695';
    if (getUserDetails()?.clinicId) {
      this.medicalStaffs$ = this.medicalStaffService.getMedicalStaffsByClinicId(getUserDetails()?.clinicId);
    }
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  /*
  * Create the angular reactive form
  */
  public createModifyApptForm(): void {
    if (this.data?.appointment) {
      const appointment = this.data.appointment;
      console.log(appointment);
      this.modifyApptForm = this.formBuilder.group({
        patient: [appointment.patient._id, Validators.required],
        clinic: [appointment.clinic._id, Validators.required],
        vaccine: [appointment.vaccine._id, Validators.required],
        vaccineDose: [appointment.vaccineDose, Validators.required],
        medicalStaff: [appointment.medicalStaff, Validators.required],
        appointmentDate: [new Date(appointment.preferredDate) || '', Validators.required],
        appointmentTime: [new Date(appointment.preferredTime).toISOString().match(/\d\d:\d\d/)[0] || '', Validators.required],
        reason: [appointment.reason, Validators.required],
      });
    } else {
      this.modifyApptForm = this.formBuilder.group({
        patient: ['', Validators.required],
        clinic: ['', Validators.required],
        vaccine: ['', Validators.required],
        vaccineDose: ['', Validators.required],
        medicalStaff: ['', Validators.required],
        appointmentDate: [new Date(Date.now()) || '', Validators.required],
        appointmentTime: [new Date(Date.now()).toISOString().match(/\d\d:\d\d/)[0] || '', Validators.required],
        reason: ['', Validators.required],
      });
    }

    // disable validation for hidden fields
    if(this.isPatient){
      this.modifyApptForm.get('patient').clearValidators();
      this.modifyApptForm.get('MedicalStaff').clearValidators();
    } else {
      this.modifyApptForm.get('clinic').clearValidators();
    }
  }

  /*
  * Submit the updated appointment
  */
  public submitUpdatedAppointment(): void {
    console.log('submit reached');
    console.log(this.modifyApptForm);

    if (this.modifyApptForm.valid) {
      let appointmentPayload;
      const {clinic, vaccine, vaccineDose, medicalStaff: medicalStaff, appointmentDate, appointmentTime, patient, reason } = this.modifyApptForm.getRawValue();
      console.log('appointment details', this.modifyApptForm.value);
      if (this.isPatient){
        const preferredDate = new Date(appointmentDate.toLocaleDateString() + ' ' + appointmentTime);
        // appointmentPayload = {...new BookAppointmentDTO(), vaccineDose, preferredDate, preferredTime: appointmentTime, vaccineId: vaccine, MedicalStaffId: MedicalStaff, patientId: patient, clinicId: clinic, reason, _id: this.data.appointment._id};
        // let preferredTime= new Date(preferredDate).setTime(appointmentTime);

        let preferredTime = moment(appointmentTime, ['h:mm A']).format();

        appointmentPayload = {
          _id: this.data.appointment._id,
          preferredDate: appointmentDate,
          preferredTime,
          reason,
          vaccineDose,
          vaccine,
          type: AppointmentType.REQUESTED
        };


        this.subSink.add(this.appointmentService.updateAppointment(appointmentPayload).subscribe(result => {
          console.log(result);
          this.dialogRef.close(true);
        }, err => {
          console.log(err);
          this.dialogRef.close(true);
        }));
      }
      else
      {
        const startTime = new Date(appointmentDate.toLocaleDateString() + ' ' + appointmentTime);
        appointmentPayload = {...new BookAppointmentDTO(), vaccineDose, startTime, vaccineId: vaccine, medicalStaffId: medicalStaff, patientId: patient, clinicId: '6060e1549107f28980861695', reason};
        if (getUserDetails().clinicId) {
          appointmentPayload.clinicId = getUserDetails().clinicId;
        }

        console.log(appointmentPayload);
        if (appointmentPayload){
          this.subSink.add(this.appointmentService.bookAppointment(appointmentPayload).subscribe(result => {
            console.log(result);
            this.dialogRef.close(true);
          }, err => {
            console.log(err);
            this.dialogRef.close(true);
          }));
        }
      }
    }
  }
}

export interface CreateAppointmentDialogModel{
  appointment?: Appointment;
  role: Role;
}
