import { ProductListComponent } from './product-list/product-list.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [ ProductListComponent, ProductNewComponent, ProductEditComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule {
}
