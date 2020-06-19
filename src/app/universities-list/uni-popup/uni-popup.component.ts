import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UniversitiesService } from 'src/app/services/universities.service';

@Component({
  selector: 'app-uni-popup',
  templateUrl: './uni-popup.component.html',
  styleUrls: ['./uni-popup.component.scss']
})
export class UniPopupComponent implements OnInit {

  constructor(public dialog: MatDialog, private universitiesService: UniversitiesService) { }


  ngOnInit(): void {
  }
  onCancelDelete() {
    this.dialog.closeAll();
  }
  onDeleteUni() {
    this.universitiesService.deleteUniversity();
    this.dialog.closeAll();
  }
}
