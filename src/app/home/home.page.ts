import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cantidadQ: number = 0;
  resultadoD: number = 0;

  constructor() {}

  calcularDolares (){
    const tipoCambio = 8.00;
    this.resultadoD = this.cantidadQ / tipoCambio;
  }

}
