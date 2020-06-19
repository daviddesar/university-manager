import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomepageComponent } from './home/homepage/homepage.component';
import { UniversitiesListModule } from './universities-list/universities-list.module';
import { HomepageComponent } from './home/homepage/homepage.component';
import { UniversitiesMainComponent } from './universities-list/universities-main/universities-main.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'add-uni',
    pathMatch: 'full'
  },
  {
    path: 'add-uni',
    component: HomepageComponent
  },
  {
    path: 'uni-list',
    component: UniversitiesMainComponent,
  },
  // {
  //   path: 'add-uni',
  //   component: HomepageComponent,
  //   data: {
  //     mode: 'add-new'
  //   }
  // },
  // {
  //   path: 'edit-uni',
  //   component: HomepageComponent,
  //   data: {
  //     mode: 'edit'
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
