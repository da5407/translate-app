import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'translate-app';
  mdate:any="2020/12/29";
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

  ch = {
    /** 每週第一天，0代表週日 */
    firstDayOfWeek: 0,
    /** 每週天數正常樣式 */
    dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    /** 每週天數短樣式（位置較小時顯示） */
    dayNamesShort: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
    /** 每週天數最小樣式 */
    dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
    /** 每月月份正常樣式 */
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    /** 每月月份短樣式 */
    monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    };

}
