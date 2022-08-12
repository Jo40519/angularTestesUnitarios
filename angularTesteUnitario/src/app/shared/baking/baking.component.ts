import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baking',
  templateUrl: './baking.component.html',
  styleUrls: ['./baking.component.scss']
})
export class BakingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  sacar(valor: string): number{
    const sacar = Number(valor)

    console.log(sacar)

    return sacar
  }
}
