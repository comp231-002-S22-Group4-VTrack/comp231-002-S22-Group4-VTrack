import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckEmailComponent } from './pages/check-email/check-email.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'checkEmail', component: CheckEmailComponent },
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
