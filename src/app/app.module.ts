import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavComponent } from './nav/nav.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component'
import { FormsModule} from '@angular/forms';
import { SuccesPageComponent } from './succes-page/succes-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingleProductComponent } from './single-product/single-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    SuccesPageComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
