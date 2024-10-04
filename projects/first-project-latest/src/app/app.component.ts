import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from "./components/new-component/new-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent],
  template: `
  <router-outlet />
  <h2>Meu App Component</h2>
  <app-new-component />
  `,
})
export class AppComponent {
  title = 'first-project-latest';
}
