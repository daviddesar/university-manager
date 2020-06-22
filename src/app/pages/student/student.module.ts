import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { StudentMainComponent } from './student-main/student-main.component';
import { ProfileComponent } from './student-main/profile/profile.component';
import { UniScoreTableComponent } from './student-main/uni-score-table/uni-score-table.component';
import { PassCheckPipe } from './student-main/pass-check.pipe';
import { SharedMatModule } from 'src/app/shared/shared-mat.module';





@NgModule({
  declarations: [
    StudentMainComponent,
    ProfileComponent,
    UniScoreTableComponent,
    PassCheckPipe],
  imports: [
    CommonModule,
    SharedMatModule
  ],
  exports: [StudentMainComponent]
})
export class StudentModule { }
