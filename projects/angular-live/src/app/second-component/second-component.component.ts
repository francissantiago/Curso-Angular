import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.scss'
})
export class SecondComponentComponent {
  @Input('my-prop') myProp: string = '';
  @Output() newItemEvent = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {

  }

  handleClick(): void {
    this.newItemEvent.emit("Oi paii!");
  }

}
