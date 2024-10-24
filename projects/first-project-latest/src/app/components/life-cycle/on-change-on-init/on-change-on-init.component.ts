import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-on-change-on-init',
  standalone: true,
  imports: [],
  templateUrl: './on-change-on-init.component.html',
  styleUrl: './on-change-on-init.component.scss'
})
export class OnChangeOnInitComponent implements OnChanges {
  @Input() public myNumber = 0;

  // Construtor ou inicializador
  constructor(private fb: FormBuilder) { }

  // Changes Detections
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
    if (changes['myNumber'].previousValue === 5) {
      alert('Deu Bom');
    }
  }
}
