import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: string[] = ['pepe', 'juan', 'pepiño'];
  borrados: string[] = [];

  deleteHeroe(index: number): void {
    let arrCopy = this.heroes;
    const borrado = arrCopy.splice(index, 1);
    this.borrados.push(...borrado);
    this.heroes = arrCopy;
  }
}
