import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { University } from '../../../../shared/models/university.model';
import {UniversitiesService} from '../../../../shared/services/universities.service';
import { PopupComponent } from 'src/app/components/popup/popup.component';


@Component({
  selector: 'app-university-detail',
  templateUrl: './university-detail.component.html',
  styleUrls: ['./university-detail.component.scss']
})
export class UniversityDetailComponent implements OnInit {
  uniId: string;
  university: University;
  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private universitiesService: UniversitiesService,
    private dialog: MatDialog,
    private router: Router
    ) { }

  ngOnInit(): void {
    /* tslint:disable:no-string-literal */
    this.uniId = this.activatedRoute.snapshot.params['uniId'];
    this.university = this.universitiesService.getUniversity(this.uniId);
  }
  onGoBack() {
    this.location.back();
  }
  onDeleteUni(uniId: string) {
    const passingData = {
      isDelete: false,
      // tslint:disable-next-line:object-literal-key-quotes
      'uniId': uniId
    };
    // tslint:disable-next-line:object-literal-key-quotes
    const diaRef = this.dialog.open(PopupComponent, {data: passingData});

    diaRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.universitiesService.deleteUniversity(uniId);
      }
      else {
        return;
      }
    });
  }
  onGotoEdit() {
    this.router.navigate([this.university.id.toLowerCase(), 'edit']);
  }
}
