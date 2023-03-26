export class NFTElement {
  price = 0.25;
  priceUnit = "ETH";
  timeRemaining = "3h 50m 2s";
  constructor(obj) {
    this.title = obj["title"];
    this.imageIndex = obj["imageIndex"];
    this.category = obj["category"];
  }
}
