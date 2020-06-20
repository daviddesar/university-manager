import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { UniversitiesTableComponent } from './university-main/university-list/universities-table/universities-table.component';
import { TypeUniTransformPipe } from './type-uni-transform.pipe';
import { UniversityMainComponent } from './university-main/university-main.component';
import { UniversitySearchComponent } from './university-main/university-list/university-search/university-search.component';
import { UniPopupComponent } from './uni-popup/uni-popup.component';
import { UniversityDetailComponent } from './university-main/university-detail/university-detail.component';
import { UniversityListComponent } from './university-main/university-list/university-list.component';
import { RouterModule } from '@angular/router';
import { ShortenInfoPipe } from './university-main/shorten-info.pipe';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [
    UniversitiesTableComponent,
    TypeUniTransformPipe,
    UniversityMainComponent,
    UniversitySearchComponent,
    UniPopupComponent,
    UniversityDetailComponent,
    UniversityListComponent,
    ShortenInfoPipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    RouterModule
  ],
  exports: [UniversityMainComponent, UniversityDetailComponent]
})
export class UniversitiesListModule { }
