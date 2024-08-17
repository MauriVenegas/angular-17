# Angular17App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## 🛠️ Tecnologías
### Input()
Recive propiedades desde el padre
```typescript
// Enviada desde el padre
<app-games username="{{ username }}" />
// recibe desde el hijo
// Recibe el 'username' desde el padre 'user'
@Input() username = '';
```

### Output()
Envía propiedades al padre
```typescript
// Desde el hijo
// Crea un evento Emitter para enviar un valor el padre 
@Output() addFavoriteEvent = new EventEmitter<string>();

fav(gameName: string) {
  // Envía gameName al padre 'user'
  this.addFavoriteEvent.emit(gameName);
}

//Desde el padre
// Recibe el evento enviado desde el hijo
<app-games (addFavoriteEvent)="getFavorite($event)" />

favGame = ''
getFavorite(gameName: string) {
  this.favGame = gameName;
}
```

### @defer
  Prioriza la carga de los elementos del componente envuelto según prioridad, es decir realiza una carga diferida permitiendo cargar archivos pesados como una imagem cuando la carga no este tan saturada
  
  Ejemplo: [./src/app/app.component.html](./src/app/app.component.html)
```html
@defer {
  <app-comments />
}
```

#### @placeholder
Conserva el espacio mientras se carga el contenido
```html
@defer {
  <app-comments />
} @placeholder {
  <p>Aquí se guarda es espacio mientras se esta cargando </p>
}
```

#### on viewport
Se van cargando los elementos a medida que se vallan visualizando (mientras se va haciendo scroll)

```html
@defer (on viewport) {
  <app-comments />
} @placeholder {
  <p>Aquí se guarda es espacio mientras se esta cargando </p>
}
```
#### @loading
Carga un componente mientras se esta cargando el componente envuelto

```html
@defer (on viewport) {
  <app-comments />
} @placeholder {
  <p>Aquí se guarda es espacio mientras se esta cargando </p>
} @loading {
  <p>Cargando comentarios...</p>
}
```

