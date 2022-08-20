import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baking',
  templateUrl: './baking.component.html',
  styleUrls: ['./baking.component.scss']
})
export class BakingComponent implements OnInit {

  private poupanca: number = 10;
  private carteira: number = 50;

  constructor() { }

  ngOnInit() {
  }

get getSacar(): number {
  return this.poupanca;
}
  sacar(valor: string): number | undefined{
    const sacar = Number(valor)

    if(isNaN(sacar) || this.poupanca < sacar){
      return
    }

    this.poupanca -= sacar;

    return this.carteira += sacar
  }

  get getCarteira() :number {
  return this.carteira;
  }
  setDepositar(valor: string): number | undefined {
    const depositar = Number(valor)
    if(isNaN(depositar) || this.carteira < depositar) {
      return;
    }
    this.carteira -= depositar
    return this.poupanca += depositar
  }
}
