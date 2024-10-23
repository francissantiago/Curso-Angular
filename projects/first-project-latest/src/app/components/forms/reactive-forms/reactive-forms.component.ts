import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  // Angular < 17
  // constructor(private _fb: FormBuilder) { }

  // Angular >= 17
  #fb = inject(FormBuilder);


  public profileForm = this.#fb.group({
    name: [''],
    myStacks: this.#fb.group({
      front: ['Angular'],
      back: ['PHP']
    }),
    myFavoriteFoods: this.#fb.array([['X-tudo']])
    // myFavoriteFoods: this._fb.array([['X-tudo']]) Angular < 17
  });

  public update() {
    this.profileForm.patchValue({
      name: 'Amanda',
      myStacks: {
        front: 'React',
        back: 'Python'
      },
    });
  }

  public addMyFavoriteFood(newFood: string) {
    const myFavoriteFoods = this.profileForm.get('myFavoriteFoods') as FormArray;
    const addNewFood = new FormControl(newFood);

    myFavoriteFoods.push(addNewFood);
  }

}
