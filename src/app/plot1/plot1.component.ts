import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

declare var plotly:any;

@Component({
  selector: 'app-plot1',
  templateUrl: './plot1.component.html',
  styleUrls: ['./plot1.component.css']
})
export class Plot1Component implements OnInit {

  @Input() f_vec: any;
  @Input() S_mag: any;
  @Input() EQ_mag: any;

  constructor() { }

  ngOnInit() {

  }


  
}
