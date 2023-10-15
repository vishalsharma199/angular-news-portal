import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  
  isCollapsed:boolean=true;
  isBlue:boolean=false;
  constructor() { } 

  ngOnInit(): void {
  }
  collapsed(itm:any){
    console.log(itm);
    
    itm=='collapsed'?this.isCollapsed=true:this.isCollapsed=false;
 
}

@HostListener('document:scroll')
scrollTop(){
  if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
    console.log('red');
    this.isBlue =true
  }else{
    console.log('blue');
    this.isBlue = false;
    
  }
}
}
