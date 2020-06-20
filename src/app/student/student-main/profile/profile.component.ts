import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

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
