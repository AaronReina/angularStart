import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `<h1>{{ titulo }}</h1>
    <button (click)="acumular(1)">+1</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-1)">-1</button> `,
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent {
  titulo: string = 'bases';
  numero: number = 10;
  acumular(valor: number): void {
    this.numero += valor;
  }
}
