import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VaccineHistoryComponent} from '../../shared/pages/vaccine-history/vaccine-history.component';
import { MedicalStaffContainerComponent } from './medical-staff-container.component';
import { MedicalStaffDashboardComponent } from './medical-staff-dashboard/medical-staff-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MedicalStaffContainerComponent,
    children: [
      {path: 'dashboard', component: MedicalStaffDashboardComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalStaffContainerRoutingModule {
}
