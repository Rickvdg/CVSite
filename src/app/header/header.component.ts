import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedComponent;

  constructor() { }

  ngOnInit() {
  }

  log(msg: string) {
    console.log(msg);
  }

  getSelectedWidth(): number {
    if (this.selectedComponent) {
      return this.selectedComponent.offsetWidth;
    }
    return 0;
  }

  getSelectedOffsetLeft(): number {
    if (this.selectedComponent) {
      return this.selectedComponent.offsetLeft;
    }
    return 0;
  }

}
