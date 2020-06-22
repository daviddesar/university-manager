import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedMatModule } from 'src/app/shared/shared-mat.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { StepperFormComponent } from 'src/app/components/stepper-form/stepper-form.component';

@NgModule({
  declarations: [HomepageComponent, StepperFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMatModule,
  ],
  exports: [HomepageComponent, MatDatepickerModule]
})
export class HomeModule { }
