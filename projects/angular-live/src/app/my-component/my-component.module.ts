import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { MyComponentComponent } from './my-component.component';
import { ProductsService } from '../services/products-service.service';

@NgModule({
  declarations: [
    MyComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProductsService
  ],
  exports: [
    MyComponentComponent
  ]
})
export class MyComponentModule { }
