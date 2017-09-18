import {Component, Input, OnInit} from '@angular/core';
import {ShoppingService} from "../bascket/shopping.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private shopping: ShoppingService) { }

  ngOnInit() {
  }
  amountGettter() {
    return this.shopping.getAmount();
  }

}
