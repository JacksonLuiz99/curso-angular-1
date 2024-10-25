import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {name: "Tom", type: 'Gato', age: 5},
    {name: "Jerry", type: 'Rato', age: 3},
    {name: "Spike", type: 'Bulldog', age: 6},
    {name: "Tyke", type: 'Filhote de Bulldog', age: 1},
    {name: "Quacker", type: 'Filhote de Pato', age: 2},
  ];

  animal: Animal = {
    name: 'Teste',
    type: 'Alguma Coisa',
    age: 10,
  }
  animalDetails = ``;

  constructor() { }

  ngOnInit(): void {
  }
  showAge(animal: Animal): void {
    this.animalDetails = `O Personagem ${animal.name} tem ${animal.age} anos`;
  }

}
