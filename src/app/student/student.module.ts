import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { StudentMainComponent } from './student-main/student-main.component';
import { ProfileComponent } from './student-main/profile/profile.component';
import { UniScoreTableComponent } from './student-main/uni-score-table/uni-score-table.component';
import { PassCheckPipe } from './student-main/pass-check.pipe';





@NgModule({
  declarations: [StudentMainComponent, ProfileComponent, UniScoreTableComponent, PassCheckPipe],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule
  ],
  exports: [StudentMainComponent]
})
export class StudentModule { }
