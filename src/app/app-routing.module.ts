import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search/search.component';
import { AppErrorComponent } from './app-error.component';


// Routing in the application
const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  { path: 'search', component: SearchComponent },
  { path: 'featured', loadChildren: './featured/featured.module#FeaturedModule'},
  {
    path: '**',
    component: AppErrorComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
