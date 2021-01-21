import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tool-header',
  templateUrl: './tool-header.component.html',
  styleUrls: ['./tool-header.component.scss']
})
export class ToolHeaderComponent implements OnInit {

  @Input()
  headerText = 'Tool Header';


  constructor() { }

  ngOnInit() {
  }

}
