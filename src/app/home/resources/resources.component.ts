import { Component, OnInit } from '@angular/core';

import { ResourcesStateService } from './resources-state.service';
import { Router } from '@angular/router';
import { Resource } from 'src/app/shared/models/resource';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
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
    event.component.byKey(event.currentSelectedRowKeys[0]).done((resource: Resource) => {
      if(resource) {
        this.router.navigate(['/home/resource-details/' + resource.id]);
      }
    })
  }

  public deleteResource(event: any): void {
    console.log(event.data);
    this.resourcesStateService.dispatchDeleteResource(event.data);
  }

  public ngOnInit(): void {
    this.resourcesStateService.dispatchGetResources();
  }
}
