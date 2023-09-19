import { Injectable } from '@angular/core';
import { loginModal } from './user-auth/login/loginModal';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { registrationModal } from './user-auth/registration/registrationModal';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private loginURL="http://50.19.24.41/api/auth/login";
  private signUpURL="http://50.19.24.41/api/auth/signup";
  constructor(private http:HttpClient) { }
  logIn(credentials:loginModal){
     const httpHeaders=new HttpHeaders({
      "client-id": "437920819fa89d19abe380073d28839c",
       "client-secret": "28649120bdf32812f433f428b15ab1a1"
     });
     return this.http.post(this.loginURL,credentials,{headers:httpHeaders});
    }
    SignUp(credentials:registrationModal){
      const httpHeaders=new HttpHeaders({
        "client-id": "437920819fa89d19abe380073d28839c",
       "client-secret": "28649120bdf32812f433f428b15ab1a1"
      });
      return this.http.post(this.signUpURL,credentials,{headers:httpHeaders});
    }

  }