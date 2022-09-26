import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SuccesPageComponent } from './succes-page/succes-page.component';

const routes: Routes = [
  {path:'home', component:ProductListComponent},
  {path:'productdetails',component:ProductDetailsComponent },
  {path:'cart',component:ShoppingCartComponent},
  {path:'success',component:SuccesPageComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
