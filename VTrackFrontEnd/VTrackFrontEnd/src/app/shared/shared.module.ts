import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationBarComponent} from './pages/navigation-bar/navigation-bar.component';
import {MaterialAngularModule} from '../material-angular.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { HttpClientModule } from '@angular/common/http';
import { CreateAppointmentDialogComponent } from './pages/appointment/create-appointment-dialog/create-appointment-dialog.component';
import { ModifyAppointmentDetailsDialogComponent } from './pages/appointment/modify-appointment-details-dialog/modify-appointment-details-dialog.component';
import { UpdateAppointmentVaccineDetailsDialogComponent } from './pages/appointment/update-appointment-vaccine-details-dialog/update-appointment-vaccine-details-dialog.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { GenericTwoOptionDialogComponent } from './pages/generic-two-option-dialog/generic-two-option-dialog.component';
import { ViewAppointmentDialogComponent } from './pages/appointment/view-appointment-dialog/view-appointment-dialog.component';
import { RolePipe } from './pipes/role.pipe';
import { PatientFullNamePipe } from './pipes/patient.pipe';
import { PasswordPipe } from './pipes/password/password.pipe';

@NgModule({
  declarations: [
    NavigationBarComponent,
    ModifyAppointmentDetailsDialogComponent,
    CreateAppointmentDialogComponent,
    UpdateAppointmentVaccineDetailsDialogComponent,
    AppointmentComponent,
    GenericTwoOptionDialogComponent,
    ViewAppointmentDialogComponent,
    RolePipe,
    PatientFullNamePipe,
    PasswordPipe
  ],
  providers: [
    MaterialAngularModule,
    HttpClientModule,
  ],
  exports: [
    NavigationBarComponent,
    MaterialAngularModule,
    ModifyAppointmentDetailsDialogComponent,
    CreateAppointmentDialogComponent,
    UpdateAppointmentVaccineDetailsDialogComponent,
    AppointmentComponent,
    GenericTwoOptionDialogComponent,
    ViewAppointmentDialogComponent,
    PatientFullNamePipe,
    RolePipe,
    PasswordPipe
  ],
  imports: [
    CommonModule,
    MaterialAngularModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    HttpClientModule,
  ]
})

export class SharedModule {
}
