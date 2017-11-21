import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy  } from '@angular/common';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductAddComponent } from './product/product-add.component';
import {ProductService} from "./product/product.service";
import { ProductUpdateComponent } from './product/product-update.component';

import {appRouting} from "./app.routing";



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      appRouting
  ],
  providers: [ProductService,
                { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
