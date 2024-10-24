import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, signal, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-after-content-checked',
  standalone: true,
  imports: [],
  templateUrl: './after-content-checked.component.html',
  styleUrl: './after-content-checked.component.scss'
})
export class AfterContentCheckedComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked {
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

  // ngAfterContentChecked
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  // ngAfterViewInit
  @ViewChild('content') public content!: ElementRef;
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.content.nativeElement.innerText);
    this.content.nativeElement.innerText = 'Life Cycle 2';
    console.log(this.content.nativeElement.innerText);
  }

  // ngAfterViewChecked
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
}