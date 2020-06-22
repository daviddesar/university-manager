import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PopupData } from 'src/app/shared/models/popup-data.model';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialogRef: MatDialogRef<PopupComponent>,
  ) { }

  ngOnInit(): void {
  }
  onCancel() {
    this.dialogRef.close();
  }
  onDeleteUni() {
    this.dialogData.isDelete = true;
    this.dialogRef.close(this.dialogData.isDelete);
  }
}
