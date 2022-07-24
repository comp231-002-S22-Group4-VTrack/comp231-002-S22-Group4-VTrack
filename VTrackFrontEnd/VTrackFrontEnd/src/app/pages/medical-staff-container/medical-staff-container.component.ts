import { Component, OnInit } from '@angular/core';
import {Role} from '../../models/enums/role.enum';

@Component({
  selector: 'app-medical-staff-container',
  templateUrl: './medical-staff-container.component.html',
  styleUrls: ['./medical-staff-container.component.scss']
})
export class MedicalStaffContainerComponent implements OnInit {
  public role = Role;

  constructor() {
  }

  ngOnInit(): void {
  }

}
