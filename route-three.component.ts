import { Component, VERSION } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ButtonsModule } from 'ng2-bootstrap';

@Component({

  selector: 'my-app',
  templateUrl: 'route-three.component.html'
})

export class RouteThreeComponent {
  fname: string;
  fdob: Date;
  femail: string;
  fage: number;

  constructor () {
      this.fname ="rajesh";
      this.femail = '99/09/19';
  }

  onclick() {
    window.alert(this.fname);  
    console.log("email is" + this.femail);
  }
//   calculateage(){
//     if(this.fdob){
//     var milli=Date.now() -(new Date(this.fdob)).getTime();
//     this.fage=Math.floor(milli/1000/60/60/24/365);
//     }
//   }

}
