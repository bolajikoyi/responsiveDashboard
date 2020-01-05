import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, RadialChartOptions, ChartType} from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';

declare var plotly:any;

@Component({
  selector: 'app-plot4',
  templateUrl: './plot4.component.html',
  styleUrls: ['./plot4.component.css']
})
export class Plot4Component implements OnInit {

  @Input() magnitudeOfH1: any;
  @Input() phaseOfH1: any;



  //@ViewChild('myChart', { static: false }) myChart: jqxChartComponent;
  chartInstance;
  ngOnInit(): void {
  }
  dataset: any[] = [
      { City: 'London', SalesCountJan: 210, SalesRevenueJan: 123 },
      { City: 'Madrid', SalesCountJan: 190, SalesRevenueJan: 114 },
      { City: 'Munich', SalesCountJan: 201, SalesRevenueJan: 112 },
      { City: 'Amsterdam', SalesCountJan: 110, SalesRevenueJan: 98 },
      { City: 'Paris', SalesCountJan: 105, SalesRevenueJan: 93 },
      { City: 'Prague', SalesCountJan: 54, SalesRevenueJan: 100 }
  ];
  padding: any = { left: 5, top: 5, right: 5, bottom: 5 };
  titlePadding: any = { left: 0, top: 0, right: 0, bottom: 5 };

  xAxis: any =
  {
      dataField: 'City',
      valuesOnTicks: true,
      labels: { autoRotate: true }
  };
  valueAxis: any =
  {
      labels: {
          formatSettings: { decimalPlaces: 0 },
          autoRotate: true
      }
  };
  seriesGroups: any =
  [
      {
          polar: true,
          endAngle: 360,
          radius: 70,
          type: 'line',
          series: [
              { dataField: 'SalesCountJan', displayText: 'Sales count', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'circle' },
              { dataField: 'SalesRevenueJan', displayText: 'Revenue', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'square' }
          ]
      }
  ];
}