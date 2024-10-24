import { AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, signal, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-after-view-init',
  standalone: true,
  imports: [],
  templateUrl: './after-view-init.component.html',
  styleUrl: './after-view-init.component.scss'
})
export class AfterViewInitComponent  implements OnChanges, OnInit, DoCheck, AfterViewInit {
  @Input() public myNumber = 0;
  public myText = signal('Francis Santiago');

  @ViewChild('content') public content!: ElementRef;
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

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.content.nativeElement.innerText);
    this.content.nativeElement.innerText = 'Life Cycle 2';
    console.log(this.content.nativeElement.innerText);
  }
}
