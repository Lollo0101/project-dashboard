import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

import { BaseStateService } from 'src/app/shared/services/base.state-service';
import { ProjectService } from 'src/app/core/services/project.service';
import { Project } from 'src/app/shared/models/project';
import { Resource } from 'src/app/shared/models/resource';

interface ProjectState {
  isEditable: boolean;
  selectedProject: Project | undefined;
  resources: Resource[]
}

@Injectable()
export class ProjectStateService extends BaseStateService<ProjectState> {
  constructor(
    private projectSvc: ProjectService,
    private location: Location
  ) {
    super();
  }
  
  protected override get initalState(): ProjectState {
    return {
      selectedProject: undefined,
      isEditable: true,
      resources: []
    };
  }

  // ACTIONS

  public dispatchChangeEditState(enabled: boolean): void {
    this.updateState(state => ({
        ...state,
        isEditable: enabled
    }), 'CHANGE EDITING STATE')
  }

  public dispatchGetProject(id: number): void {
      this.projectSvc.getProject(id).subscribe(res => {
        this.updateState(state => ({
          ...state,
          selectedProject: res
        }), 'GET PROJECT BY ID');
      });
  }

  public dispatchAddProject(project: Project): void {
    this.projectSvc.addProject(project).subscribe({
      next: res => this.goBack(),
      error: error => console.log("ERROR: " + project)
    });
  }

  public dispatchUpdateProject(project: Project): void {
    this.projectSvc.updateProject(project).subscribe();
  }

  // SELECTORS

  public selectSelectedProject = () => this.select(state => state.selectedProject);

  public selectIsEditable = () => this.select(state => state.isEditable);

//-UTILS-----------------------------------------------------------------------------

  private goBack(): void {
    this.location.back();
  }
}