import { Injectable } from '@angular/core';

import { BaseStateService } from 'src/app/base.state-service';
import { Resource } from 'src/app/shared/models/resource';
import { ResourceService } from '../../resource.service';

@Injectable({
  providedIn: 'root'
})
export class ResourceStateService extends BaseStateService<ResourceState> {
  constructor(private resourceService: ResourceService) {
    super();
  }
  
  protected override get initalState(): ResourceState {
    return {
      selectedResource: undefined,
      isEditable: true
    };
  }

  // ACTIONS

  public dispatchChangeEditState(enabled: boolean): void {
    this.updateState(state => ({
        ...state,
        isEditable: enabled
    }), 'CHANGE EDITING STATE')
  }

  public dispatchGetResource(id: number): void {
      this.resourceService.getResource(id).subscribe(res => {
        this.updateState(state => ({
          ...state,
          selectedResource: res
        }), 'GET RESOURCE BY ID');
      });
  }

  public dispatchAddResource(resource: Resource): void {
    this.resourceService.addResource(resource);
  }

  public dispatchUpdateResource(resource: Resource): void {
    this.resourceService.updateResource(resource);
  }

  // SELECTORS

  public selectSelectedResource = () => this.select(state => state.selectedResource);

  public selectIsEditable = () => this.select(state => state.isEditable);
}

interface ResourceState {
  selectedResource: Resource | undefined,
  isEditable: boolean
}