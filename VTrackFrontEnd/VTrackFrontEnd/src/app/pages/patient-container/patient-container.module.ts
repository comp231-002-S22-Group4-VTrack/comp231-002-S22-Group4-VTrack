import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAngularModule } from 'src/app/material-angular.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientContainerRoutingModule } from './patient-container-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PatientContainerComponent } from './patient-container.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PatientContainerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    HttpClientModule,
    PatientContainerRoutingModule,
    MaterialAngularModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})

export class PatientContainerModule {
}
