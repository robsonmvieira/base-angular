import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',loadChildren: () => import('./modules/admin/admin.module').then(l => l.AdminModule)
  },
  {
    path: 'main',loadChildren: () => import('./modules/home/home.module').then(l => l.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
