import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

import { ResourceStateService } from './resource-state.service';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.scss']
})
export class ResourceDetailsComponent implements OnInit {
  public resource$ = this.resourceStateService.selectSelectedResource();

  public constructor(
    private resourceStateService: ResourceStateService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  public ngOnInit(): void {
    this.getResource();
  }

  public goBack(): void {
    this.location.back();
  }

//-UTILS-------------------------------------------------------------------

  private getResource(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.resourceStateService.dispatchGetResource(id);
  }
}
