import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  getproductShoppingCart(){
    let productShoppingCart=JSON.parse(localStorage.getItem("cart")!)
    return productShoppingCart;
  }
}
