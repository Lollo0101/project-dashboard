import { Injectable } from '@angular/core';

import { BaseStateService } from 'src/app/base.state-service';
import { ProjectService } from 'src/app/project.service';
import { Project } from 'src/app/shared/models/project';

@Injectable()
export class ProjectStateService extends BaseStateService<ProjectState> {
  constructor(
    private projectService: ProjectService
  ) {
    super();
  }
  
  protected override get initalState(): ProjectState {
    return {
      selectedProject: undefined,
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

  public dispatchGetProject(id: number): void {
      this.projectService.getProject(id).subscribe(res => {
        this.updateState(state => ({
          ...state,
          selectedProject: res
        }), 'GET PROJECT BY ID');
      });
  }

  public dispatchAddProject(project: Project): void {
    this.projectService.addProject(project);
  }

  public dispatchUpdateProject(project: Project): void {
    this.projectService.updateProject(project);
  }

  // SELECTORS

  public selectSelectedProject = () => this.select(state => state.selectedProject);

  public selectIsEditable = () => this.select(state => state.isEditable);
}

interface ProjectState {
  isEditable: boolean,
  selectedProject: Project | undefined
}