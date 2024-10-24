import { AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, signal, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-after-content-init',
  standalone: true,
  imports: [],
  templateUrl: './after-content-init.component.html',
  styleUrl: './after-content-init.component.scss'
})
export class AfterContentInitComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterContentInit {
  @Input() public myNumber = 0;
  public myText = signal('Francis Santiago');

  // Construtor ou inicializador
  constructor(private fb: FormBuilder) { }

  // Changes Detections
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  // ngOnInit
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  // ngDoCheck
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  // ngAfterContentInit
  @ContentChild('text') public text!: ElementRef;
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    console.log(this.text.nativeElement.innerText);
  }

  // ngAfterViewInit
  @ViewChild('content') public content!: ElementRef;
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.content.nativeElement.innerText);
    this.content.nativeElement.innerText = 'Life Cycle 2';
    console.log(this.content.nativeElement.innerText);
  }
}