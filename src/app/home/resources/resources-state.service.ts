import { Injectable } from '@angular/core';

import { BaseStateService } from 'src/app/shared/services/base.state-service';
import { Resource } from 'src/app/shared/models/resource';
import { ResourceService } from '../../resource.service';

@Injectable()
export class ResourcesStateService extends BaseStateService<ResourcesState> {
  constructor(private resourceService: ResourceService) {
    super();
  }
  
  protected override get initalState(): ResourcesState {
    return {
      resources: []
    };
  }

  // ACTIONS

  public dispatchGetResources(): void {
    this.dispatchFilterResources('');
  }

  public dispatchFilterResources(searchText: string): void {
    this.resourceService.searchResources(searchText).subscribe(res => {
      this.updateState(state => ({
        ...state,
        resources: res
      }), 'GET RESOURCES');
    });
  }

  public dispatchDeleteResource(resource: Resource): void {
    this.resourceService.deleteResource(resource);
  }

  // SELECTORS

  public selectResources = () => this.select(state => state.resources);
}

interface ResourcesState {
  resources: Resource[]
}