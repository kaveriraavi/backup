import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { SongmanagementComponent } from "./songmanagement/songmanagement.component";
import { EventmanagementComponent } from "./eventmanagement/eventmanagement.component";
import { BandprofileComponent } from "./bandprofile/bandprofile.component";

const routes:Routes =[
  {
  path:'',
  component:DashboardComponent,
  children:[
    {path :'songmanagement',component:SongmanagementComponent},
    {path:'eventmanagement',component:EventmanagementComponent},
    {path:'bandprofile',component:BandprofileComponent},
    {path:'', redirectTo:'/dashboard/songmanagement',pathMatch:'full'}, 
  ],
},
];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule],
})
export class DashboardRoutingModule {
  
 }
