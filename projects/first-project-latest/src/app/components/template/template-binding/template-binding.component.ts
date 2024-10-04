import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Francis Santiago';
  public age = 33;
  public test = this.age > 18 ? 'Maior' : 'Menor'
  public isDisabled = true;
  public srcValue = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQheGKyogVjroM8XX4446c8Mlt1ku91IMM_A&s'
  public isTextDecoration = this.age >= 33 ? 'underline' : 'none';

  public sum(val1: number, val2: number) {
    return val1 + val2;
  }

  public sumEventBinding() {
    return this.age++;
  }

  public subEventBinding() {
    return this.age--;
  }

  public onKeyDown(event: Event) {
    return console.log(event);
  }

  public onMouseEvent(event: MouseEvent){
    return console.log({
      clientX: event.clientX,
      clientY: event.clientY
    });
  }
}
