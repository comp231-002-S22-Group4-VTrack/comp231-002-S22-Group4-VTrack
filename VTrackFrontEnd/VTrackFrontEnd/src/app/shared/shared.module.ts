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

@NgModule({
  declarations: [
    NavigationBarComponent,
    ModifyAppointmentDetailsDialogComponent,
    CreateAppointmentDialogComponent,
    UpdateAppointmentVaccineDetailsDialogComponent,
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
