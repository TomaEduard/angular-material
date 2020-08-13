import { Component, OnInit, Input } from '@angular/core';
import { AcsCheckboxComponent } from '../checkbox/checkbox.component';

// interface Subnoduri {
//   checkbox: CheckboxComponent;
//   subNodur?: Subnoduri[];
// }

// interface TreeDataComponent {
//   checkbox: CheckboxComponent;
//   subNodur?: Subnoduri[];
// }

// const TREE_DATA: TreeDataComponent[] = [
//   {
//     checkbox: null,
//   }
// ];


interface SimulareDateCheckbox {
  checkbox: boolean;
}

const SIMULARE_DATE: SimulareDateCheckbox[] = [
  {
    checkbox: null,
  },
  {
    checkbox: null,
  },
  {
    checkbox: null,
  },
  {
    checkbox: null,
  },
  {
    checkbox: null,
  },
  {
    checkbox: null,
  },
  {
    checkbox: null,
  },
  {
    checkbox: null,
  },
  {
    checkbox: null,
  },
];
// checkbox: AcsCheckboxComponent[];


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  numbers = [2, 6, 8, 13, 21];

  checked = false;

  color = '#868686d4';
  background: string = null;
  icoChecked = 'check_box';
  icoNotChecked = 'check_box_outline_blank';

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  Clicked() {
    console.log('#1 Clicked: ', this.checked, ' icoChecked:', this.icoChecked, 'icoNotChecked: ', this.icoNotChecked);
    if (this.checked) {
      console.log('true');
      this.checked = false;
      return;
    }
    if (!this.checked) {
      console.log('false');
      this.checked = true;
      return;
    }
    console.log('#2 Clicked: ', this.checked, ' icoChecked:', this.icoChecked, 'icoNotChecked: ', this.icoNotChecked);
  }

}
