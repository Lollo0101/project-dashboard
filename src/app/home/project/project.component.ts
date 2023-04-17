import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { Project } from 'src/app/shared/models/project';
import { ProjectStateService } from './project-state.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  providers: [ProjectStateService]
})
export class ProjectComponent {
  public project$ = this.projectStateService.selectSelectedProject();

  public constructor(
    private projectStateService: ProjectStateService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  public goBack(): void {
    this.location.back();
  }

  public ngOnInit(): void {
    this.getProject();
  }

//-UTILS-------------------------------------------------------------------

  private getProject(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.projectStateService.dispatchGetProject(id);
  }
}
