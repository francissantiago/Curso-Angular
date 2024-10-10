import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { NewComponent } from "./components/new-component/new-component.component";
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { TemplateDeferrableWhenComponent } from "./components/template/template-deferrable-views/template-deferrable-when/template-deferrable-when.component";
import { TemplateDeferrablePlaceholderMinimumComponent } from './components/template/template-deferrable-views/template-deferrable-placeholder-minimum/template-deferrable-placeholder-minimum.component';
import { TemplateDeferrableLoadingAfterMinimumComponent } from './components/template/template-deferrable-views/template-deferrable-loading-after-minimum/template-deferrable-loading-after-minimum.component';
import { TemplateDeferrableErrorComponent } from './components/template/template-deferrable-views/template-deferrable-error/template-deferrable-error.component';
import { SignalsComponent } from './components/signals/signals/signals.component';
import { SignalsEffectComponent } from './components/signals/signals-effect/signals-effect.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NewComponent,
    TemplateBindingComponent,
    TemplateVariablesComponent,
    TemplateControlFlowComponent,
    TemplateDeferrableViewsComponent,
    TemplateDeferrableWhenComponent,
    TemplateDeferrablePlaceholderMinimumComponent,
    TemplateDeferrableLoadingAfterMinimumComponent,
    TemplateDeferrableErrorComponent,
    SignalsComponent,
    SignalsEffectComponent
],
  template: `
  <!-- <router-outlet /> -->
  <!-- <app-template-binding /> -->
  <!-- <app-template-variables /> -->
  <!-- <app-template-control-flow /> -->
  <h1>Curso de Angular</h1>
  <app-signals-effect />
  `,
})
export class AppComponent {
  title = 'first-project-latest';
}
