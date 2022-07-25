import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Role } from '../../../models/enums/role.enum';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SubSink } from 'subsink';
import { GenericTwoOptionDialogComponent } from '../generic-two-option-dialog/generic-two-option-dialog.component';
import { GenericTwoOptionDialogData } from '../../../models/generic-two-option-dialog-data';
import { Appointment } from '../../../models/appointment.model';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';
import { AppointmentType } from 'src/app/models/enums/appointment.enum';
import { map, concatMap } from 'rxjs';
import { getUserDetails } from '../../Functions/getUserDetails';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
})
export class AppointmentComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) public sort: MatSort;
  @Input() public roleInput: Role;
  @Output() modified: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() set tableDataSource(data: MatTableDataSource<Appointment>) {
    this.dataSource = data;
  }

  public role = Role;
  public showActionDelete: boolean;
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<Appointment>;
  private subSink: SubSink;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private appointmentService: AppointmentService
  ) {
    this.subSink = new SubSink();
    this.displayedColumns = [
      'patientName',
      'appointmentDateTime',
      'practitionerName',
      'status',
      'vaccine',
      'comments',
      'actions',
    ];
    this.dataSource = new MatTableDataSource<Appointment>();
  }

  public ngOnInit() {
    this.showActionDelete =
      this.roleInput === Role.PATIENT || this.roleInput === Role.MEDICAL_STAFF;

    const appointment =
      this.router.getCurrentNavigation()?.extras?.state?.['appointment'];
  }

  /*
   * When the component is destroyed the observables
   * in the subsink are unsubscribed to prevent memory leaks
   */
  public ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  /*
   * Emit a modify even to the parent component to refresh the table
   */
  emitModify(dialogRef: MatDialogRef<any>) {
    this.subSink.add(
      dialogRef.afterClosed().subscribe((res) => {
        this.modified.emit(true);
      })
    );
  }

  /*
   * When the view button is clicked the generic dialog is opened
   */
  public openCancelVaccinationDialog(element: Appointment): void {
    const dialogTitle = 'CANCEL APPOINTMENT';
    const dialogDescription =
      'Are you sure you would like to cancel the selected appointment (enter appoint number here or something), this action cannot be undone';
    const dialogRef = this.dialog.open(GenericTwoOptionDialogComponent, {
      panelClass: 'dialog-panel-class',
      width: '650px',
      height: '350px',
      disableClose: true,
      autoFocus: false,
      data: new GenericTwoOptionDialogData(dialogTitle, dialogDescription),
    });

    // get call back data on close
    this.subSink.add(
      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          element.type = AppointmentType.CANCELLED;
          this.subSink.add(
            this.appointmentService
              .cancelAppointment(element)
              .subscribe((declineAppointmentRes) => {
                console.log('Check', declineAppointmentRes);
              })
          );
        }
      })
    );
  }
}
