import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetPasswordGuard } from './guards/set-password.guard';
import { CheckEmailComponent } from './pages/check-email/check-email.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SetPasswordComponent } from './pages/set-password/set-password.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'checkEmail', component: CheckEmailComponent },
  { path: 'setPassword/:token', component: SetPasswordComponent, canActivate: [SetPasswordGuard] },
  {
    path: 'patient',
    loadChildren: () => import('./pages/patient-container/patient-container.module').then(m => m.PatientContainerModule)
  },
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
