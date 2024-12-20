import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  animal?: Animal;

  constructor(private listeSevice: ListService, private route: ActivatedRoute)  {
    this.getAnimal() 
  }

  ngOnInit(): void {}

  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listeSevice.getItem(id).subscribe((animal) => (this.animal = animal));
  }

}
