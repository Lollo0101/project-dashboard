import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Project Dashboard';

  public constructor(private translate: TranslateService) {
    translate.setDefaultLang('it');
    translate.use('it');
  }
}
