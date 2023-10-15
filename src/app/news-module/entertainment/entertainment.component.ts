import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { PATH } from 'src/app/app.constant';
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent {

  
  articles:any;
  topHeading:any;
  constructor(private http:HttpService) {
    
  }
  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.http.getData(`${PATH.entertainment_News}`).subscribe((res:any)=>{
      this.articles =res['articles']
      
      
    })
    this.http.getData(`${PATH.top_Heading}`).subscribe((res:any)=>{
      this.topHeading=res['articles']
      console.log(this.topHeading);
      
    })
  }

}
