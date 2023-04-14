import { Component, OnInit } from '@angular/core';

import { ResourceStateService } from './resource-state.service';
import { Router } from '@angular/router';
import { Resource } from 'src/app/shared/models/resource';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  public resources$ = this.resourceStateService.selectResources();

  public constructor(
    private resourceStateService: ResourceStateService,
    private router: Router
    ) {
      this.selectResource = this.selectResource.bind(this);
    }

  public selectResource(event:  any): void {
    event.component.byKey(event.currentSelectedRowKeys[0]).done((resource: Resource) => {
      if(resource) {
        //console.log(this.router.url);
        this.router.navigate(['/home/resource-details/' + resource.id]);
      }
    })
  }

  public ngOnInit(): void {
    this.resourceStateService.dispatchGetResources();
  }
}
