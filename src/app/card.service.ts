import { Injectable } from '@angular/core';
import {Card} from './cardlist/card/card.model';
import {Http, Response} from '@angular/http';

@Injectable()
export class CardService {
  products: Card[] = [
    new Card(1, '../assets/img/coat-black.jpg',
      'Black coat',
      'Was. Divide female, midst first above shall. Kind face over fly is fruit.' +
      ' Is creeping darkness him creepeth winged creepeth image had forth heaven.' +
      ' And unto Seas, herb kind and night fish light sixth.', 'ZARA', 134, true),
    new Card(2, '../assets/img/dress.jpg', 'Black dress', 'Place image creeping forth for tree she Winged' +
      ' of seas whales days face seed. Saw seasons open kind fruitful Whales made have grass of own fowl' +
      ' living spirit evening saying.', 'Tom Tailor', 250, true),
    new Card(3, '../assets/img/shoes.jpg', 'Classic shoes', 'Isnt darkness there every itself lesser lesser all.' +
      ' Given him abundantly be his appear years day Own were. The good kind Created air.' +
      ' Isnt female them waters first made stars morning. Lights fill. Our third given.', 'Oxford', 340, false),
    new Card(4, '../assets/img/skinny-jeans.jpg', 'Skinny jeans', 'So likeness called fill,' +
      ' set Replenish midst signs sea earth Every, shall. Forth firmament one days days man.' +
      ' Years. Image life replenish fowl, second their signs over air tree yielding.', 'Levis', 123, true),
    new Card(5, '../assets/img/skirt.jpg', 'Black skirt', 'Stars man every. Give second appear that' +
      ' female fly is saw morning hath make called itself upon midst isnt lesser sixth every that waters fly.' +
      ' Subdue had Over creeping second.', 'Cheaks', 450, false),
    new Card(6, '../assets/img/t-shirt.jpg', 'Teen t-shirt', 'Blessed bearing us saying fly beast,' +
      ' abundantly waters said brought make thing was, forth saying cant gathered spirit winged Herb' +
      ' called whales without, darkness place, fish created darkness green brought.', 'New Bloom', 136, true),
    new Card(7, '../assets/img/coat-black.jpg', 'Black coat', 'Was. Divide female, midst first above shall.' +
      ' Kind face over fly is fruit. Is creeping darkness him creepeth winged creepeth' +
      ' image had forth heaven. And unto Seas, herb kind and night fish light sixth.', 'ZARA', 1000, true),
    new Card(8, '../assets/img/dress.jpg', 'Black dress', 'Place image creeping forth for tree she' +
      ' Winged of seas whales days face seed. Saw seasons open kind fruitful Whales made have grass' +
      ' of own fowl living spirit evening saying.', 'Tom Tailor', 500, false),
    new Card(9, '../assets/img/shoes.jpg', 'Classic shoes', 'Isnt darkness there every itself' +
      ' lesser lesser all. Given him abundantly be his appear years day Own were. The good kind' +
      ' Created air. Isnt female them waters first made stars morning. Lights fill. Our third given.', 'Oxford', 1200, false),
    new Card(10, '../assets/img/skinny-jeans.jpg', 'Skinny jeans', 'So likeness called fill, set Replenish midst' +
      ' signs sea earth Every, shall. Forth firmament one days days man. Years. Image life replenish fowl, second' +
      ' their signs over air tree yielding.', 'Levis', 450, true),
    new Card(11, '../assets/img/skirt.jpg', 'Black skirt', 'Stars man every. Give second appear that female fly' +
      ' is saw morning hath make called itself upon midst isnt lesser sixth every that waters fly. Subdue had Over' +
      ' creeping second.', 'Cheaks', 137, false),
    new Card(12, '../assets/img/t-shirt.jpg', 'Teen t-shirt', 'Blessed bearing us saying fly beast, abundantly waters' +
      ' said brought make thing was, forth saying cant gathered spirit winged Herb called whales without,' +
      ' darkness place, fish created darkness green brought.', 'New Bloom', 134, true),
    new Card(13, '../assets/img/coat-black.jpg', 'Black coat', 'Was. Divide female, midst first above shall. Kind' +
      ' face over fly is fruit. Is creeping darkness him creepeth winged creepeth image had forth heaven. ' +
      'And unto Seas, herb kind and night fish light sixth.', 'ZARA', 450, true),
    new Card(14, '../assets/img/dress.jpg', 'Black dress', 'Place image creeping forth for tree she Winged of seas' +
      ' whales days face seed. Saw seasons open kind fruitful Whales made have grass of own fowl living' +
      ' spirit evening saying.', 'Tom Tailor', 375, false),
    new Card(15, '../assets/img/shoes.jpg', 'Classic shoes', 'Isnt darkness there every itself lesser lesser all.' +
      ' Given him abundantly be his appear years day Own were. The good kind Created air. Isnt female ' +
      'them waters first made stars morning. Lights fill. Our third given.', 'Oxford', 560, true),
    new Card(16, '../assets/img/skinny-jeans.jpg', 'Skinny jeans', 'So likeness called fill, set Replenish midst' +
      ' signs sea earth Every, shall. Forth firmament one days days man. Years. Image life replenish fowl, ' +
      'second their signs over air tree yielding.', 'Levis', 200, true),
    new Card(17, '../assets/img/skirt.jpg', 'Black skirt', 'Stars man every. Give second appear that female fly' +
      ' is saw morning hath make called itself upon midst isnt lesser sixth every that waters fly. ' +
      'Subdue had Over creeping second.', 'Cheaks', 156, true),
    new Card(18, '../assets/img/t-shirt.jpg', 'Teen t-shirt', 'Blessed bearing us saying fly beast, abundantly' +
      ' waters said brought make thing was, forth saying cant gathered spirit winged Herb called whales without,' +
      ' darkness place, fish created darkness green brought.', 'New Bloom', 456, true)
  ];
  constructor(private http: Http) { }

  /*uploadProducts() {
    return this.http.put('https://entenso-shop.firebaseio.com/produts.json', this.products).subscribe(
      (response: Response) => {
        console.log(response.json());
      }
    );
  }*/
  /*downloadProducts() {
    return this.http.get('https://entenso-shop.firebaseio.com/produts.json').subscribe(
      (response: Response) => {
        this.products = response.json();
        console.log(this.products);
      }
    );
  }*/

  getProducts() {
    return this.products;
  }
  getProduct(id: number) {
    return this.products.slice().find(card => card.id === id);
  }

}
