import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { ChangeTitlePipe } from './change-title.pipe';

@NgModule({
  // declarations: [ChangeTitlePipe],
  imports: [
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatStepperModule,
    MatRadioModule,
    MatNativeDateModule,
    MatToolbarModule
  ],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatStepperModule,
    MatRadioModule,
    MatNativeDateModule,
    MatToolbarModule,
    // ChangeTitlePipe
  ],
  providers: [MatDatepickerModule]
})
export class SharedMatModule { }
