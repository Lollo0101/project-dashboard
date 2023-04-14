import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

import { ResourceStateService } from './resource-state.service';
import { Resource } from 'src/app/shared/models/resource';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.scss'],
  providers: [ResourceStateService]
})
export class ResourceDetailsComponent implements OnInit {
  public resource$ = this.resourceStateService.selectSelectedResource();

  public constructor(
    private resourceStateService: ResourceStateService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  public updateResource(resource: Resource): void {
    this.resourceStateService.dispatchUpdateResource(resource);
  }

  public addResource(resource: Resource): void {
    this.resourceStateService.dispatchAddResource(resource);
  }

  public goBack(): void {
    this.location.back();
  }

  public ngOnInit(): void {
    this.getResource();
  }

//-UTILS-------------------------------------------------------------------

  private getResource(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.resourceStateService.dispatchGetResource(id);
  }
}
