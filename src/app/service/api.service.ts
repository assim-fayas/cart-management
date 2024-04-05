import { Injectable, inject } from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient} from '@angular/common/http'
import { Product } from '../components/model/product';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
   private http:HttpClient=inject(HttpClient)
   private readonly url=environment.api

listProducts(){
  return this.http.get<Product[]>(`${this.url}/products`)
  .pipe(response=>{
    return response
  },
  catchError((error)=>{
    return throwError(()=>new error)
  })
  
  )
}



}
