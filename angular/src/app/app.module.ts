import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlackjackComponent } from './blackjack/blackjack.component';
import { PokerComponent } from './poker/poker.component';
import { CasinoComponent } from './casino/casino.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BlackjackComponent,
    PokerComponent,
    CasinoComponent,
    FantasyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
