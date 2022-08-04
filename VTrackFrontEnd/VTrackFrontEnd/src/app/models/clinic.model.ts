import {Address} from './address.model';


export class Clinic {
  constructor(public _id: string = '',
              public address:  Address | null = null,
              public name: string = '',) {
  }
}
