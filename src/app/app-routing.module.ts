import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/home/homepage/homepage.component';
import { StudentMainComponent } from './pages/student/student-main/student-main.component';
import { StepperFormComponent } from './components/stepper-form/stepper-form.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'add-uni',
    pathMatch: 'full'
  },
  {
    path: 'add-uni',
    component: StepperFormComponent,
    data: {
      type: 'add'
    }
  },
  {
    path: 'uni-list',
    // component: UniversityMainComponent,
    loadChildren: () => import('./pages/university-list/university-list.module').then(m => m.UniversitiesListModule)
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
