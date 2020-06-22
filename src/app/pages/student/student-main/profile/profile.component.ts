import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/models/student.model';
import { StudentService } from 'src/app/shared/services/student.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  student: Student;
  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.student = this.studentService.student;
  }

}
