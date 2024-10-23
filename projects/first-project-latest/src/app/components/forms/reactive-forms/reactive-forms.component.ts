import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  public profileForm = new FormGroup({
    name: new FormControl(''),
    myStacks: new FormGroup({
      front: new FormControl('Angular'),
      back: new FormControl('PHP')
    }),
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

}
