import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { Project } from 'src/app/shared/models/project';
import { ProjectStateService } from '../project-state.service';
import { Resource } from 'src/app/shared/models/resource';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent {
  public selectedProject$ = this.projectStateService.selectSelectedProject();
  public isEditable$ = this.projectStateService.selectIsEditable();

  public projectForm = new FormGroup({
    id: new FormControl<number>(-1, {
      validators: [Validators.required],
      nonNullable: true
    }),
    name: new FormControl<string>('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    description: new FormControl<string>('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    startDate: new FormControl<Date>(new Date(), {
      validators: [Validators.required],
      nonNullable: true
    }),
    endDate: new FormControl<Date>(new Date()),
    progress: new FormControl<number>(0, {
      validators: [Validators.required],
      nonNullable: true
    }),
    resources: new FormControl<Resource[]>([], {
      validators: [Validators.required],
      nonNullable: true
    })
  })

  public constructor(
    private projectStateService: ProjectStateService,
    private location: Location,
  ) {}

  public enableEdit(): void {
    this.changeEditState(true);
  }

  public disableEdit(): void {
    this.changeEditState(false);
  }

  public goBack(): void {
    this.location.back();
  }

  public onSubmit(): void {
    const project: Project = this.projectForm.getRawValue();

    if(project.id > 0) {
      this.updateProject(project);
    } else {
      this.addProject(project);
    }

    this.goBack();
  }

  public ngOnInit(): void {
    let isEditable = true;

    this.selectedProject$.subscribe(project => {
      if(project) {
        this.projectForm.setValue(project);
        isEditable = false;
      } else {
        const nullProject: Project = { id: -1, name: '', description: '', startDate: new Date(), endDate: null, progress: 0, resources: [] };
        this.projectForm.setValue(nullProject);
      }

      this.changeEditState(isEditable);
    });
  }

//-UTILS------------------------------------------------------------

  private changeEditState(isEditable: boolean): void {
    this.projectStateService.dispatchChangeEditState(isEditable);

    if(isEditable) {
      this.projectForm.enable();
    } else {
      this.projectForm.disable();
    }
  }

  private updateProject(project: Project): void {
    this.projectStateService.dispatchUpdateProject(project);
  }

  private addProject(project: Project): void {
    this.projectStateService.dispatchAddProject(project);
  }
}
