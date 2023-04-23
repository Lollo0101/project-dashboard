import { Component, forwardRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Resource } from 'src/app/shared/models/resource';
import { ProjectStateService } from '../project-state.service';
import { ResourceService } from 'src/app/core/services/resource.service';

export type ResourceCallback = (resource: Resource[]) => void;

@Component({
  selector: 'app-project-resources',
  templateUrl: './project-resources.component.html',
  styleUrls: ['./project-resources.component.scss'],
  providers: [
    ProjectStateService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProjectResourcesComponent),
      multi: true,
    }
  ]
})
export class ProjectResourcesComponent implements ControlValueAccessor {
  public isEditable?: boolean;
  public tmp_resources: Resource[] = [];

  private onChange?: ResourceCallback;

  public displayExpr = (resource: Resource) => {
    if(resource) {
      return `${resource.name} ${resource.surname}`;
    } else {
      return '';
    }
  }

  public constructor(
    private resourceSvc: ResourceService
  ) {}

  public addResource(event: any, resource: Resource): void {
    event.data = resource;
  }

  public resourceAdded(): void {
    this.notifyChanges();
  }

  public deleteResource(resource: Resource): void {
    this.tmp_resources.slice(this.tmp_resources.findIndex(res => res.id === resource.id), 1);
  }
  
  public resourceDeleted(): void {
    this.notifyChanges();
  }

  public getResources(): Observable<Resource[]> {
    return this.resourceSvc.getResources();;
  }

  public writeValue(resources: Resource[]): void {
    this.tmp_resources = [...resources];
  }

  public registerOnChange(fn: ResourceCallback): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: ResourceCallback): void {}

  public setDisabledState(isDisabled: boolean): void {
    this.isEditable = !isDisabled;
  }

  public ngOnInit(): void {
  }

//-UTILS-----------------------------------------------------------

  private notifyChanges(): void {
    this.onChange?.(this.tmp_resources);
  }
}
