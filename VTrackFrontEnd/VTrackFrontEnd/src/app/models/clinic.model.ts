import {Address} from './address.model';


export class Clinic {
  constructor(public _id: string = '',
              public address:  Address = new Address(),
              public name: string = '',) {
  }
}
