import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PopupComponent } from './components/popup/popup.component';
import { HomeModule } from './pages/home/home.module';
import { UniversitiesListModule } from './pages/university-list/university-list.module';
import { StudentModule } from './pages/student/student.module';
import { SharedMatModule } from './shared/shared-mat.module';
import { CommonModule } from '@angular/common';
import { TitleChangePipe } from './title-change.pipe';
import { ChangeTitlePipe } from './shared/change-title.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopupComponent,
    ChangeTitlePipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    ReactiveFormsModule,
    UniversitiesListModule,
    StudentModule,
    SharedMatModule
  ],
  providers: [MatDatepickerModule, ChangeTitlePipe],
  exports: [ChangeTitlePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
