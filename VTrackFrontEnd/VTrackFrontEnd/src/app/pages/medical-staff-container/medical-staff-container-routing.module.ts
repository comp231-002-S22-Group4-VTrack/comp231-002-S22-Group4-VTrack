import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicalStaffContainerComponent } from './medical-staff-container.component';
import { MedicalStaffDashboardComponent } from './medical-staff-dashboard/medical-staff-dashboard.component';
import { MaterialAngularModule } from '../../material-angular.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: MedicalStaffContainerComponent,
    children: [
      { path: 'dashboard', component: MedicalStaffDashboardComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MaterialAngularModule,
    HttpClientModule,
  ],
  exports: [RouterModule, MaterialAngularModule],
})
export class MedicalStaffContainerRoutingModule {}
