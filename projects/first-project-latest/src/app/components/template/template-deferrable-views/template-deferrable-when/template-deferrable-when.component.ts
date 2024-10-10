import { Component } from '@angular/core';
import { NewComponent } from '../../../new-component/new-component.component';
import { delay, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-deferrable-when',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './template-deferrable-when.component.html',
  styleUrl: './template-deferrable-when.component.scss'
})
export class TemplateDeferrableWhenComponent {
  public isTrue = false;

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(5000));

}
