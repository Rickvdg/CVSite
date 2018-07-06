import { Component, OnInit } from '@angular/core';
import {translations} from './translations';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {

  language = 'nl';
  supportedLocales = ['nl', 'en'];
  translations;
  messages: {
    title: string,
    description: string,
    welcome: string
  };

  constructor() { }

  ngOnInit() {
    this.translations = translations;
    this.changeLanguage('nl');
  }

  changeLanguage(locale_id: string) {
    if (this.supportedLocales.indexOf(locale_id) > -1) {
      this.language = locale_id;
      if (locale_id === 'nl') {
        this.messages = this.translations.nl;
      } else if (locale_id === 'en') {
        this.messages = this.translations.en;
      }
    }
  }

}
