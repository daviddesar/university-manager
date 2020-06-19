import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'add-uni',
    pathMatch: 'full'
  },
  {
    path: 'add-uni',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
