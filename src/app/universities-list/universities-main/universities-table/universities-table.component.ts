import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { UniversitiesService } from 'src/app/services/universities.service';
import { University } from '../../../models/university.model';
import { UniPopupComponent } from '../../uni-popup/uni-popup.component';

@Component({
  selector: 'app-universities-table',
  templateUrl: './universities-table.component.html',
  styleUrls: ['./universities-table.component.scss']
})

export class UniversitiesTableComponent implements OnInit {


  displayedColumns: string[] = ['uniId', 'uniName', 'uniInfo', 'uniType', 'editOrDelete'];
  uniDataList: University[];

  constructor(private universitiesService: UniversitiesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.uniDataList = this.universitiesService.universityListRender;
    this.universitiesService.universityRenderEmitter.subscribe(newUniList => {
      this.uniDataList = [...newUniList];
    });
  }
  openDialog(uniId: string) {
    this.universitiesService.selectUniId(uniId);
    this.dialog.open(UniPopupComponent);
  }

}
