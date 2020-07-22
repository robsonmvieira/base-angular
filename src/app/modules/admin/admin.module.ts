import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {PoPageBlockedUserModule, PoPageChangePasswordModule, PoPageLoginModule} from "@po-ui/ng-templates";
import {
  PoButtonModule,
  PoContainerModule,
  PoDividerModule,
  PoFieldModule,
  PoI18nService,
  PoInfoModule
} from "@po-ui/ng-components";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [LoginComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PoPageLoginModule,
    PoContainerModule,
    PoInfoModule,
    PoPageBlockedUserModule,
    PoPageChangePasswordModule,
    PoDividerModule,
    PoFieldModule,
    FormsModule,
    PoButtonModule
  ],
  providers: [
  ]
})
export class AdminModule { }
