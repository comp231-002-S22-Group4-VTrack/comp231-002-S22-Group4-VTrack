import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialAngularModule} from '../../material-angular.module';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { MedicalStaffContainerComponent } from './medical-staff-container.component';
import { MedicalStaffDashboardComponent } from './medical-staff-dashboard/medical-staff-dashboard.component';
import { MedicalStaffContainerRoutingModule } from './medical-staff-container-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MedicalStaffContainerComponent,
    MedicalStaffDashboardComponent
  ],
  exports: [
    MaterialAngularModule
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MedicalStaffContainerRoutingModule,
    MaterialAngularModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [
    MaterialAngularModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MedicalStaffContainerModule {
}
