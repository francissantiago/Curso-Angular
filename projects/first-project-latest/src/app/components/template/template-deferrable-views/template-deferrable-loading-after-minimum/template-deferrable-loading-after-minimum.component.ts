import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { NewComponent } from '../../../new-component/new-component.component';

@Component({
  selector: 'app-template-deferrable-loading-after-minimum',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './template-deferrable-loading-after-minimum.component.html',
  styleUrl: './template-deferrable-loading-after-minimum.component.scss'
})
export class TemplateDeferrableLoadingAfterMinimumComponent {
  public isTrue = false;

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(5000));
}
