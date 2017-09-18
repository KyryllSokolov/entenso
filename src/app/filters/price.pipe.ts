import { Pipe, PipeTransform } from '@angular/core';
import {Card} from '../cardlist/card/card.model';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(items: Card[], fromP: any): any {
    if (fromP === undefined) {
      return items;
    } else {
      return items.filter(item => {
        return item.price >= +fromP;
      });
    }
  }

}
