import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private _ApiService: ApiService ,private _Router:Router) { }
productsarray:any;
productDetailsArray:any;
cartArray:any=[];
  amountValue:any=1;
  cartCount:any;

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct(){
    this._ApiService.getProducts().subscribe(x=>{
      this.productsarray=x;
      
    })
  }
  
  getProductDetails(id:any){
    this._Router.navigate(['productdetails'])
   this.getAllProduct();
  this.productDetailsArray=this.productsarray.filter((i:any)=>i.id==id)
  console.log(this.productDetailsArray)
  
    localStorage.setItem("product" , JSON.stringify(this.productDetailsArray))
  

  }
  AddToCart(event:any){ 
    if('cart' in localStorage){
    
      this.cartArray=JSON.parse(localStorage.getItem('cart')!)
      let exist=this.cartArray.find((x:any)=>x.item.id==event.item.id)
      if(exist){
        alert("Product is already in your cart")
  
      }
      else{
        // quantity={quantity:this.amountValue}
        // event.quantity=quantity;
        this.cartArray.push(event)
        // this.cartCount=this._ApiService.cartCount.value+quantity.quantity
        this._ApiService.cartCount.next(this.cartCount)
        localStorage.setItem("cart" , JSON.stringify(this.cartArray))
        alert("Product added in cart")

      }
    }
    else{
      // quantity={quantity:this.amountValue}
      // event.quantity=quantity;
      this.cartArray.push(event)
      // this.cartCount=this._ApiService.cartCount.value+quantity.quantity
      this._ApiService.cartCount.next(this.cartCount)
      localStorage.setItem("cart" , JSON.stringify(this.cartArray))
      alert("Product added in cart")

    }
  
  console.log(this.cartArray)
  
  }
  selectamount(value:any){
    
  this.amountValue=value;
  console.log(this.amountValue)
  
  }
  
}
