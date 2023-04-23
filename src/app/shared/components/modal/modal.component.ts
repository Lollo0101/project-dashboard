import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Modal } from '../../models/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  public modal!: Modal;

	public constructor(
    public activeModal: NgbActiveModal
  ) {}

  public onClose(result: boolean): void {
    this.activeModal.close(result);
  }
}