import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import {PoTemplatesModule} from '@po-ui/ng-templates';
import {AdminModule} from './modules/admin/admin.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoTemplatesModule,
    RouterModule.forRoot([
      {
      path: '',
      loadChildren: () =>
        import('./modules/admin/admin.module').then(h => h.AdminModule)
    },
      {
        path: 'main/products',
        loadChildren: () => import('./modules/home/main/products/product.module')
        .then(p => p.ProductModule)
      },
      {
        path: 'main/enterprises',
        loadChildren: () => import('./modules/home/main/enterprises/enterprises.module')
        .then(p => p.EnterprisesModule)
      }
    ]),
    AdminModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
