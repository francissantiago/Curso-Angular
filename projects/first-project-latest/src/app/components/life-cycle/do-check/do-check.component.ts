import { Component, DoCheck, Input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-do-check',
  standalone: true,
  imports: [],
  templateUrl: './do-check.component.html',
  styleUrl: './do-check.component.scss'
})
export class DoCheckComponent implements OnChanges, OnInit, DoCheck {
  @Input() public myNumber = 0;
  public myText = signal('Francis Santiago');

  // Construtor ou inicializador
  constructor(private fb: FormBuilder) { }

  // Changes Detections
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
}
