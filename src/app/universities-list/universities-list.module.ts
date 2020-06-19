import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { UniversitiesTableComponent } from './universities-main/universities-table/universities-table.component';
import { TypeUniTransformPipe } from './type-uni-transform.pipe';
import { UniversitiesMainComponent } from './universities-main/universities-main.component';
import { UniversitySearchComponent } from './universities-main/university-search/university-search.component';
import { UniPopupComponent } from './uni-popup/uni-popup.component';

@NgModule({
  declarations: [UniversitiesTableComponent, TypeUniTransformPipe, UniversitiesMainComponent, UniversitySearchComponent, UniPopupComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatDialogModule
  ],
  exports: [UniversitiesMainComponent]
})
export class UniversitiesListModule { }
