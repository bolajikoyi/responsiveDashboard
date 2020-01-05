import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, RadialChartOptions, ChartType} from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

declare var plotly:any;

@Component({
  selector: 'app-plot4',
  templateUrl: './plot4.component.html',
  styleUrls: ['./plot4.component.css']
})
export class Plot4Component implements OnInit {

  @Input() magnitudeOfH1: any;
  @Input() phaseOfH1: any;



 // Radar
 public radarChartOptions: RadialChartOptions = {
  responsive: true,
};
public radarChartLabels: Label[] = ['90', '135', '180', '225', '270', '315', '0', '45'];

public radarChartData: ChartDataSets[] = [
  { data: [1, 2, 3, 4, 5, 5.5, 7], label: 'radius' },
 
];
public radarChartType: ChartType = 'radar';

constructor() { }

ngOnInit() {
}
}