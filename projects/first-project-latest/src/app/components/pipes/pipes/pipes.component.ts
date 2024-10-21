import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  public date = signal(new Date());
  public json = signal([
    { name: 'Francis Santiago' }
  ]);

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(1000));
}
