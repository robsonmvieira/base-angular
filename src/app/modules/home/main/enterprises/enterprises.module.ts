import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { EnterprisesListComponent } from './enterprises-list/enterprises-list.component';
import { EnterprisesRoutingModule } from './enterprises-routing.module';
import { EnterpriseFormComponent } from './enterprise-form/enterprise-form.component';



@NgModule({
  declarations: [EnterpriseFormComponent,  EnterprisesListComponent],
  imports: [
    CommonModule,
    EnterprisesRoutingModule
  ]
})
export class EnterprisesModule { }
