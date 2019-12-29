import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-plot3',
  templateUrl: './plot3.component.html',
  styleUrls: ['./plot3.component.css']
})
export class Plot3Component implements OnInit {

  @Input() f_vec: any;
  @Input() H1_mag: any;
  @Input() maxAmplification: any;

  constructor() { }

  ngOnInit() {
  }

}
