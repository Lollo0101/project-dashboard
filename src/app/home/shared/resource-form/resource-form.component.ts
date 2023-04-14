import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { Resource } from 'src/app/shared/models/resource';
import { ResourceStateService } from '../../resource-details/resource-state.service';

@Component({
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.scss']
})
export class ResourceFormComponent {
  public readonly MIN = 10000;
  public readonly MAX = 99999;

  @Input() public resource?: Resource | undefined;
  
  @Output() public resourceUpdated = new EventEmitter<Resource>();
  @Output() public resourceAdded = new EventEmitter<Resource>();
  
  public isEditable$ = this.resourceStateService.selectIsEditable();

  public resourceForm = new FormGroup({
    id: new FormControl<number>(-1, {
      validators: [Validators.required],
      nonNullable: true
    }),
    name: new FormControl<string>('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    surname: new FormControl<string>('', {
      validators: [Validators.required],
      nonNullable: true
    }),
    address: new FormGroup({
      street: new FormControl<string>('', {
        validators: [Validators.required],
        nonNullable: true
      }),
      city: new FormControl<string>('', {
        validators: [Validators.required],
        nonNullable: true
      }),
      CAP: new FormControl<number>(0, {
        validators: [
          Validators.required,
          Validators.min(this.MIN),
          Validators.max(this.MAX),
        ],
        nonNullable: true
      })
    })
  })

  public constructor(
    private resourceStateService: ResourceStateService,
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
    const resource: Resource = this.resourceForm.getRawValue();

    if(resource.id > 0) {
      this.updateResource(resource);
    } else {
      this.addResource(resource);
    }

    this.goBack();
  }

  public ngOnInit(): void {
    let isEditable = true;

    if(this.resource) {
      this.resourceForm.setValue(this.resource);
      isEditable = false;
    }

    this.changeEditState(isEditable);
  }

//-UTILS------------------------------------------------------------

  private changeEditState(isEditable: boolean): void {
    this.resourceStateService.dispatchChangeEditState(isEditable);

    if(isEditable) {
      this.resourceForm.enable();
    } else {
      this.resourceForm.disable();
    }
  }

  private updateResource(resource: Resource): void {
    this.resourceUpdated.emit(resource);
  }

  private addResource(resource: Resource): void {
    this.resourceAdded.emit(resource);
  }
}
