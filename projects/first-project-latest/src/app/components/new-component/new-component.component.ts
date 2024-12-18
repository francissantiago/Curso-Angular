import { Component, inject } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss'
})
export class NewComponent {
  public name = 'New Component';

  // Angular >= 17
  #apiService = inject(ApiService);

  // Angular < 17
  // constructor(
  //   private _apiService: ApiService
  // ){}

  ngOnInit(): void {
    // Angular >= 17
    // Consome Serviço
    console.log(this.#apiService.name());

    // Atualiza o valor
    this.#apiService.name.set('Francis Santiago 2')
    setTimeout(() => {
      console.log(this.#apiService.name())
    }, 2000);

    // Angular < 17
    // Consome Serviço
    this.#apiService.name$.subscribe({
      next: (next) => console.log(next),
      error: (error) => console.log(error),
      complete: () => console.log("complete!"),
    });

    // Atualiza o valor
    this.#apiService.name$.next('Francis Santiago $$');
  }

}
