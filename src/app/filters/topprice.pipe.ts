import { Pipe, PipeTransform } from '@angular/core';
import {Card} from "../cardlist/card/card.model";

@Pipe({
  name: 'topprice'
})
export class ToppricePipe implements PipeTransform {

  transform(items: Card[], topPrice: any): any {
    if (!topPrice) {
      return items;
    } else {
      return items.filter( item => {
        return item.price <= topPrice;
      });
    }
  }

}
