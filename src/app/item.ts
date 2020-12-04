class Item {
  private name: string;
  private description: string;
  private boughTimes: number;
  private clicksPerSecond: number;
  private pointsPerClick: number;
  private price: number;
  private icon: number;
  constructor(
              name: string,
              price: number,
              clicksPerSecond: number,
              boughTimes: number,
              description: string,
              pointsPerClick: number,
              icon: number
              ) {
    this.name = name;
    this.price = price;
    this.clicksPerSecond = clicksPerSecond;
    this.boughTimes = boughTimes;
    this.description = description;
    this.pointsPerClick = pointsPerClick;
    this.icon = icon;
  }
  getName(): string {
    return this.name;
  }
  getClicksPerSecond(): number {
    return this.clicksPerSecond;
  }
  setClicksPerSecond(value: number): void{
    this.clicksPerSecond = value;
  }
  setName(value: string): void {
    this.name = value;
  }
  getDescription(): string {
    return this.description;
  }
  setDescription(value: string): void {
    this.description = value;
  }
  getPointsPerClick(): number {
    return this.pointsPerClick;
  }
  setPointsPerClick(value: number): void {
    this.pointsPerClick = value;
  }
  getPrice(): number {
    return this.price;
  }
  setPrice(value: number): void {
    this.price = value;
  }
}
