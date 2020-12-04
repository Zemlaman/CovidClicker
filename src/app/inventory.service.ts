import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private inventory: Item[] = [];
  constructor() { }
  getInventory(): Item[] {
    return this.inventory;
  }
  giveItemToInvetory(item: Item): void{
    this.inventory.push(item);
  }
}
