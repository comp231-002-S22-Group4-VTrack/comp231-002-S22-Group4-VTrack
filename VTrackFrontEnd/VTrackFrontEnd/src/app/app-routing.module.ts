import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'signin', component: SigninComponent },
  {
    path: 'medicalStaff',
    // tslint:disable-next-line:max-line-length
    loadChildren: () =>
      import(
        './pages/medical-staff-container/medical-staff-container.module'
      ).then((m) => m.MedicalStaffContainerModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
