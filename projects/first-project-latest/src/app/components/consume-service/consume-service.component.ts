import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { NewComponent } from '@components/new-component/new-component.component';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumeServiceComponent implements OnInit {
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
