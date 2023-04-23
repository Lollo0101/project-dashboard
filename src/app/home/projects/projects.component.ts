import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectsStateService } from './projects-state.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectsStateService]
})
export class ProjectsComponent {
  public projects$ = this.projectsStateService.selectProjects();

  public constructor(
    private projectsStateService: ProjectsStateService,
    private router: Router
  ) {}

  public selectProject(event:  any): void {
    const project = event.selectedRowsData[0];

    if(project) {
      // usually inside the state-service
      this.router.navigate(['home', 'project', project.id]);
    }
  }

  public deleteProject(event: any): void {
    this.projectsStateService.dispatchDeleteProject(event.data);
  }

  public ngOnInit(): void {
    this.projectsStateService.dispatchGetProjects();
  }
}
