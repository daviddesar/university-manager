import { Injectable } from '@angular/core';
import { University } from '../models/university.model';

@Injectable({
    providedIn: 'root'
})
export class UniversitiesService {
    universityList: University[] = [
        {
            id: 'FTU',
            name: 'ĐH Ngoại Thương TPHCM',
            info: 'Lorem ipsum dolor sit amet.',
            type: 'private',
            scores: { a: 25, b: 30, c: 30 }
        },
        {
            id: 'BKU',
            name: 'ĐH Bách Khoa TPHCM',
            info: 'Lorem ipsum dolor sit amet.',
            type: 'public',
            scores: { a: 26, b: 24, c: 26 },
        },
        {
            id: 'HCMUS',
            name: 'ĐH Khoa Học Tự Nhiên TPHCM',
            info: 'Lorem ipsum dolor sit amet.',
            type: 'public',
            scores: { a: 25, b: 27, c: 25 },
        },
        {
            id: 'HCMUTE',
            name: 'ĐH Sư Phạm Kỹ Thuật TPHCM',
            info: 'Lorem ipsum dolor sit amet.',
            type: 'private',
            scores: { a: 27, b: 24, c: 23 },
        },
        {
            id: 'UIT',
            name: 'ĐH Công Nghệ Thông Tin TPHCM',
            info: 'Lorem ipsum dolor sit amet.',
            type: 'public',
            scores: { a: 24, b: 27, c: 25 },
        },
        {
            id: 'UEH',
            name: 'ĐH Kinh Tế TPHCM',
            info: 'Lorem ipsum dolor sit amet.',
            type: 'private',
            scores: { a: 25, b: 23, c: 21 },
        },
    ];
    constructor() {
        console.log(this.universityList);
    }
    addUniversity(university: University) {
        this.universityList.push(university);
        console.log(this.universityList);
    }
}
