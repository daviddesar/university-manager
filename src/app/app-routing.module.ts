import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './home/homepage/homepage.component';
import { UniversityDetailComponent } from './university-list/university-main/university-detail/university-detail.component';
import { UniversityMainComponent } from './university-list/university-main/university-main.component';
import { StudentMainComponent } from './student/student-main/student-main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'add-uni',
    pathMatch: 'full'
  },
  {
    path: 'add-uni',
    component: HomepageComponent
  },
  {
    path: 'uni-list',
    component: UniversityMainComponent,
  },
  {
    path: 'uni-list/:uniId',
    component: UniversityDetailComponent,
  },
  {
    path: 'student',
    component: StudentMainComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
