import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user-auth/login/login.component';
import { RegistrationComponent } from './user-auth/registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path :'',component:LoginComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent  },
  {path:'registration',component:RegistrationComponent},
  {path:'dashboard',loadChildren:()=>import('./dashboard/dashboard-module.module').then((m)=>m.DashboardModuleModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
