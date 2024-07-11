import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [GamesComponent],
  template: `
  <h3>Los Juegos favoritos de {{username}}</h3>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  // Recibe el 'username' desde el padre 'user'
  @Input() username = '';
  // Crea un evento Emitter para enviar un valor el padre 
  @Output() addFavoriteEvent = new EventEmitter<string>();
  games = [
    {
      id: 1,
      name: 'Uncharted 4'
    }, {
      id: 2,
      name: 'The Last of Us'
    }, {
      id: 3,
      name: 'God of War'
    }
  ]
  fav(gameName: string) {
    // Envía gameName al padre 'user'
    this.addFavoriteEvent.emit(gameName);
  }
}
