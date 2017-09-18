import {Routes} from '@angular/router';
import { CardlistComponent } from './cardlist/cardlist.component';
import { CardComponent } from './cardlist/card/card.component';
import { BascketComponent } from './bascket/bascket.component';
export const AppRoutes: Routes = [
  { path: 'list', component: CardlistComponent },
  { path: 'card/:id', component: CardComponent },
  { path: 'basket', component: BascketComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];
