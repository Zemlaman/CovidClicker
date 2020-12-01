import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ShopComponent } from './shop/shop.component';
import { ButtonComponent } from './button/button.component';
import { ScoreComponent } from './score/score.component';
import { NewsComponent } from './news/news.component';
import { AdsComponent } from './ads/ads.component';
import { EventsComponent } from './events/events.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    ShopComponent,
    ButtonComponent,
    ScoreComponent,
    NewsComponent,
    AdsComponent,
    EventsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
