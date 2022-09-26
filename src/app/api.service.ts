import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  cartCount=new BehaviorSubject(0);
  amountValue=new BehaviorSubject(0);

  

users:User[]=[]

  constructor(private _HttpClient :HttpClient) { 

  }
  apiLink='../assets/data.json';

  getProducts():Observable<any>{
    let resp=this._HttpClient.get(this.apiLink)
    return resp
  }

}
