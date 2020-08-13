import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'acs-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class AcsCheckboxComponent {

  @Input() checked: boolean;
  // valorile @Input de mai jos sunt folosite printru initiere, insa se pot crea local
  @Input() color: string;
  @Input() icoChecked: string;
  @Input() icoNotChecked: string;
  backgroundColor?: string = null;
  @Output() clicked = new EventEmitter();

  constructor() {
  }

  // tslint:disable-next-line:typedef
  getClicked() {
    this.clicked.emit();
    if (!this.checked) {
      this.color = '#02a302c7';
    }
    if (this.checked) {
      this.color = '#868686d4';
    }
  }

  getIco(): string {
    if (this.checked) {
      return this.icoChecked;
    }
    if (!this.checked) {
      return this.icoNotChecked;
    }
  }

}
