import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size = 40;
  font = 'Helvetica';
  color = 'red';

  classes = ["green-title", "smal-title"];

  uderline = ['underline-title'];

  constructor() { }

  ngOnInit(): void {
  }

}
