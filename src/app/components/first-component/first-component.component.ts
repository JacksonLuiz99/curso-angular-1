import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Jackson Luiz';
  age: number = 27;
  job = 'Desenvolvedor';
  hobbies = ['viajar', 'Jogar', 'Estudar'];
  car = {
    name: 'Sandero',
    year: 2016,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
