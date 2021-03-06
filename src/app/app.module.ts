import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersModule } from './orders/orders.module';
import { SiteFrameworkModule } from './orders/products/site-framework/site-framework.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, OrdersModule, SiteFrameworkModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
