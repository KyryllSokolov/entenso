import {Component, OnChanges, OnInit} from '@angular/core';
import {Card} from './card/card.model';
import {CardService} from '../card.service';
import {ShoppingService} from "../bascket/shopping.service";

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent implements OnInit, OnChanges {
  visibleItems: Card[] = [];
  dropdownList = [];
  dropdownSettings = [];
  onlyAvailable = false;
  brand = 'ALL';
  prodName: string;
  brands: string[] = [];
  fromPrice = 100;
  topPrice = 1700;

  constructor(private cardService: CardService, private shopping: ShoppingService) {
    this.visibleItems = this.cardService.getProducts();
  }

  ngOnInit() {
    this.getBrands();
    /*this.dropdownList = this.brands.slice();
    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select brands',
      selectAllText: 'ALL',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: ""
    };*/
  }
  ngOnChanges() {
    this.visibleItems = this.cardService.getProducts();
  }

  getBrands() {
    const brandsPull: any[] = [];
    for (const item of this.visibleItems) {
      brandsPull.push(item.producer.toString())
    }
    this.brands = Array.from(new Set(brandsPull));
  }

  toggleLight() {
    this.onlyAvailable = !this.onlyAvailable;
  }
  addToBasket(index: number) {
    this.shopping.addItem(this.visibleItems[index]);
  }


}
