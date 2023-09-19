import { Component } from '@angular/core';
import { loginModal } from './loginModal';
import { AuthorizationService } from 'src/app/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 loginModal :loginModal=new loginModal();
 rememberMe : boolean=false;
 storedDetails:any;
 
 
 constructor( private authService:AuthorizationService,private router:Router){
  this.loadData();
 }

 loadData(){
   const storedData=localStorage.getItem('userData');
   if(storedData){
      this.storedDetails=JSON.parse(storedData);
      this.loginModal.email=this.storedDetails.loginDetails.email;
      this.loginModal.password=this.storedDetails.loginDetails.password;
      this.rememberMe=this.storedDetails.rememberMe;
   }
   else{
      this.storedDetails={
        loginModal:{
          email:"",
          password:"",
        },
      rememberMe:false
      }
   }
 }


 loginSubmit(){
  // console.log(this.loginModal);
  // console.log(this.rememberMe);
  const dataToStore={
    loginDetails:this.loginModal,
    rememberMe:this.rememberMe
  };
  this.authService.logIn(this.loginModal).subscribe(
    (response:any)=>{
      console.log(response.message);
      this.router.navigate(['dashboard']);
    },
    (error)=>{
      console.log(error.error.error);
    }
    );
  if(this.rememberMe){
    localStorage.setItem('userData',JSON.stringify(dataToStore));
  }
  else{
    localStorage.removeItem('userData');
  }

 }

}



  
