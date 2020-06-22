import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/components/popup/popup.component';

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.scss']
})
export class StudentMainComponent implements OnInit {
  selected: any;
  passinData: any;
  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
  onEditSelect() {

  }
  onClick() {
    this.passinData = {
      isDelete: false,
      uniId: 'FTU'
    };
    const dialogRef = this.dialog.open(PopupComponent, {
      data: this.passinData
    });
    dialogRef.afterClosed().subscribe(change => {
      console.log(change);
    });

    // this.CommonPopupService.openWarningPopup(msg, description).subcribe():
  }
}
