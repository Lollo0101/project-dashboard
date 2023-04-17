import { Injectable } from '@angular/core';
import { BaseStateService } from 'src/app/base.state-service';
import { ProjectService } from 'src/app/project.service';
import { Project } from 'src/app/shared/models/project';

@Injectable()
export class ChartStateService extends BaseStateService<ChartState> {
  constructor(
    private projectService: ProjectService
    ) {
      super();
    }

    protected override get initalState(): ChartState {
      return {
        projects: []
      }
    }

    // ACTIONS

    public dispatchGetProjects() {
      this.projectService.getProjects().subscribe(
        res => this.updateState(state => ({
          ...state,
          projects: res
        }), 'GET PROJECTS')
      )
    }

    // SELECTORS

    public selectProjects = () => this.select(state => state.projects);
}

interface ChartState {
  projects: Project[]
}