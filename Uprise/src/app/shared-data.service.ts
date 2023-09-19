import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  userData:any;

  constructor() { }
  setData(data:any){
    this.userData=data;
  }
  getData(){
    return this.userData;
  }
}
