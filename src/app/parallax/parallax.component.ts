import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {translations} from './translations';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {
  @ViewChild('scrollMe') private element: ElementRef;

  language = 'nl';
  supportedLocales = ['nl', 'en'];
  translations;
  messages: {
    title: string,
    description: string,
    welcome: string
  };
  codes: {
    name: string,
    type: string,
    skill: string
  }[];

  constructor() { }

  scrollToBottom(): void {
    try {
      this.element.nativeElement.scrollTop = this.element.nativeElement.scrollHeight;
    } catch (err) { }
  }

  ngOnInit() {
    this.codes = [];
    this.codes.push({
      name: 'Angular 2+',
      type: 'framework',
      skill: '0.5 jaar werkervaring'
    });
    this.codes.push({
      name: 'HTML/CSS',
      type: 'Taal',
      skill: '0.5 jaar werkervaring'
    });
    this.codes.push({
      name: 'C#',
      type: 'Taal',
      skill: 'Beginner'
    });
    this.codes.push({
      name: 'Java',
      type: 'Taal',
      skill: 'Beginner'
    });
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
