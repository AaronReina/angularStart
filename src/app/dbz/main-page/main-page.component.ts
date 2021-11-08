import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  get nuevo() {
    return this.dbzService.nuevo;
  }

  agregar() {
    this.dbzService.agregar();
  }
  constructor(private dbzService: DbzService) {
    this.dbzService;
  }
}
