import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'translate-app';
  nameError = false;
  ret: string = 'en-us';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en-us', 'zh-tw']);
    translate.setDefaultLang(this.getLang());
  }

  switchLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }
  checkName(usrName: string) {
    console.log(usrName);
    this.nameError = usrName === '';
  }

  getLang(): string {
    const str =
      localStorage.getItem('lang') === null
        ? this.ret
        : localStorage.getItem('lang');
    this.ret = str === null ? 'en-us' : str;
    return this.ret;
  }
}
