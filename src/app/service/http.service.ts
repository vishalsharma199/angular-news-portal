import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, subscribeOn, map } from 'rxjs/operators';
import { SERVER_PATHS } from '../app.constant';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }
  getUrl(url) {
    return location.protocol + url;
  }

  postData(url:any,data: any) {
    return this.http.post<any>(`${SERVER_PATHS.DEV}${url}`, data).pipe(map((res: any) => {
      return res
    }))
  }

  getData(url:any){
    return this.http.get<any>(`${SERVER_PATHS.DEV}${url}`).pipe(map((res:any)=>{
      return res;
    }))
  }

  updateData(data:any, id:number){
    return this.http.put<any>(`${SERVER_PATHS.DEV}`+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteData(id:number){
    return this.http.delete<any>(`${SERVER_PATHS.DEV}`+id).pipe(map((res:any)=>{
      return res;
    }))
  }


}
