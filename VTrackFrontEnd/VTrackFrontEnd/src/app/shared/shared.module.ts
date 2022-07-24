import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationBarComponent} from './pages/navigation-bar/navigation-bar.component';
import {MaterialAngularModule} from '../material-angular.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({
  declarations: [
    NavigationBarComponent,
  ],
  providers: [
  ],
  exports: [
    NavigationBarComponent,
  ],
  imports: [
    CommonModule,
    MaterialAngularModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
  ]
})

export class SharedModule {
}
