import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsPortalComponent } from './news-portal/news-portal.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';

const routes: Routes = [
  {path:'',redirectTo:'news',pathMatch:'full'},
  {path:'dashboard',component:NewsPortalComponent},
  {path:'entertainment',component:EntertainmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsPortalRoutingModule { }
