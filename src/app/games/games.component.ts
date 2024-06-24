import { Component } from '@angular/core';

@Component({
    selector: 'app-games',
    standalone: true,
    imports: [],
    template: `

  <ul>
  @for(game of games; track game.id){
        <li>
            Game{{game.id}}: {{game.name}}
        </li>
    }
  </ul>
  
  `,
    styles: ``
})
export class GamesComponent {
    games = [
        {
            id: 1,
            name: "Dark Soul REMASTERED"
        },
        {
            id: 2,
            name: "Dark Soul II"
        },
        {
            id: 3,
            name: "Dark Soul III"
        }
    ]
}
