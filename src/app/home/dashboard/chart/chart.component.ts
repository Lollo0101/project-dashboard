import { Component } from '@angular/core';
import { ChartStateService } from './chart-state.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  providers: [ChartStateService]
})
export class ChartComponent {
  public projects$ = this.chartStateService.selectProjects();

  public constructor(
    private chartStateService: ChartStateService
  ) {}

  public ngOnInit(): void {
    this.chartStateService.dispatchGetProjects();
  }
}
