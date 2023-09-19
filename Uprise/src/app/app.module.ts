import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { LoginComponent } from './user-auth/login/login.component';
import { RegistrationComponent } from './user-auth/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { MainContentComponent } from './dashboard/main-content/main-content.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SongmanagementComponent } from './dashboard/songmanagement/songmanagement.component';
import { EventmanagementComponent } from './dashboard/eventmanagement/eventmanagement.component';
import { BandprofileComponent } from './dashboard/bandprofile/bandprofile.component';




@NgModule({
  declarations: [
    AppComponent,
    UserAuthComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    HeaderComponent,
    NavbarComponent,
    MainContentComponent,
    SongmanagementComponent,
    EventmanagementComponent,
    BandprofileComponent,
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
