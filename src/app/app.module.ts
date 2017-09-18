import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';

import { AppComponent } from './app.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { CardComponent } from './cardlist/card/card.component';
import { BascketComponent } from './bascket/bascket.component';
import { NavigationComponent } from './navigation/navigation.component';

import { AppRoutes } from './routes';

import { CardService } from './card.service';
import { ShoppingService } from './bascket/shopping.service';

import { PricePipe } from './filters/price.pipe';
import { AvailabilityPipe } from './filters/availability.pipe';
import { BrandPipe } from './filters/brand.pipe';
import { NamePipe } from './filters/name.pipe';
import { ToppricePipe } from './filters/topprice.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardlistComponent,
    CardComponent,
    BascketComponent,
    NavigationComponent,
    PricePipe,
    AvailabilityPipe,
    BrandPipe,
    NamePipe,
    ToppricePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularMultiSelectModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [CardService, ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
