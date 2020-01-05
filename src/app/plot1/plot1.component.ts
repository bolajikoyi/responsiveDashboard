import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { ReplaySubject, BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

declare var numeric:any;


@Component({
  selector: 'app-plot1',
  templateUrl: './plot1.component.html',
  styleUrls: ['./plot1.component.css']
})
export class Plot1Component implements OnInit {


  @Input() set 
  slider1Value(val:number){
    this.slider1Value$.next(val)
  }

  
public readonly slider1Value$ = new ReplaySubject<number>(1);

  A:any[]=[21, 38, 60, 99, 26, 47, 70, 13, 62, 74];
  A1:any =this.A;



  public lineChartData: ChartDataSets[] = [
    
    
    { data: this.A1, label: 'Data 2' },
    { data: [48, 98, 50, 29, 56, 77, 10, 22, 32, 54], label: 'Data 3' }
   
  ];

  public lineChartDataTemp$= new BehaviorSubject<ChartDataSets[]>(this.lineChartData);
  public lineChartData$: Observable<ChartDataSets[]>;

  
  public lineChartLabels: Label[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [

        {
          id: 'y-axis-1',
          position: 'left',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];



  constructor() { }

  ngOnInit() {
    this.lineChartData$ = combineLatest([this.lineChartDataTemp$, this.slider1Value$]).pipe(
      map(([lineChartDataTemp, slider1Value]) => {
       const data = [48, 98, 50, 29, 56, 77, 10, 22, 32, 54];
        const newData = data.map(s => s * Math.log(slider1Value)*Math.log(s))
        lineChartDataTemp[1].data = newData;
        console.warn(newData)
        return lineChartDataTemp
      })
    )
  }




  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
    console.warn("hello")
  }


  public changeColor() {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  public changeLabel() {
    this.lineChartLabels[2] = ['1st Line', '2nd Line'];
    // this.chart.update();
  }
}
