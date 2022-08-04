import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Province } from 'src/app/models/enums/province.enum';
import { PatientService } from 'src/app/services/patient/patient.service';
import { SubSink } from 'subsink';
import { getUserDetails } from '../../shared/Functions/getUserDetails';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit, OnDestroy {
  signInForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  private subSink: SubSink;
  public provincesEnum: Object;

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private router: Router
  ) {
    this.subSink = new SubSink();
    this.provincesEnum = Province;
  }

  ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  /**
   * Submit Sign In will submit the signin form data and route the user to the appropriate dashboard page
   * */
  public submitSignIn() {
    console.log('this.signInForm', this.signInForm.value);
    if (this.signInForm.valid) {
      console.log('this.signInForm', this.signInForm.value);
      this.subSink.add(
        this.patientService.signIn(this.signInForm.value).subscribe(
          (res) => {
            sessionStorage.setItem('signedInUser', JSON.stringify(res));
            switch (getUserDetails()?.type) {
              case 'MEDICAL_STAFF': {
                this.router.navigate(['/medicalStaff/dashboard']);
                break;
              }
              default: {
                this.router.navigate(['/']);
                break;
              }
            }
          },
          (error) => {
            alert(error.error.message);
          }
        )
      );
    }
  }
}
