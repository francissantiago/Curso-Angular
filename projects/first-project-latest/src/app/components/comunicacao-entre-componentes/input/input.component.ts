import { Component, Input, signal } from '@angular/core';

function toUppercase(value: string) {
  return value.toUpperCase();
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  public name = signal("Sem dados");

  @Input({
    // alias: "Apelido",
    required: true,
    transform: toUppercase
  }) set inputName(value: string) {
    this.name.set(value);
  }
}
