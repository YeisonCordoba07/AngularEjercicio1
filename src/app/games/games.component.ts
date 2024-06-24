import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Juegos de {{ username }}</h3>
    <ul>
      @for(game of games; track game.id){
      <li (click)="gameFav(game.name)">Game{{ game.id }}: {{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteGameEvent = new EventEmitter<string>();

  gameFav(gameName: string) {
    this.addFavoriteGameEvent.emit(gameName);
  }
  games = [
    {
      id: 1,
      name: 'Dark Soul REMASTERED',
    },
    {
      id: 2,
      name: 'Dark Soul II',
    },
    {
      id: 3,
      name: 'Dark Soul III',
    },
  ];
}
