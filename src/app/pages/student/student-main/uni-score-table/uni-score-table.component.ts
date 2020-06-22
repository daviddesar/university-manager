import {Component, OnInit} from '@angular/core';
import { University } from 'src/app/shared/models/university.model';
import { Student } from 'src/app/shared/models/student.model';
import { UniversitiesService } from 'src/app/shared/services/universities.service';
import { StudentService } from 'src/app/shared/services/student.service';



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
