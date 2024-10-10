import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { NewComponent } from '../../../new-component/new-component.component';

@Component({
  selector: 'app-template-deferrable-error',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './template-deferrable-error.component.html',
  styleUrl: './template-deferrable-error.component.scss'
})
export class TemplateDeferrableErrorComponent {
  public isTrue = false;

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(5000));
}
