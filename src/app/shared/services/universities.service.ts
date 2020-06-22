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
      info: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur',
      type: 'private',
      establishedDate: new Date(2002, 5, 11),
      scores: { a: 25, b: 30, c: 30 }
    },
    {
      id: 'BKU',
      name: 'ĐH Bách Khoa TPHCM',
      info: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do look even slightly believable. ',
      type: 'public',
      establishedDate: new Date(2002, 5, 11),
      scores: { a: 26, b: 24, c: 26 },
    },
    {
      id: 'HCMUS',
      name: 'ĐH Khoa Học Tự Nhiên TPHCM',
      info: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, ',
      type: 'public',
      establishedDate: new Date(2002, 5, 11),
      scores: { a: 25, b: 27, c: 25 },
    },
    {
      id: 'HCMUTE',
      name: 'ĐH Sư Phạm Kỹ Thuật TPHCM',
      info: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. ',
      type: 'private',
      establishedDate: new Date(2002, 5, 11),
      scores: { a: 27, b: 24, c: 23 },
    },
    {
      id: 'UIT',
      name: 'ĐH Công Nghệ Thông Tin TPHCM',
      info: ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      type: 'public',
      establishedDate: new Date(2002, 5, 11),
      scores: { a: 24, b: 27, c: 25 },
    },
    {
      id: 'UEH',
      name: 'ĐH Kinh Tế TPHCM',
      info: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      type: 'private',
      establishedDate: new Date(2002, 5, 11),
      scores: { a: 25, b: 23, c: 21 },
    },
    {
      id: 'UEF',
      name: 'ĐH Kinh Tế - Tài Chính TPHCM',
      info: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      type: 'private',
      establishedDate: new Date(2002, 5, 11),
      scores: { a: 22, b: 24, c: 20 },
    },
    {
      id: 'USSH',
      name: 'ĐH Khoa Học - Xã Hội Nhân Văn',
      info: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      type: 'public',
      establishedDate: new Date(2002, 5, 11),
      scores: { a: 24, b: 23, c: 26 },
    },
  ];
  universityListRender: any;

  uniIdSelectEmitter = new EventEmitter();
  universityRenderEmitter = new EventEmitter();
  constructor() {
    this.setupInitData();
  }
  private setupInitData() {
    if (localStorage.getItem('uniList') === null || JSON.parse(localStorage.getItem('uniList')).length === 0) {
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
  deleteUniversity(uniId: string) {
    const indexSelected = this.universityList.findIndex(uni => uni.id === uniId);
    this.universityList.splice(indexSelected, 1);
    this.universityListRender = this.universityList;
    this.universityRenderEmitter.emit(this.universityListRender);
    // this.updateLocalStorageData();
    this.updateLocalStorageData();
    // console.log(this.universityListRender);
  }
  getUniversity(uniId: string) {
    const indexSearch = this.universityList.findIndex(uni => uni.id === uniId.toUpperCase());
    // this.universityList.find(item => {
    //   return item.id === uniId.toUpperCase();
    // });
    return this.universityList[indexSearch];
  }
  editUniversity(newUni: University) {
    const indexSearch = this.universityList.findIndex(uni => uni.id === newUni.id);
    this.universityList[indexSearch] = newUni;
    this.updateLocalStorageData();
  }
}
