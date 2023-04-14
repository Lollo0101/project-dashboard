import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserStateService } from 'src/app/user-state.service';
import { OffCanvas } from '../../models/offcanvas';
import { OffcanvasComponent } from '../offcanvas/offcanvas.component';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  @Input() public title!: string;

  public languages = ['it', 'en'];

  public user$ = this.userStateService.selectUser();

  public constructor(
    private translate: TranslateService,
    private userStateService: UserStateService,
    private router: Router,
    private offcanvasService: NgbOffcanvas
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

    console.log(offcanvas)

    this.openModal(OffcanvasComponent, offcanvas);
  }

//-UTILS------------------------------------------------------------

  private openModal(content: any, offcanvas: OffCanvas): void {
    const offcanvasRef = this.offcanvasService.open(content);

    offcanvasRef.componentInstance.offcanvas = offcanvas;

    offcanvasRef.result.then(
      result => {
        if(result) {
          this.userStateService.dispatchLogout();
          this.router.navigate(['login']);
        }
      }
    );
  }
}
