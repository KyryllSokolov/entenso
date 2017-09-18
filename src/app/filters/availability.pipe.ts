import { Pipe, PipeTransform } from '@angular/core';
import {Card} from '../cardlist/card/card.model';

@Pipe({
  name: 'availability'
})
export class AvailabilityPipe implements PipeTransform {

  transform(items: Card[], light: boolean): any {
    if (light === false) {
      return items;
    } else {
      return items.filter(item => {
        return item.availability;
      });
    }
  }

}
