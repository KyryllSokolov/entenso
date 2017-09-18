import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Card} from '../cardlist/card/card.model';

@Injectable()
export class ShoppingService {
  itemsChanged = new Subject<Card[]>();
  private items: Card[] = [];

  getItems() {
    return this.items.slice();
  }
  addItem(item: Card) {
    this.items.push(item);
    this.itemsChanged.next(this.items.slice());
  }
  deleteItem(index: number) {
    this.items.splice(index, 1);
    this.itemsChanged.next(this.items.slice());
  }
  getAmount(){
    return this.items.length;
  }

}
