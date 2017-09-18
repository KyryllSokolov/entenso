import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingService} from './shopping.service';
import {Card} from '../cardlist/card/card.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-bascket',
  templateUrl: './bascket.component.html',
  styleUrls: ['./bascket.component.css']
})
export class BascketComponent implements OnInit, OnDestroy {
  items: Card[];
  private subscription: Subscription;

  constructor(private shopping: ShoppingService) { }

  ngOnInit() {
    this.items = this.shopping.getItems();
    this.subscription = this.shopping.itemsChanged.subscribe(
      (items: Card[]) => {
        this.items = items;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  totalPrice() {
    return this.items.reduce((sum, item) => sum += item.price, 0);
  }
  onDeleteItem(index: number) {
    this.shopping.deleteItem(index);
  }

}
