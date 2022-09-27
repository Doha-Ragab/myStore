import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  itemDetailsArray:any;
  cartArray:any=[];
  amountValue:any=1;
  cartCount:any;

  constructor(private _Router:Router, private _ApiService: ApiService) { }

  ngOnInit(): void {
    this.getItemDetails();

  }
  getItemDetails(){

    if("product" in localStorage){
      this.itemDetailsArray=JSON.parse(localStorage.getItem("product")!)
      // console.log(this.itemDetailsArray)
    }
  }

  routetohome(){
     this._Router.navigate(['home'])
  } 

 arr:any
AddToCart(item:any,quantity:any){ 

  if('cart' in localStorage){
  
    this.cartArray=JSON.parse(localStorage.getItem('cart')!)
    
    let exist=this.cartArray.find((x:any)=>x.item.id==item.id )
    if(exist){
      alert("Product is already in your cart")

    }
    else{
      // quantity=this.amountValue
      // item.quantity=quantity;
      item=({item,quantity:this.amountValue})
      this.cartArray.push(item)

     
      localStorage.setItem("cart" , JSON.stringify(this.cartArray))
      alert("Product added in cart")
    }
  }
  else{
    // quantity={quantity:this.amountValue}
    // item.quantity=quantity;
    item=({item,quantity:this.amountValue})

    this.cartArray.push(item)
// this.cartCount=this._ApiService.cartCount.value+quantity.quantity
        // this._ApiService.cartCount.next(this.cartCount)

    localStorage.setItem("cart" , JSON.stringify(this.cartArray))
    alert("Product added in cart")

  }

// console.log(this.cartArray)

}

selectamount(value:any){
this.amountValue=value;
// console.log(this.amountValue)
}

}
