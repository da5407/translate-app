import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, Translation } from 'primeng/api';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'translate-app';
  mDate:any='2020/12/29';
  nameError = false;
  ret: string = 'en-us';
  // locale: {
  //   firstDayOfWeek: 1;
  //   dayNames: string[];
  //   dayNamesShort: string[];
  //   dayNamesMin: string[];
  //   monthNames: string[];
  //   monthNamesShort: string[];
  //   today: string;
  //   clear: string;
  // } | any;
  constructor(private config: PrimeNGConfig,public translate: TranslateService) {
    translate.addLangs(['en-us', 'zh-tw']);
    translate.setDefaultLang(this.getLang());
  }
  ngOnInit(): void {
    this.config.setTranslation(this.translation);
  }

  switchLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
    this.config.setTranslation(this.translation);
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

    // translate2(lang: string) {
    //     this.translate.use(lang);
    //     this.translate.get('primeng').subscribe(res => this.config.setTranslation(res));
    // }

  ch = {
    /** 每週第一天，0代表週日 */
    firstDayOfWeek: 0,
    /** 每週天數正常樣式 */
    dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    /** 每週天數短樣式（位置較小時顯示） */
    dayNamesShort: ['週日', '週一', '週二', '週三', '週四', '週五', '週六'],
    /** 每週天數最小樣式 */
    dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
    /** 每月月份正常樣式 */
    monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    /** 每月月份短樣式 */
    monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    };

    private _translationEn: Translation = {
      startsWith: 'Starts with',
      contains: 'Contains',
      notContains: 'Not contains',
      endsWith: 'Ends with',
      equals: 'Equals',
      notEquals: 'Not equals',
      lt: 'Less than',
      lte: 'Less than or equal to',
      gt: 'Greater than',
      gte: 'Greater than or equal to',
      is: 'Is',
      isNot: 'Is not',
      before: 'Before',
      after: 'After',
      clear: 'Clear',
      apply: 'Apply',
      matchAll: 'Match All',
      matchAny: 'Match Any',
      addRule: 'Add Rule',
      removeRule: 'Remove Rule',
      accept: 'Yes',
      reject: 'No',
      choose: 'Choose',
      upload: 'Upload',
      cancel: 'Cancel',
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
      monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
      monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      today: 'Today',
      weekHeader: 'WK'
    };

    private _translationZh: Translation = {
      startsWith: 'Starts with',
      contains: 'Contains',
      notContains: 'Not contains',
      endsWith: 'Ends with',
      equals: 'Equals',
      notEquals: 'Not equals',
      lt: 'Less than',
      lte: 'Less than or equal to',
      gt: 'Greater than',
      gte: 'Greater than or equal to',
      is: 'Is',
      isNot: 'Is not',
      before: 'Before',
      after: 'After',
      clear: '清除',
      apply: 'Apply',
      matchAll: 'Match All',
      matchAny: 'Match Any',
      addRule: 'Add Rule',
      removeRule: 'Remove Rule',
      accept: 'Yes',
      reject: 'No',
      choose: 'Choose',
      upload: 'Upload',
      cancel: 'Cancel',
      dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      dayNamesShort: ['週日', '週一', '週二', '週三', '週四', '週五', '週六'],
      dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
      monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      today: '今天',
      weekHeader: '週'
    };
    public get translation(): Translation {
      console.log(this._translationZh);
      return this.getLang() === 'en-us' ? this._translationEn : this._translationZh;
    }

    public set translation(value: Translation) {
      if(this.getLang() === 'en-us'){
        this._translationEn = value;
      } else if(this.getLang() === 'zh-tw'){
        this._translationZh = value;
      }
    }

}

