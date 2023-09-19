import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
  constructor(private userData:SharedDataService) {}
  ngOnInit(): void {
    
  }
  user:any=this.userData.getData();

}
