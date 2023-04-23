import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

import { UserStateService } from 'src/app/user-state.service';
import { OffCanvas } from 'src/app/shared/models/offcanvas';
import { OffcanvasComponent } from '../offcanvas/offcanvas.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  @Input() public title!: string;

  public languages = ['it', 'en'];

  public user$ = this.userStateSvc.selectUser();

  public constructor(
    private translate: TranslateService,
    private userStateSvc: UserStateService,
    private router: Router,
    private offcanvasSvc: NgbOffcanvas
  ) {}

  public changeLang(lang: string): void {
    this.translate.use(lang.toLowerCase()).subscribe();
  }

  public logout(): void {
    let offcanvas: OffCanvas = {
      title: this.translate.instant('OFFCANVAS.LOGOUT_TITLE'),
      description: this.translate.instant('OFFCANVAS.LOGOUT_DESCRIPTION'),
      positiveText: this.translate.instant('OFFCANVAS.LOGOUT_POSITIVE_TEXT'),
      negativeText: this.translate.instant('OFFCANVAS.LOGOUT_NEGATIVE_TEXT')
    };

    this.openModal(OffcanvasComponent, offcanvas);
  }

//-UTILS------------------------------------------------------------

  private openModal(content: any, offcanvas: OffCanvas): void {
    const offcanvasRef = this.offcanvasSvc.open(content);

    offcanvasRef.componentInstance.offcanvas = offcanvas;

    offcanvasRef.result.then(
      result => {
        if(result) {
          this.userStateSvc.dispatchLogout();
          this.router.navigate(['login']);
        }
      }
    );
  }
}
