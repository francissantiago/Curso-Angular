import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals-effect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals-effect.component.html',
  styleUrl: './signals-effect.component.scss'
})
export class SignalsEffectComponent {
  public firstName = signal('Francis ');
  public lastName = signal('Santiago');

  public fullName = computed(() => {
    return this.firstName() + this.lastName();
  });

  public array = signal([1]);

  /*
    effect - raramente são necessários na maioria dos códigos,
    mas podem ser úteis em circunstâncias específicas.
      - Registro de dados sendo exibidos e quando eles mudam, seja para análise ou como ferramenta de depuração.
      - Manter os dados sincronizados com o window.localStorage.
      - Adicionando comportamento DOM personalizado que não pode ser expresso com sintaxe de modelo.
      - Executar renderização personalizada em um <canvas>, biblioteca de gráficos
        ou outra biblioteca de UI de terceiros.
  */

  constructor() {
    effect(() => {
      console.log(this.firstName());
      console.log(this.array());
    })
  }

  public updateName() {
    return this.firstName.set("João ");
  }

  public updateArray() {
    this.array.update((oldValue: Array<number>) => {
      return [...oldValue, oldValue.length + 1];
    });
  }
}
