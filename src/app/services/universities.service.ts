import { Injectable, EventEmitter } from '@angular/core';
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
    {
      id: 'UEF',
      name: 'ĐH Kinh Tế - Tài Chính TPHCM',
      info: 'Lorem ipsum dolor sit amet.',
      type: 'private',
      scores: { a: 22, b: 24, c: 20 },
    },
    {
      id: 'USSH',
      name: 'ĐH Khoa Học - Xã Hội Nhân Văn',
      info: 'Lorem ipsum dolor sit amet.',
      type: 'public',
      scores: { a: 24, b: 23, c: 26 },
    },
  ];
  universityListRender: any;
  uniIdSelected = '';

  uniIdSelectEmitter = new EventEmitter();
  universityRenderEmitter = new EventEmitter();
  constructor() {
    this.setupInitData();
  }
  setupInitData() {
    if (localStorage.getItem('uniList') === null) {
      const jsonifiedList = JSON.stringify(this.universityList);
      localStorage.setItem('uniList', jsonifiedList);
    }
    else {
      const uniListLC = JSON.parse(localStorage.getItem('uniList'));
      // console.log(uniListLC);
      this.universityList = [...uniListLC];
      // console.log(this.universityList);
    }
    this.universityListRender = this.universityList;
  }
  updateLocalStorageData() {
    const jsonifiedList = JSON.stringify(this.universityList);
    localStorage.setItem('uniList', jsonifiedList);
  }
  addUniversity(university: University) {
    this.universityList.push(university);
    this.updateLocalStorageData();
  }
  searchUniversity(uniId: string) {
    const result = [];
    if (uniId === '') {
      this.universityListRender = [...this.universityList];
      this.universityRenderEmitter.emit(this.universityListRender);
      return;
    }
    const indexSearch = this.universityList.findIndex(uni => uni.id === uniId);
    if (indexSearch !== -1) {
      result.push(this.universityList[indexSearch]);
      this.universityListRender = [...result];
      this.universityRenderEmitter.emit(this.universityListRender);
      return;
    }
    this.universityListRender = [];
    this.universityRenderEmitter.emit(this.universityListRender);
    return;
  }
  deleteUniversity() {
    const indexSelected = this.universityList.findIndex(uni => uni.id === this.uniIdSelected);
    this.universityList.splice(indexSelected, 1);
    this.universityListRender = this.universityList;
    this.universityRenderEmitter.emit(this.universityListRender);
    // this.updateLocalStorageData();
    this.updateLocalStorageData();
    // console.log(this.universityListRender);
  }
  selectUniId(uniId: string) {
    this.uniIdSelected = uniId;
    // this.uniIdSelectEmitter.emit(this.uniIdSelected);
  }
}
