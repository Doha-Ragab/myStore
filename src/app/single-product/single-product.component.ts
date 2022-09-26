import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
@Input() data:any={}
@Output() item=new EventEmitter()

 
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
  // AddToCart(item:any,quantity:any){ 
  //   if('cart' in localStorage){
    
  //     this.cartArray=JSON.parse(localStorage.getItem('cart')!)
  //     let exist=this.cartArray.find((x:any)=>x.id==item.id)
  //     if(exist){
  //       alert("Product is already in your cart")
  
  //     }
  //     else{
  //       quantity={quantity:this.amountValue}
  //       item.quantity=quantity;
  //       this.cartArray.push(item)
  //       this.cartCount=this._ApiService.cartCount.value+quantity.quantity
  //       this._ApiService.cartCount.next(this.cartCount)
  //       localStorage.setItem("cart" , JSON.stringify(this.cartArray))
  //       alert("Product added in cart")

  //     }
  //   }
  //   else{
  //     quantity={quantity:this.amountValue}
  //     item.quantity=quantity;
  //     this.cartArray.push(item)
  //     this.cartCount=this._ApiService.cartCount.value+quantity.quantity
  //     this._ApiService.cartCount.next(this.cartCount)
  //     localStorage.setItem("cart" , JSON.stringify(this.cartArray))
  //     alert("Product added in cart")

  //   }
  
  // console.log(this.cartArray)
  
  // }
  selectamount(value:any){
    
  this.amountValue=value;
  
  }
  add(){
    this.item.emit({item:this.data,quantity:this.amountValue});

  }
 
}