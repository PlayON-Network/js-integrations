import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasinoComponent } from './casino/casino.component';
import { PokerComponent } from './poker/poker.component';
import { BlackjackComponent } from './blackjack/blackjack.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { FantasyWithSkeletonComponent } from './fantasy-with-skeleton/fantasy-with-skeleton.component';

const routes: Routes = [
  { path: 'blackjack', component: BlackjackComponent },
  { path: 'poker', component: PokerComponent },
  { path: 'casino', component: CasinoComponent },
  { path: 'fantasy', component: FantasyComponent },
  { path: 'fantasy-with-skeleton', component: FantasyWithSkeletonComponent },
  { path: '', redirectTo: '/blackjack', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
