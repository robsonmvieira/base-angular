import { ProductListComponent } from "./product-list/product-list.component";
import { ProductNewComponent } from "./product-new/product-new.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductRoutingModule } from "./product-routing.module";
import { PoTableModule } from "@po-ui/ng-components";
import { PoDynamicModule } from "@po-ui/ng-components";
import { PoButtonModule } from "@po-ui/ng-components";
import { PoGridModule } from "@po-ui/ng-components";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductNewComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    PoTableModule,
    PoDynamicModule,
    PoButtonModule,
    PoGridModule,
  ],
})
export class ProductModule {}
