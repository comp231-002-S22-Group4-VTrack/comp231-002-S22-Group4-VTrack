import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationBarComponent} from './pages/navigation-bar/navigation-bar.component';
import {MaterialAngularModule} from '../material-angular.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NavigationBarComponent,
  ],
  providers: [
    MaterialAngularModule,
    HttpClientModule,
  ],
  exports: [
    NavigationBarComponent,
    MaterialAngularModule
  ],
  imports: [
    CommonModule,
    MaterialAngularModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    HttpClientModule,
  ]
})

export class SharedModule {
}
