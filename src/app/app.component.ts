import { Component, OnInit, ViewChild } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { angularMath } from 'angular-ts-math';
import { DataService } from './data.service';
import { ShelvingCutService } from './formulars/shelving-cut.service';
import { Iir2ndOrderConjCmplxService } from './formulars/iir-2nd-order-conj-cmplx.service';
import { ReplaySubject } from 'rxjs';
import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';






declare var numeric: any;




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{
  
  @ViewChild('myChart', { static: false }) myChart: jqxChartComponent;

public slider1Value$ = new ReplaySubject<number>(1);

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

  T1: any;
  T1_Mag: any;
  W_mMul_T1_Abs: any; // note: do actual calculation with given values to get W_mMul_T1_Abs(0 is an assumed value)
  isInstability = false;

  isItGreaterThanAmp = false;
  maxAmplification: any;

  value_nyquistRadius1:number;

  // slider variables

  max_eq_fcut = 20;
  min_eq_fcut = 1;
  value_eq_fcut = 1;

  max_w1_g = 10;
  min_w1_g = 1;
  value_w1_g = 1;

  max_W_m = 1;
  min_W_m = 0;
  value_W_m = 0.1;
  step_min_W_m = 0.1;

  max_nyquistRadius = 360;
  min_nyquistRadius = 1;
  value_nyquistRadius = 1;
  step_nyquistRadius = 1;


  // polar plot
  magnitudeOfH1: any;
  phaseOfH1: any;

  // draggable
  draggable = false;
  
  constructor(private facebookService: FacebookService, private _DataService: DataService, private _ShelvingCutService: ShelvingCutService,
    private _Iir2ndOrderConjCmplxService: Iir2ndOrderConjCmplxService) { } 
 ngOnInit(): void {
   this.initFacebookService();
   this.NFFT = 8192;
   this.fs = 48 * Math.pow(10, 3);
   this._DataService.getJSON().subscribe(data => {this.s_ls = data;
     
   });

}  // facebook init
private initFacebookService(): void {
  const initParams: InitParams = { xfbml: true, version: 'v3.2' };
  this.facebookService.init(initParams);
}



fcut_update (event: any) {
  if (event.value !== undefined) {
    this.slider1Value$.next(event.value);
  } else {
    
  }
}

check_isInstabilty() {
  if (this.W_mMul_T1_Abs < 1) {
      this.isInstability = false;
  } else {
      this.isInstability = true;
  }

  let temp;
  this.W_mMul_T1_Abs.find(element => {
    if (element >= 1 ) {
      return temp = true;
    } else {
      temp = false;
    }
  });

  this.isInstability = temp;
}

isGreaterThanAmp(event: any) {
console.log(event)
if (typeof event === 'number') {

} else if (event.value !== undefined) {
    this.value_nyquistRadius = event.value;
} else {
    this.value_nyquistRadius = event.target.value;
}



let temp;
this.H1_Mag.find(element => {
  if (element >= this.maxAmplification ) {
    return temp = true;
  } else {
    temp = false;
  }
});

this.isItGreaterThanAmp = temp;
}


sliderStartAngle(event: any): void {

  if (event!==undefined){
    let value_nyquistRadius = event.args.value;
    this.myChart.seriesGroups()[0].startAngle = value_nyquistRadius;
    this.myChart.update();
  }else {
    let value_nyquistRadius = event.target.args.value;
    this.myChart.seriesGroups()[0].startAngle = value_nyquistRadius;
    this.myChart.update();
  }
  
  console.warn(this.myChart.seriesGroups()[0].startAngle);
  console.warn(this.value_nyquistRadius);
}
sliderRotate(event: any): void {
  let value_nyquistRadius1 = event.args.value;
  let endAngle = this.myChart.seriesGroups()[0].endAngle;
  if (isNaN(endAngle))
      endAngle = 360;
  let startAngle = this.myChart.seriesGroups()[0].startAngle
  if (isNaN(startAngle))
      startAngle = 0;
  let diff = endAngle - startAngle;
  this.myChart.seriesGroups()[0].startAngle = value_nyquistRadius1;
  this.myChart.seriesGroups()[0].endAngle = value_nyquistRadius1 + diff;
  this.myChart.update();
}

}