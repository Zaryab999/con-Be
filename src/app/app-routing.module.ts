import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserloginComponent} from './components/userlogin/userlogin.component';
import {RegisterComponent} from './components/register/register.component';
const routes: Routes = [
  {path:'admin',loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:'login', component:UserloginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
