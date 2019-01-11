import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input('isFav') isSelected : boolean;

  @Output('change') change = new EventEmitter();

  onClick(){
      this.isSelected = !this.isSelected;
      this.change.emit({new : this.isSelected});
  }

  constructor() { }

  ngOnInit() {
  }

}
