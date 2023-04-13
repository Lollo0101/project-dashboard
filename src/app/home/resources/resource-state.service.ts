import { Injectable } from '@angular/core';
import { BaseStateService } from 'src/app/base.state-service';
import { Resource } from 'src/app/shared/models/resource';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class ResourceStateService extends BaseStateService<ResourceState> {
  constructor(private resourceService: ResourceService) {
    super();
  }
  
  protected override get initalState(): ResourceState {
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

  public dispatchAddResource(resource: Resource): void {
    this.resourceService.addResource(resource);
  }

  public dispatchUpdateResource(resource: Resource): void {
    this.resourceService.updateResource(resource);
  }

  public dispatchDeleteResource(resource: Resource): void {
    this.resourceService.deleteResource(resource);
  }

  // SELECTORS

  public selectResources = () => this.select(state => state.resources);
}

interface ResourceState {
  resources: Resource[]
}