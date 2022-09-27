import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
productShoppingCart:any;
totalPrice:any;
userArray:any=[];
fullName:any;
address:any;
creditCard:any
  constructor(private _ApiService:ApiService, private _Router:Router,private _CartService :CartService  ) { }
  ngOnInit(): void {
    this._CartService.getproductShoppingCart();
    this.getproductShoppingCart()
    this.getToltalPrice();
  }

  getproductShoppingCart(){
    this.productShoppingCart=this._CartService.getproductShoppingCart()
  }
  getToltalPrice(){
    this.totalPrice=0;
    for(let x in this.productShoppingCart){
this.totalPrice+=this.productShoppingCart[x].item.price*this.productShoppingCart[x].quantity
    }
  }
  do(){
    localStorage.setItem("cart" , JSON.stringify(this.productShoppingCart));
  }
registerForm=new FormGroup({
  fullName:new FormControl(null,[Validators.required,Validators.minLength(3)]),
  address:new FormControl(null,[Validators.required,Validators.minLength(6)]),
  creditCard:new FormControl(null,[Validators.required,Validators.minLength(16),Validators.maxLength(16),Validators.pattern(/^[0-9]*$/)]),

})
getUser(){
  if(this.totalPrice>0 && this.registerForm.valid){
  if("user" in localStorage ){
    this._ApiService.users=JSON.parse(localStorage.getItem("user")!)
  }
  
  this.userArray=[{fullName:this.fullName,address:this.address,creditCard:this.creditCard,price:this.totalPrice}]
  this._ApiService.users=this.userArray

localStorage.setItem("user" , JSON.stringify(this._ApiService.users))
  this._Router.navigate(['success'])
  }
  if(this.registerForm.invalid){
    alert("form is empty")
  }
  if(this.totalPrice==0){
    alert("cart is empty")
  }
 }

deleteProduct(i:number,q:number){
if(q==0){
  this.productShoppingCart.splice(i,1);
  localStorage.setItem("cart" , JSON.stringify(this.productShoppingCart));
  this._CartService.getproductShoppingCart();
  alert("This item removed from cart")

}

  }
  deleteProductbtn(i:number){
      this.productShoppingCart.splice(i,1);
      localStorage.setItem("cart" , JSON.stringify(this.productShoppingCart));
      this._CartService.getproductShoppingCart();
      this.getToltalPrice()
      alert("This item removed from cart")
    
}

}