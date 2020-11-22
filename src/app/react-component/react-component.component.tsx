import { Component } from '@angular/core';

@Component({
  selector: 'app-react-component',
  // Changes to this file does trigger rebuild as expected but
  // any changes to the following files (templateUrl and styleUrls) does
  // not trigger rebuild when this component is defined as `.tsx`.
  templateUrl: './react-component.component.html',
  styleUrls: ['./react-component.component.scss']
})
export class ReactComponentComponent {}
