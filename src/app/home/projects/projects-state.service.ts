import { Injectable } from '@angular/core';
import { BaseStateService } from 'src/app/base.state-service';
import { ProjectService } from 'src/app/project.service';
import { Project } from 'src/app/shared/models/project';

@Injectable()
export class ProjectsStateService extends BaseStateService<ProjectsState> {
  constructor(
    private projectService: ProjectService
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
    this.projectService.searchProjects(searchText).subscribe(
      projects_list => {
        this.updateState(state => ({
          ...state,
          projects: projects_list
        }), 'GET PROJECTS');
      }
    );
  }

  public dispatchDeleteProject(project: Project): void {
    this.projectService.deleteProject(project).subscribe();
  }

  // SELECTORS

  public selectProjects = () => this.select(state => state.projects);
}

interface ProjectsState {
  projects: Project[]
}
