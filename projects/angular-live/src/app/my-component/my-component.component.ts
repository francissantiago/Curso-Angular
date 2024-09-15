import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products-service.service';
import { map, Observable } from 'rxjs';

interface Drink {
  idDrink: string,
  strDrinkThumb: string,
  strDrink: string
}

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss'
})

export class MyComponentComponent implements OnInit {

  // Utilização do $ no nome da variável para fácil identificação de que se trata de um Observable
  productList$: Observable<Drink[]> = new Observable<Drink[]>();

  teste = "MEU TEXTO DE TESTE"

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productList$ = this.productService.fecthData('lemon').pipe(
      map((response) => {
        return response.drinks;
      })
    );
  }

  handleEvent($event: string) {
    console.log("evento aconteceu");
    console.log("evento passado: ", $event);
  }
}
