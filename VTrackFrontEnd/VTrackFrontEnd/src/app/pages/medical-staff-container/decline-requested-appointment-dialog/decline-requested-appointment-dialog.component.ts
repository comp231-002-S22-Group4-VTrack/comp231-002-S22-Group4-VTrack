import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Role} from '../../../models/enums/role.enum';
import {SubSink} from 'subsink';
import {Appointment} from '../../../models/appointment.model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {AppointmentService} from '../../../services/appointment/appointment.service';
import { AppointmentType } from 'src/app/models/enums/appointment.enum';

@Component({
  selector: 'app-decline-requested-appointment-dialog',
  templateUrl: './decline-requested-appointment-dialog.component.html',
  styleUrls: ['./decline-requested-appointment-dialog.component.scss']
})
export class DeclineRequestedAppointmentDialogComponent implements OnInit,OnDestroy {

  public role = Role.MEDICAL_STAFF;
  private subSink: SubSink;

  note = new FormControl();

  constructor(private appointmentService: AppointmentService, private dialog: MatDialog,  @Inject(MAT_DIALOG_DATA) private appointment: Appointment) {
    this.subSink = new SubSink();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  save($event: any) {
    const apiPayload = {_id: this.appointment._id, type: AppointmentType.CANCELLED}
    this.subSink.add(this.appointmentService.updateAppointment(apiPayload).subscribe(res=>{console.log(res)}));
    console.log(this.note.value);
  }
}
