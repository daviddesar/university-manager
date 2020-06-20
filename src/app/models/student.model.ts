import { Grade } from './university.model';

export interface Student {
    studentName: string;
    studentId: string;
    school: string;
    scores: Grade;
}