import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-plot2',
  templateUrl: './plot2.component.html',
  styleUrls: ['./plot2.component.css']
})
export class Plot2Component implements OnInit {

  @Input() f_vec: any;
  @Input() W1_mag: any;

  constructor() { }

  ngOnInit() {
  }

}
