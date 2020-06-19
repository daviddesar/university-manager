import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { University } from 'src/app/models/university.model';
import { UniversitiesService } from 'src/app/services/universities.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  myForm: FormGroup;
  uniTypeSelected: string;
  // uniTypes = ['private', 'public'];

  basicInfoButtonDisabled = true;
  scoresButtonDisabled = true;

  constructor(private universitiesService: UniversitiesService) { }
  ngOnInit(): void {
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
    // console.log(this.myForm.get('basicInfo').value);
    // console.log(this.myForm.get('basicInfo').value.uniEstablishedDate);
    // console.log(this.myForm.get('scores').value);
    const { uniName, uniId, uniInfo, uniType, uniEstablishedDate } = this.myForm.get('basicInfo').value;
    const { groupA, groupB, groupC } = this.myForm.get('scores').value;
    // tslint:disable-next-line:max-line-length
    const newUni: University = {id: uniId, info: uniInfo, name: uniName, type: uniType, scores: {
      a: parseFloat(groupA),
      b: parseFloat(groupB),
      c: parseFloat(groupC)
    }};
    console.log(newUni);
  }
}
