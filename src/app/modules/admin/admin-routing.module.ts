import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";

const routes: Routes = [{
  path: '', component: LoginComponent,
},
  {
    path: 'reset-senha', component: ResetPasswordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
