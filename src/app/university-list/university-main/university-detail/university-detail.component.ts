import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { University } from 'src/app/models/university.model';
import { UniversitiesService } from 'src/app/services/universities.service';
import { MatDialog } from '@angular/material/dialog';
import { UniPopupComponent } from '../../uni-popup/uni-popup.component';

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
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    /* tslint:disable:no-string-literal */
    this.uniId = this.activatedRoute.snapshot.params['uniId'];
    this.university = this.universitiesService.getUniversity(this.uniId);
  }
  onGoBack() {
    this.location.back();
  }
  openDialog(uniId: string) {
    // tslint:disable-next-line:object-literal-key-quotes
    this.dialog.open(UniPopupComponent, {data: {'uniId': uniId}});
  }

}
