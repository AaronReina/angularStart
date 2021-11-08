import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'pepe',
      poder: 100,
    },
  ];
  private _nuevo: Personaje = {
    nombre: 'pepe',
    poder: 100,
  };

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  get nuevo(): Personaje {
    return this._nuevo;
  }

  agregar() {
    this._personajes.push({
      nombre: this._nuevo.nombre,
      poder: this._nuevo.poder,
    });
  }
  constructor() {
    console.log('servicio incializado');
  }
}
