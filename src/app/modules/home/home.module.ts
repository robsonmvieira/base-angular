import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {MainComponent} from './main/main.component';
import {
  PoBreadcrumbModule, PoButtonModule, PoDividerModule, PoDynamicModule, PoInfoModule,
  PoMenuModule,
  PoMenuPanelModule, PoModalModule,
  PoNavbarModule,
  PoPageModule, PoTableModule, PoTabsModule,
  PoToolbarModule
} from "@po-ui/ng-components";
// import { ProductListComponent } from './main/product-list/product-list.component';
// import { ProductNewComponent } from './main/product-new/product-new.component';
// import { ProductEditComponent } from './main/product-edit/product-edit.component';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PoToolbarModule,
    PoMenuPanelModule,
    PoPageModule,
    PoNavbarModule,
    PoMenuModule,
    PoBreadcrumbModule,
    PoTabsModule,
    PoDividerModule,
    PoTableModule,
    PoInfoModule,
    PoButtonModule,
    PoModalModule,
    PoDynamicModule
  ]
})
export class HomeModule {
}
