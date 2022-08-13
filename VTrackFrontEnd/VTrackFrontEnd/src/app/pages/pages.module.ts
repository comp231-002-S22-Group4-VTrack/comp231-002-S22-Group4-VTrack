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
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CheckEmailComponent } from './check-email/check-email.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { PatientContainerModule } from './patient-container/patient-container.module';

@NgModule({
  declarations: [
    HomepageComponent,
    SigninComponent,
    CheckInComponent,
    SignupComponent,
    CheckEmailComponent,
    SetPasswordComponent
  ],
  providers: [
    MedicalStaffContainerModule,
    PatientContainerModule,
    MaterialAngularModule,
    HttpClientModule,
  ],
  exports: [
    HomepageComponent,
    SigninComponent,
    MaterialAngularModule,
    CheckInComponent,
    SignupComponent,
    CheckEmailComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MaterialAngularModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    SharedModule,
    BrowserAnimationsModule,
  ]
})

export class PagesModule {
}
