import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-succes-page',
  templateUrl: './succes-page.component.html',
  styleUrls: ['./succes-page.component.css']
})
export class SuccesPageComponent implements OnInit {
  userSuccessArray:any;
  constructor(private _Router:Router) { }

  ngOnInit(): void {
    this.getuserSuccessarray();
  }
  getuserSuccessarray(){
    this.userSuccessArray=JSON.parse(localStorage.getItem("user")!)
    console.log(this.userSuccessArray)
  }
backToList(){
  this._Router.navigate(['home'])

}
}
