import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages';

const routes: Routes = [
  {path:'', redirectTo:'news/dashboard',pathMatch:'full'},

  {
    path: '',
    component: IndexComponent,
    children: [
      
      {
        path: 'news',
        loadChildren: () =>
          import('./news-module/news-portal.module').then((m) => m.NewsPortalModule),
      },
    
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
