import { Pipe, PipeTransform } from '@angular/core';
import {Card} from '../cardlist/card/card.model';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(items: Card[], name: string): any {
    if (name === undefined) {
      return items;
    } else {
      return items.filter(item => {
        return (item.name.toLowerCase().includes(name.toLowerCase())
        || item.description.toLowerCase().includes(name.toLowerCase())
        || item.producer.toLowerCase().includes(name.toLowerCase()));
      })
    }
  }

}
