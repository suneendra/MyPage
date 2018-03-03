import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { CoverPageComponent } from './cover-page/cover-page.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    CoverPageComponent,
    MenuComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
