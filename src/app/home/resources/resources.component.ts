import { Component, OnInit } from '@angular/core';

import { ResourcesStateService } from './resources-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  providers: [ResourcesStateService]
})
export class ResourcesComponent implements OnInit {
  public resources$ = this.resourcesStateService.selectResources();

  public constructor(
    private resourcesStateService: ResourcesStateService,
    private router: Router
    ) {
      this.selectResource = this.selectResource.bind(this);
    }

  public selectResource(event:  any): void {
    const resource = event.selectedRowsData[0];

    if(resource) {
      this.router.navigate(['home', 'resource', resource.id]);
    }
  }

  public deleteResource(event: any): void {
    this.resourcesStateService.dispatchDeleteResource(event.data);
  }

  public ngOnInit(): void {
    this.resourcesStateService.dispatchGetResources();
  }
}
