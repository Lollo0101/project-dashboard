import { Component, OnInit } from '@angular/core';

import { ResourceStateService } from './resource-state.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  public resources$ = this.resourceStateService.selectResources();

  public constructor(private resourceStateService: ResourceStateService) {}

  public ngOnInit(): void {
    this.resourceStateService.dispatchGetResources();
  }
}
