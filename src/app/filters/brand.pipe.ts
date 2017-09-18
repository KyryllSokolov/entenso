import { Pipe, PipeTransform } from '@angular/core';
import {Card} from '../cardlist/card/card.model';

@Pipe({
  name: 'brand'
})
export class BrandPipe implements PipeTransform {

  transform(items: Card[], producer: any): any {
    if (producer == ('ALL' || undefined)) {
      return items;
    } else if (producer.some) {
      return items.filter(item => producer.some(selection => item.producer === selection));
    }
  }

}
