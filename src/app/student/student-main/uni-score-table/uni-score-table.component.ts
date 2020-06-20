// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-uni-score-table',
//   templateUrl: './uni-score-table.component.html',
//   styleUrls: ['./uni-score-table.component.scss']
// })
// export class UniScoreTableComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import {Component, OnInit} from '@angular/core';
import { UniversitiesService } from 'src/app/services/universities.service';
import { University } from 'src/app/models/university.model';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student.model';


@Component({
  selector: 'app-uni-score-table',
  templateUrl: './uni-score-table.component.html',
  styleUrls: ['./uni-score-table.component.scss']
})
export class UniScoreTableComponent implements OnInit {
  displayedColumns: string[] = ['uniId', 'uniName', 'groupA', 'groupB', 'groupC'];
  uniList: University[];
  student: Student;
  constructor(
    private universitiesService: UniversitiesService,
    private studentService: StudentService
  ) {}
  ngOnInit() {
    this.uniList = this.universitiesService.universityList;
    this.student = this.studentService.student;
  }
}
