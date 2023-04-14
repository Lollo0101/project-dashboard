import { Component } from '@angular/core';
import { OffCanvas } from '../../models/offcanvas';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss']
})
export class OffcanvasComponent {
  public offcanvas!: OffCanvas;

  constructor(public activeOffcanvas: NgbActiveOffcanvas) {}

  public onClose(result: boolean): void {
    this.activeOffcanvas.close(result);
  }
}
