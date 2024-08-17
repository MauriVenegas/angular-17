import { Component, inject, OnInit } from '@angular/core';
import { TareasService } from '../services/tareas.service';
import { FormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent implements OnInit {
  private _tareasService = inject(TareasService)

  listaTareas: string[] = []
  nuevaTarea: string = ''

  ngOnInit(): void {
    this.getTareas()
  }

  getTareas() {
    this.listaTareas = this._tareasService.getTareas()
  }

  deleteTarea(index: number) {
    this._tareasService.deleteTarea(index)
    this.getTareas()
  }

  addTarea() {
    console.log(this.nuevaTarea);

    this._tareasService.addTarea(this.nuevaTarea)
    this.nuevaTarea = ''
    this.getTareas()
  }

}
