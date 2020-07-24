import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { NewComponent } from './new/new.component';
import { EnterprisesListComponent } from './enterprises-list/enterprises-list.component';



@NgModule({
  declarations: [FormComponent, NewComponent, EnterprisesListComponent],
  imports: [
    CommonModule
  ]
})
export class EnterprisesModule { }
