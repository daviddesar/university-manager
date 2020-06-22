import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { UniversitiesService } from '../../../../../shared/services/universities.service';
import { University } from '../../../../../shared/models/university.model';
import { Router } from '@angular/router';
import { PopupComponent } from 'src/app/components/popup/popup.component';

@Component({
  selector: 'app-universities-table',
  templateUrl: './universities-table.component.html',
  styleUrls: ['./universities-table.component.scss']
})

export class UniversitiesTableComponent implements OnInit {


  displayedColumns: string[] = ['uniId', 'uniName', 'uniInfo', 'uniType', 'editOrDelete'];
  uniDataList: any;
  uniSearch: string;
  constructor(
    private universitiesService: UniversitiesService, public dialog: MatDialog,
    private router: Router,

    ) { }

  ngOnInit(): void {
    this.uniDataList = this.universitiesService.universityListRender;
  }
  onDeleteUni(uniId: string) {
    // tslint:disable-next-line:object-literal-key-quotes
    const passingData = {
      // tslint:disable-next-line:object-literal-key-quotes
      'uniId': uniId,
      isDelete: false
    };
    const diaRef = this.dialog.open(PopupComponent, { data: passingData });
    diaRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.universitiesService.deleteUniversity(uniId);
      }
      else {
        return;
      }
    });
  }
  onSelectUni(uniId: string) {
    this.router.navigate(['/uni-list', uniId.toLowerCase()]);
  }
  onSearchUni() {
    if (this.uniSearch === '') {
      this.uniDataList = this.universitiesService.universityList;
      return;
    }
    const searchResult = this.universitiesService.getUniversity(this.uniSearch);
    this.uniDataList = [];
    this.uniDataList[0] = searchResult;
  }

}
