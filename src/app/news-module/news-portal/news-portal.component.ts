import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { PATH } from 'src/app/app.constant';
@Component({
  selector: 'app-news-portal',
  templateUrl: './news-portal.component.html',
  styleUrls: ['./news-portal.component.scss']
})
export class NewsPortalComponent implements OnInit {

  articles:any;
  topHeading:any;
  constructor(private http:HttpService) {
    
  }
  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.http.getData(`${PATH.World_News}`).subscribe((res:any)=>{
      this.articles =res['articles']
      
      
    })
    this.http.getData(`${PATH.top_Heading}`).subscribe((res:any)=>{
      this.topHeading=res['articles']
      console.log(this.topHeading);
      
    })
  }

}
