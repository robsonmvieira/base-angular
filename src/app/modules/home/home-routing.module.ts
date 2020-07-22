import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "../admin/login/login.component";
import {ResetPasswordComponent} from "../admin/reset-password/reset-password.component";
import {MainComponent} from "./main/main.component";
// import { ProductListComponent } from './main/product-list/product-list.component';
// import { ProductNewComponent } from './main/product-new/product-new.component';
// import { ProductEditComponent } from './main/product-edit/product-edit.component';

const routes: Routes = [
  {
  path: '', component: MainComponent,
  },
  // {
  //   path: 'products', component: ProductListComponent
  // },
  // {
  //   path: 'product/new', component: ProductNewComponent
  // },
  // {
  //   path: 'product/edit/:id', component: ProductEditComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
