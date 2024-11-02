import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, signal, SimpleChanges, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder } from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {
  public myNumber = signal(0);
  @Input() set inputMyNumber(value: number) {
    this.myNumber.set(value);
  }
  public myText = signal('Francis Santiago');

  // Angular < 17
  // private _destroy$ = timer(0, 1000).subscribe({
  //   next: (next) => console.log('next', next),
  //   error: (error) => console.log('error', error),
  //   complete: () => console.log('Complete!')
  // });

  // Angular >= 17
  // private _destroy$ = timer(0, 1000)
  //   .pipe(takeUntilDestroyed())
  //   .subscribe({
  //     next: (next) => console.log('next', next),
  //     error: (error) => console.log('error', error),
  //     complete: () => console.log('Complete!')
  //   });

  // Construtor ou inicializador
  constructor(private fb: FormBuilder) { }

  // Changes Detections
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges', changes);
  }

  // ngOnInit
  ngOnInit(): void {
    // console.log('ngOnInit');
  }

  // ngDoCheck
  ngDoCheck(): void {
    // console.log('ngDoCheck');
  }

  // ngAfterContentInit
  @ContentChild('text') public text!: ElementRef;
  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit');
    // console.log(this.text.nativeElement.innerText);
  }

  // ngAfterContentChecked
  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked');
  }

  // ngAfterViewInit
  @ViewChild('content') public content!: ElementRef;
  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit');
    // console.log(this.content.nativeElement.innerText);
    // this.content.nativeElement.innerText = 'Life Cycle 2';
    // console.log(this.content.nativeElement.innerText);
  }

  // ngAfterViewChecked
  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked');
  }
  // ngOnDestroy
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    // Angular < 17
    // this._destroy$.unsubscribe();
  }
}