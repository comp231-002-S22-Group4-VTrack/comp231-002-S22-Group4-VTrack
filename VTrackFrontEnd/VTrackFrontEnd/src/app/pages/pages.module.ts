import { SharedModule } from "./../shared/shared.module";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAngularModule } from '../material-angular.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './signin/signin.component';
import { MedicalStaffContainerModule } from './medical-staff-container/medical-staff-container.module';
import { HttpClientModule } from '@angular/common/http';
import { CheckInComponent } from './check-in/check-in.component';

@NgModule({
  declarations: [
    HomepageComponent,
    SigninComponent,
    CheckInComponent
  ],
  providers: [
    MedicalStaffContainerModule,
    MaterialAngularModule,
    HttpClientModule,
  ],
  exports: [
    HomepageComponent,
    SigninComponent,
    MaterialAngularModule,
    CheckInComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MaterialAngularModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    SharedModule
  ]
})

export class PagesModule {
}
