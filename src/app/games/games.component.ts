import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Juegos de <span>{{ username }}</span></h3>
    <ul>
      @for(game of games; track game.id){
        <li 
            (click)="emitFav(game.name)">
            Game{{ game.id }}: {{ game.name }}
        </li>
      }
    </ul>
  `,
  styles: `
  span{
    color: tomato;
  }

  li:hover{
    color:goldenrod;
    scale: 1.1;
  }
  `,
})
export class GamesComponent {
  @Input() username: string = "";

  @Output() addFavoriteGameEvent = new EventEmitter<string>();

  //El parametro es lo que se pasa a $event
  emitFav(gameName: string) {
    this.addFavoriteGameEvent.emit("👍 "+gameName+" 🔥");
  }

  games = [
    {
      id: 1,
      name: 'Dark Soul REMASTERED',
    },
    {
      id: 2,
      name: 'Dark Soul II: scholar of the first sin',
    },
    {
      id: 3,
      name: 'Dark Soul III',
    },
  ];
}
