import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animalDetails = ``;

  constructor( private listeService: ListService) {
    this.getAnimals()
  }
  

  ngOnInit(): void {
  }
  showAge(animal: Animal): void {
    this.animalDetails = `O Personagem ${animal.name} tem ${animal.age} anos`;
  }

  removeAnimal(animal: Animal){
    this.animals = this.animals.filter((a) => animal.name !== a.name );
    this.listeService.remove(animal.id).subscribe();
    
  }

  getAnimals(): void{
    this.listeService.getAll().subscribe((animals) => (this.animals = animals ));
  }

}
