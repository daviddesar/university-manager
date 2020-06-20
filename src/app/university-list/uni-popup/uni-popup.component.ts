import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

import { UniversitiesService } from 'src/app/services/universities.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uni-popup',
  templateUrl: './uni-popup.component.html',
  styleUrls: ['./uni-popup.component.scss']
})
export class UniPopupComponent implements OnInit {
  uniId: string;
  constructor(
    public dialog: MatDialog,
    private universitiesService: UniversitiesService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
    ) { }


  ngOnInit(): void {
    this.uniId = this.data.uniId;
  }
  onCancelDelete() {
    this.dialog.closeAll();
  }
  onDeleteUni() {
    this.universitiesService.deleteUniversity(this.data.uniId);
    this.router.navigate(['/uni-list']);
    this.dialog.closeAll();
  }
}
