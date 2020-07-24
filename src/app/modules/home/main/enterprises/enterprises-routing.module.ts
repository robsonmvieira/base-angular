import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EnterprisesListComponent } from './enterprises-list/enterprises-list.component';
import { EnterpriseFormComponent } from './enterprise-form/enterprise-form.component';
// import { ProductListComponent } from './product-list/product-list.component';
// import { ProductNewComponent } from './product-new/product-new.component';
// import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  {
    path: '', component: EnterprisesListComponent
  },
  {
    path: 'new', component: EnterpriseFormComponent
  },
  {
    path: '/:id', component: EnterpriseFormComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EnterprisesRoutingModule {
}
