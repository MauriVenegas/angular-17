import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private localeStorageKey: string = ''

  constructor() { }

  getTareas(): string[] {
    return JSON.parse(localStorage.getItem(this.localeStorageKey) as string) || [];
  }

  addTarea(tarea: string) {
    const tareas = this.getTareas();
    tareas.push(tarea);
    localStorage.setItem(this.localeStorageKey, JSON.stringify(tareas));
  }

  deleteTarea(index: number) {
    const tareas = this.getTareas();
    tareas.splice(index, 1);
    localStorage.setItem(this.localeStorageKey, JSON.stringify(tareas));
  }

}
