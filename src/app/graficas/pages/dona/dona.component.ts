import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

   public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'];
   public doughnutChartData: MultiDataSet = [
     [350, 450, 100, 150]
   ];
   public doughnutChartType: ChartType = 'doughnut';

   public colors: Color[] = [
     { backgroundColor: [ '#FFC00D','#E8980C', '#FF8300', '#E85D0C'] }
   ];

}
