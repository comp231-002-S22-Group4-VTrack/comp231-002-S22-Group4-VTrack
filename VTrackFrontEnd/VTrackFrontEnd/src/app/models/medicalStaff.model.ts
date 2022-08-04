import {Appointment} from './appointment.model';
import {Account} from './account.class';
import {Clinic} from './clinic.model';

export class MedicalStaff extends Account {
  override firstName: string = '';
  lastname: string = '';
  constructor(public _id: string|null = null,
              public account?: Account,
              public clinic: Clinic = new Clinic()) {
    super();
  }
}
