import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpxnComponent } from './spxn/spxn.component';
import { SpmComponent } from './spm/spm.component';
import { HttpClientModule } from '@angular/common/http';
import { SpnbComponent } from './spnb/spnb.component';
import { HomeComponent } from './home/home.component';

import { ProductDetialComponent } from './product-detial/product-detial.component';
import { CommonModule } from '@angular/common';
import { CartlistComponent } from './cartlist/cartlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
// import { CartlistComponent } from './cartlist/cartlist.component';
@NgModule({
  declarations: [
    AppComponent,
    SpxnComponent,
    SpmComponent,
    SpnbComponent,
    HomeComponent,

    ProductDetialComponent,
    CartlistComponent,
    CheckoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
