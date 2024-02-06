import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {


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
