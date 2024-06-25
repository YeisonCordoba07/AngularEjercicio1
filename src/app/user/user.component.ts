import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    username = "";

    isLoggedIn = true;
    
    favGame = "";

    setFavoriteGame(gameName: string){
        this.favGame = gameName;
    }

    updateUserName(p:Event){
        /*const inputElement = p.target as HTMLInputElement;*/
        if((p.target as HTMLInputElement).value !== ""){

            this.username = (p.target as HTMLInputElement).value;
        }else{
            this.username = "N/A";
        }
    }
}
