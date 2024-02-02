import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CartlistComponent } from './cartlist/cartlist.component';

const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"products",component:ProductlistComponent},
  {path:"products/:id",component:ProductdetailComponent},
  {path:"carts",component:CartlistComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
