import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserStateService } from 'src/app/user-state.service';

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
    private router: Router
    ) {}

  public changeLang(lang: string): void {
    this.translate.use(lang.toLowerCase()).subscribe();
  }

  public logout(): void {
    this.userStateService.dispatchLogout();
    this.router.navigate(['login']);
  }
}
