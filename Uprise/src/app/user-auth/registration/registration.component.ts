import { Component } from '@angular/core';
import { AuthorizationService } from 'src/app/authorization.service';
import { registrationModal } from './registrationModal';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
 check:boolean=false;
 registrationModal:registrationModal=new registrationModal();
 constructor( private auth:AuthorizationService){}
 onRegister(){
  if(this.check){
    this.auth.SignUp(this.registrationModal).subscribe(
      (response:any)=>{
        console.log(response.message);
      },
      (error)=>{
        console.log(error.error.error);
      }
    )
  }
 }

}
