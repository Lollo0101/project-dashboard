import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { Resource } from 'src/app/shared/models/resource';
import { ResourceService } from 'src/app/resource.service';
import { ProjectStateService } from '../project-state.service';

@Component({
  selector: 'app-project-resources',
  templateUrl: './project-resources.component.html',
  styleUrls: ['./project-resources.component.scss']
})
export class ProjectResourcesComponent {
  public selectedProject$ = this.projectStateService.selectSelectedProject();
  public isEditable$ = this.projectStateService.selectIsEditable();

  public tmp_resources: Resource[] = [];

  public displayExpr = (resource: Resource) => {
    if(resource) {
      return `${resource.name} ${resource.surname}`;
    } else {
      return '';
    }
  }

  public constructor(
    private resourceService: ResourceService,
    private projectStateService: ProjectStateService
  ) {}

  public addResource(resource: Resource): void {
    // should return the resource via an event emitter (?) for a tmp array
    this.tmp_resources.push(resource);
  }

  public deleteResource(resource: Resource): void {
    // should return the resource via an event emitter (?) for a tmp array
    this.tmp_resources.slice(this.tmp_resources.findIndex(res => res.id === resource.id), 1);
  }

  public getResources(): Observable<Resource[]> {
    let resources: Observable<Resource[]> = this.resourceService.getResources();

    return resources;
  }

  public ngOnInit(): void {
    this.selectedProject$.subscribe(project => this.tmp_resources = project!.resources);
  }
}
