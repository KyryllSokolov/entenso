import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Card} from './card.model';
import {CardService} from '../../card.service';
import {ShoppingService} from '../../bascket/shopping.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  item: Card;

  constructor(private cardService: CardService, private route: ActivatedRoute, private shopping: ShoppingService) { }

  ngOnInit() {
    this.item = this.cardService.getProduct( +this.route.snapshot.params['id']);
  }
  addItemToBasket() {
    this.shopping.addItem(this.item);
  }

}
