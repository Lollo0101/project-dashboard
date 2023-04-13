import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  @Input() public title!: string;

  public languages = ['IT', 'EN'];

  public constructor(private translate: TranslateService) {}

  public changeLang(lang: string): void {
    this.translate.use(lang).subscribe();
  }
}
