import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-plot4',
  templateUrl: './plot4.component.html',
  styleUrls: ['./plot4.component.css']
})
export class Plot4Component implements OnInit {

  @Input() magnitudeOfH1: any;
  @Input() phaseOfH1: any;

  constructor() { }

  ngOnInit() {
  }

}
