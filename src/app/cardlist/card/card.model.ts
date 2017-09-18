export class Card {
  constructor(public id: number,
              public imgPath: string,
              public name: string,
              public description: string,
              public producer: string,
              public price: number,
              public availability: boolean) {}
}
