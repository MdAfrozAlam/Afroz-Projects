import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AlertDetailsComponent } from './alert-details/alert-details.component';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CheckoutformComponent } from './checkoutform/checkoutform.component';
import { FormsModule } from '@angular/forms';
import { LibraryDashboardComponent } from './library-dashboard/library-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    AlertDetailsComponent,
    ProductShopComponent,
    LandingpageComponent,
    CartItemsComponent,
    CheckoutformComponent,
    LibraryDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
