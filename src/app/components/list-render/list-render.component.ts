import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals = [
    {name: "Spike", type: 'Cão'},
    {name: "Tom", type: 'Gato'},
    {name: "Jerry", type: 'Rato'},
    {name: "Quacker", type: 'Pato'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
