import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

// 3rd library

import { University } from 'src/app/models/university.model';
import { UniversitiesService } from 'src/app/services/universities.service';
// service A
// service B

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  // @input() @output()
  // viewchild()

  myForm: FormGroup;
  uniTypeSelected: string;
  // uniTypes = ['private', 'public'];

  basicInfoButtonDisabled = true;
  scoresButtonDisabled = true;

  constructor(
    private universitiesService: UniversitiesService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
  }
  openSnackBar() {
    this.snackBar.open('Thêm thành công!', null, { duration: 5000 });
  }
  ngOnInit(): void {
    this.initFormControl();
  }

  initFormControl() {
    this.myForm = new FormGroup({
      basicInfo: new FormGroup({
        uniName: new FormControl(null, Validators.required),
        uniId: new FormControl(null, Validators.required),
        uniInfo: new FormControl(null, Validators.required),
        uniType: new FormControl(null, Validators.required),
        uniEstablishedDate: new FormControl(null, Validators.required)
      }),
      scores: new FormGroup({
        groupA: new FormControl(null, [Validators.required]),
        groupB: new FormControl(null, [Validators.required]),
        groupC: new FormControl(null, [Validators.required]),
      })
    });
    this.myForm.get('basicInfo').statusChanges.subscribe(basicInfoChanges => {
      this.basicInfoButtonDisabled = basicInfoChanges === 'INVALID' ? true : false;
    });
    this.myForm.get('scores').statusChanges.subscribe(scoresChanges => {
      this.scoresButtonDisabled = scoresChanges === 'INVALID' ? true : false;
    });
  }

  onSubmit() {
    const { uniName, uniId, uniInfo, uniType, uniEstablishedDate } = this.myForm.get('basicInfo').value;
    const { groupA, groupB, groupC } = this.myForm.get('scores').value;
    // tslint:disable-next-line:max-line-length
    const newUni: University = {
      id: uniId, info: uniInfo, name: uniName, type: uniType, scores: {
        a: parseFloat(groupA),
        b: parseFloat(groupB),
        c: parseFloat(groupC)
      }
    };
    this.universitiesService.addUniversity(newUni);
    this.myForm.reset();
    this.snackBar.open('Thêm thành công!', null, { duration: 3000 });
    this.router.navigate(['/', 'uni-list']);
  }
}
