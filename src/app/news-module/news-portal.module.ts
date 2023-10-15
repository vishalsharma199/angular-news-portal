import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsPortalRoutingModule } from './news-portal-routing.module';
import { NewsPortalComponent } from './news-portal/news-portal.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';


@NgModule({
  declarations: [
    NewsPortalComponent,
    EntertainmentComponent
  ],
  imports: [
    CommonModule,
    NewsPortalRoutingModule
  ]
})
export class NewsPortalModule { }
