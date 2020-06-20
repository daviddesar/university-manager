import { Injectable, EventEmitter } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    student: Student = {
        studentName: 'Nguyen Quan',
        school: 'THPT Lê Quý Đôn',
        scores: {
            a: 25,
            b: 24,
            c: 24
        },
        studentId: '214654'
    };
}