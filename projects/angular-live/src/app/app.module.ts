import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentModule } from './my-component/my-component.module';
import { MyComponentComponent } from './my-component/my-component.component';
import { ProductsService } from './services/products-service.service';
import { HttpClientModule } from '@angular/common/http';
import { SecondComponentComponent } from './second-component/second-component.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    SecondComponentComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ProductsService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
