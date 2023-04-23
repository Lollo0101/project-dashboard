import { Injectable } from '@angular/core';

import { BaseStateService } from 'src/app/shared/services/base.state-service';
import { ProjectService } from 'src/app/project.service';
import { Project } from 'src/app/shared/models/project';

interface ProjectsState {
  projects: Project[]
}

@Injectable()
export class ProjectsStateService extends BaseStateService<ProjectsState> {
  constructor(
    private projectSvc: ProjectService
  ) {
    super()
  }
  
  protected override get initalState(): ProjectsState {
    return {
      projects: []
    }
  }

  // ACTIONS

  public dispatchGetProjects(): void {
    this.dispatchFilterProjects('');
  }

  public dispatchFilterProjects(searchText: string): void {
    this.projectSvc.searchProjects(searchText).subscribe(
      projects_list => {
        this.updateState(state => ({
          ...state,
          projects: projects_list
        }), 'GET PROJECTS');
      }
    );
  }

  public dispatchDeleteProject(project: Project): void {
    this.projectSvc.deleteProject(project).subscribe();
  }

  // SELECTORS

  public selectProjects = () => this.select(state => state.projects);
}