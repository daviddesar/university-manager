import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// import { MatTableModule } from '@angular/material/table';
// import { MatButtonModule } from '@angular/material/button';
// import { MatInputModule } from '@angular/material/input';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatCardModule } from '@angular/material/card';

import { UniversitiesTableComponent } from './university-main/university-list/universities-table/universities-table.component';
import { TypeUniTransformPipe } from './type-uni-transform.pipe';
import { UniversityMainComponent } from './university-main/university-main.component';
import { UniversityDetailComponent } from './university-main/university-detail/university-detail.component';
import { UniversityListComponent } from './university-main/university-list/university-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ShortenInfoPipe } from './university-main/shorten-info.pipe';
import { SharedMatModule } from 'src/app/shared/shared-mat.module';
import { DateTransformPipe } from './university-main/date-transform.pipe';
import { StepperFormComponent } from 'src/app/components/stepper-form/stepper-form.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UniversityMainComponent
      },
      {
        path: ':uniId',
        component: UniversityDetailComponent
      },
      {
        path: ':uniId/edit',
        component: StepperFormComponent,
        data: {
          type: 'edit'
        }
      },
      // {
      //   path: 'a',
      //   component: UniversityMainComponent,
      //   data: {
      //     text: 'a',
      //     mode: 'add'
      //   }
      // },
      // {
      //   path: 'b',
      //   component: UniversityMainComponent,
      //   data: {
      //     text: 'b'
      //   }
      // }
    ]
  }
];

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [
    UniversitiesTableComponent,
    TypeUniTransformPipe,
    UniversityMainComponent,
    UniversityDetailComponent,
    UniversityListComponent,
    ShortenInfoPipe,
    DateTransformPipe
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    RouterModule,
    SharedMatModule
  ],
  exports: [UniversityMainComponent, UniversityDetailComponent]
})
export class UniversitiesListModule { }
