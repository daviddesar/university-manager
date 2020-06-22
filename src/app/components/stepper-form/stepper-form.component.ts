import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { University } from 'src/app/shared/models/university.model';
import { Router, ActivatedRoute } from '@angular/router';
import { UniversitiesService } from 'src/app/shared/services/universities.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UniversityDetailComponent } from 'src/app/pages/university-list/university-main/university-detail/university-detail.component';

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.scss']
})
export class StepperFormComponent implements OnInit {
  myForm: FormGroup;
  step1ButtonDisabled = true;
  step2ButtonDisabled = true;
  formType: string;

  constructor(
    private router: Router,
    private universitiesService: UniversitiesService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formType = this.activatedRoute.snapshot.data.type;
    this.initFormControl();
    // console.log(this.myForm.get('basicInfo').value);
  }
  initFormControl() {
    if (this.formType === 'add') {
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
        this.step1ButtonDisabled = basicInfoChanges === 'INVALID' ? true : false;
      });
      this.myForm.get('scores').statusChanges.subscribe(scoresChanges => {
        this.step2ButtonDisabled = scoresChanges === 'INVALID' ? true : false;
      });
    }
    else {
      // tslint:disable-next-line:no-string-literal
      const uniId = this.activatedRoute.snapshot.params['uniId'];
      const uni = this.universitiesService.getUniversity(uniId);
      this.myForm = new FormGroup({
        basicInfo: new FormGroup({
          uniName: new FormControl(uni.name, Validators.required),
          uniId: new FormControl({value: uni.id, disabled: true}, Validators.required),
          uniInfo: new FormControl(uni.info, Validators.required),
          uniType: new FormControl(uni.type, Validators.required),
          uniEstablishedDate: new FormControl(uni.establishedDate, Validators.required)
        }),
        scores: new FormGroup({
          groupA: new FormControl(uni.scores.a, [Validators.required]),
          groupB: new FormControl(uni.scores.b, [Validators.required]),
          groupC: new FormControl(uni.scores.c, [Validators.required]),
        })
      });
      this.step1ButtonDisabled = false;
      this.myForm.get('scores').statusChanges.subscribe(scoresChanges => {
        this.step2ButtonDisabled = scoresChanges === 'INVALID' ? true : false;
      });
    }
  }

  // initFormControl(uni?: any) {
  //   uni = uni && this.formType === 'edit' ? uni : {};

  //   // tslint:disable-next-line:no-string-literal
  //   // const uniId = this.activatedRoute.snapshot.params['uniId'];
  //   // const uni = this.universitiesService.getUniversity(uniId);
  //   this.myForm = new FormGroup({
  //     basicInfo: new FormGroup({
  //       uniName: new FormControl(uni.name, Validators.required),
  //       uniId: new FormControl({ value: uni.id, disabled: true }, Validators.required),
  //       uniInfo: new FormControl(uni.info, Validators.required),
  //       uniType: new FormControl(uni.type, Validators.required),
  //       uniEstablishedDate: new FormControl(uni.establishedDate, Validators.required)
  //     }),
  //     scores: new FormGroup({
  //       groupA: new FormControl(uni.scores.a, [Validators.required]),
  //       groupB: new FormControl(uni.scores.b, [Validators.required]),
  //       groupC: new FormControl(uni.scores.c, [Validators.required]),
  //     })
  //   });
  //   this.step1ButtonDisabled = false;
  //   this.myForm.get('scores').statusChanges.subscribe(scoresChanges => {
  //     this.step2ButtonDisabled = scoresChanges === 'INVALID' ? true : false;
  //   });

  // }

  onSubmit() {
    const { uniName, uniInfo, uniType, uniEstablishedDate } = this.myForm.get('basicInfo').value;
    const uniId = this.activatedRoute.snapshot.params.uniId.toUpperCase();
    const { groupA, groupB, groupC } = this.myForm.get('scores').value;
    // tslint:disable-next-line:max-line-length
    const newUni: University = {
      id: uniId, info: uniInfo, name: uniName, type: uniType, scores: {
        a: parseFloat(groupA),
        b: parseFloat(groupB),
        c: parseFloat(groupC)
      },
      establishedDate: uniEstablishedDate
    };
    if (this.formType === 'add') {
      this.universitiesService.addUniversity(newUni);
      this.snackBar.open('Thêm thành công!', null, { duration: 3000 });
    }
    else {
      this.universitiesService.editUniversity(newUni);
      this.snackBar.open('Thay đổi thành công!', null, { duration: 3000 });
    }
    this.myForm.reset();
    this.router.navigate(['/', 'uni-list']);
  }
}
