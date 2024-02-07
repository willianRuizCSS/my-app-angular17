import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  @Input() username: string = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();
  fav(gameName:string){
    this.addFavoriteEvent.emit(gameName);

  }

  games = [{
    id: 1,
    name: 'Uncaherted 4'
  },
  {
    id: 2,
    name: 'Horizont 3'
  },
  {
    id: 3,
    name: 'DidHonored'
  }]
}
