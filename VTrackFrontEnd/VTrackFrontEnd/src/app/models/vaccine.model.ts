export class Vaccine {
    constructor(public _id: string = '',
                public name: string = '',
                public isRationed: boolean = false,
                public manufacturer: string = '',
                public shelfLife: number = 0,
                public approvedProvinces: string = '',
                public vaccineId: number = 0 ) {
    }
  }
