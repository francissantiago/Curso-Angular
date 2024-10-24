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
import { PaiOuMaeComponent } from './components/comunicacao-entre-componentes/pai-ou-mae/pai-ou-mae.component';
import { PipesComponent } from './components/pipes/pipes/pipes.component';
import { TemplateDrivenFormsComponent } from './components/forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';
import { ContentComponent } from './components/content/content.component';
import { HostElementsComponent } from './components/host-elements/host-elements.component';
import { OnChangeOnInitComponent } from './components/life-cycle/on-change-on-init/on-change-on-init.component';
import { DoCheckComponent } from './components/life-cycle/do-check/do-check.component';
import { AfterViewInitComponent } from './components/life-cycle/after-view-init/after-view-init.component';
import { AfterContentInitComponent } from './components/life-cycle/after-content-init/after-content-init.component';
import { AfterContentCheckedComponent } from './components/life-cycle/after-content-checked/after-content-checked.component';
import { OnDestroyComponent } from './components/life-cycle/on-destroy/on-destroy.component';

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
    SignalsEffectComponent,
    PaiOuMaeComponent,
    PipesComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    ContentComponent,
    HostElementsComponent,
    OnChangeOnInitComponent,
    DoCheckComponent,
    AfterViewInitComponent,
    AfterContentInitComponent,
    AfterContentCheckedComponent,
    OnDestroyComponent
  ],
  template: `
  <!-- <router-outlet /> -->
  <!-- <app-template-binding /> -->
  <!-- <app-template-variables /> -->
  <!-- <app-template-control-flow /> -->
  <!-- <app-signals-effect /> -->
  <!-- <app-pai-ou-mae /> -->
  <!-- <app-pipes /> -->
  <!-- <app-template-driven-forms /> -->
  <!-- <app-reactive-forms /> -->
  <!-- <app-content>
    <header id="header">
      <p>Header</p>
    </header>
    <p text>Text 1</p>
    <p text2>Text 2</p>
    <p text3>Text 3</p>
    <footer class="footer">
      <p>Footer</p>
    </footer>
  </app-content> -->
  <!-- <app-host-elements /> -->
  <!-- <app-on-change-on-init [myNumber]="number" /> -->
  <!-- <app-do-check [myNumber]="number" /> -->
  <!-- <app-after-view-init [myNumber]="number" /> -->
  <!-- <app-after-content-init [myNumber]="number">
    <p #text>Text</p>
  </app-after-content-init> -->
  <!-- <app-after-content-checked [myNumber]="number">
    <p #text>Text</p>
  </app-after-content-checked> -->
  
  <h1>Curso de Angular</h1>
  @if(boolean){
    <app-on-destroy [myNumber]="number">
      <p #text>Text</p>
    </app-on-destroy>
  }

  <button (click)="boolean = !boolean">Destroy Component</button>
  `,
})
export class AppComponent {
  public number = 1;
  public boolean = true;

}
