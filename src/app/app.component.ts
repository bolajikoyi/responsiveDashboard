import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { angularMath } from 'angular-ts-math';
import { DataService } from './data.service';
import { ShelvingCutService } from './formulars/shelving-cut.service';
import { Iir2ndOrderConjCmplxService } from './formulars/iir-2nd-order-conj-cmplx.service';
import { Action } from 'rxjs/internal/scheduler/Action';






declare var numeric: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  
  
  NFFT: number;
  fs: number;
  s_ls: Array<number>;
  S: any;
  S_mag: Array<number>;
  f_vec: Array<number>;
  EQ: any;

  // Shelving HF cut variables
  fc: number;
  G: number;
  eq: Array<number>;
  eq_CAP: number;
  EQ_mag: number;

  // Second Order Controller variables
  fp :number = 200;
  fz = 400;
  cp = 0.99486;
  cz = 0.91985;
  g = 1;

  // global impulse
  imp: any;
  W1: any;
  W1_mag: any;
  W1_S: any;
  H1: any;
  H1_Mag: any;

  
  isGreaterThanApp:number;

  isItGreaterThanAmp: boolean;
  

  A:number[]= [75, 62, 93, 81, 70, 33, 65, 88, 102, 97];

  // slider variables

  max_eq_fcut = 2000;
  min_eq_fcut = 20;
  value_eq_fcut = 700;

  max_w1_g = 10;
  min_w1_g = 1;
  value_w1_g = 1;

  max_W_m = 50;
  min_W_m = 20;
  value_W_m = 20;
  step_min_W_m = 3;

  max_nyquistRadius = 1;
  min_nyquistRadius = 0.1;
  value_nyquistRadius = 0.3;
  step_nyquistRadius = 0.1;

  // polar plot
  magnitudeOfH1: any;
  phaseOfH1: any;
  isInstability:boolean;
  // draggable
  draggable = false;
  maxAmplification:number=100;
  
  constructor(private facebookService: FacebookService, private _DataService: DataService, private _ShelvingCutService: ShelvingCutService,
    private _Iir2ndOrderConjCmplxService: Iir2ndOrderConjCmplxService) { } 
 ngOnInit(): void {
    
}

 

/* fcut_update (event: any) {
  if (event.value !== undefined) {
    this.fc = event.value;
    this.update_Eq_Mag();
    this.update_h1_tf();
    this.update_Polar_Plot();
    this.update_isInstabilty(3); // 3 is used just toshow typeOf is number
    this.isGreaterThanAmp(3); // 3 is used just toshow typeOf is number
  } else {
    this.fc = event.target.value;
    this.update_Eq_Mag();
    this.update_h1_tf();
    this.update_Polar_Plot();
    this.update_isInstabilty(3); // 3 is used just toshow typeOf is number
    this.isGreaterThanAmp(3); // 3 is used just toshow typeOf is number
  }
}

w1_g_update(event: any) {
  if (event.value !== undefined) {
    this.g = event.value;
    this.update_W1_Mag();
    this.update_h1_tf();
    this.update_Polar_Plot();
    this.update_isInstabilty(3); // 3 is used just toshow typeOf is number
    this.isGreaterThanAmp(3); // 3 is used just toshow typeOf is number
} else {
    this.g = event.target.value;
    this.update_W1_Mag();
    this.update_h1_tf();
    this.update_Polar_Plot();
    this.update_isInstabilty(3); // 3 is used just toshow typeOf is number
    this.isGreaterThanAmp(3); // 3 is used just toshow typeOf is number
  }
}

*/


isGreaterThanAmp(event: any) {
console.log(event)
if (typeof event === 'number') {

} else if (event.value !== undefined) {
    this.value_nyquistRadius = event.value;
    this.magnitudeOfH1= numeric.mul(this.A,this.value_nyquistRadius);
} else {
    this.value_nyquistRadius = event.target.value;
    this.magnitudeOfH1= numeric.mul(this.A,this.value_nyquistRadius);
}
 this.update_isGreaterThanAmp(this.value_nyquistRadius);
}

update_isGreaterThanAmp(value_nyquistRadius){
  let isGreaterThanAmp= numeric.mul(this.value_nyquistRadius,this.value_eq_fcut);
  if(isGreaterThanAmp >= this.maxAmplification){
    this.isInstability = false;
  } else{
    this.isInstability=true;
  }
};







}
