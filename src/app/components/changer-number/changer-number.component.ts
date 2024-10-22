import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-changer-number',
  templateUrl: './changer-number.component.html',
  styleUrls: ['./changer-number.component.css']
})
export class ChangerNumberComponent implements OnInit {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.changeNumber.emit();
  
  }
}
